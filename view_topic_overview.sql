drop view vw_topic_overview;
CREATE VIEW vw_topic_overview as 

SELECT
  topic.id AS id,
  topic.info AS info,
  array_agg(DISTINCT developer.info) AS developers,
  array_agg(DISTINCT book.info) AS books,
  array_agg(DISTINCT podcast.info) AS podcasts,
  array_agg(DISTINCT blog.info) AS blogs,
  array_agg(DISTINCT newsletter.info) AS newsletters,
  array_agg(DISTINCT course.info) AS courses,
  (
    SELECT
      array_agg(DISTINCT info)
    FROM
      RELEASE
    WHERE
      topic = topic.id
  ) AS releases,
  (
    WITH c AS (
      SELECT
        DISTINCT info
      FROM
        community
        WHERE id=ANY(topic.communities)
    )
    SELECT
      json_agg(
        info
        ORDER BY
          (info ->> 'official')::boolean ASC
      )
    FROM
      c
  ) AS communities
FROM
  topic topic
  LEFT JOIN developer developer ON developer.id = ANY(topic.developers)
  LEFT JOIN book book ON book.id = ANY(topic.books)
  LEFT JOIN podcast podcast ON podcast.id = ANY(topic.podcasts)
  LEFT JOIN blog blog ON blog.id = ANY(topic.blogs)
  LEFT JOIN newsletter newsletter ON newsletter.id = ANY(topic.newsletters)
  LEFT JOIN course course ON course.id = ANY(topic.courses)
GROUP BY
  topic.id