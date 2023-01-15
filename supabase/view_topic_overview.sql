drop view vw_topic_overview;
CREATE VIEW vw_topic_overview as


SELECT
  topic.id AS id,
  topic.info AS info,
-- TODO filter out null [null]
  array_agg(distinct book.id)  FILTER (WHERE book.id is not null) as book_ids,
  -- TODO filter out null [null]
  array_agg(distinct course.id) FILTER (WHERE course.id is not null) as course_ids,
  (
    SELECT
      info
    FROM
      release r
    where
      r.topic = topic.id
      AND r.info ->> 'version' = topic.info ->> 'latestVersion'
    LIMIT
      1
  ) as latestRelease
FROM
  topic topic
  LEFT JOIN book book ON topic.id = ANY(book.topics)
  LEFT JOIN course course ON topic.id = ANY(course.topics)
GROUP BY
  topic.id