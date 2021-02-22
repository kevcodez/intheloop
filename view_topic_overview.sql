drop view vw_topic_overview;
CREATE VIEW vw_topic_overview as
SELECT
  topic.id AS id,
  topic.info AS info,
  array_agg(DISTINCT developer.info) AS developers,
  array_agg(DISTINCT book.info) AS books,
  array_agg(DISTINCT podcast.info) AS podcasts,
  array_agg(DISTINCT newsletter.info) AS newsletters,
  array_agg(DISTINCT course.info) AS courses,
  (
    WITH r AS (
      SELECT
        distinct info,
        (info ->> 'publishedAt') :: timestamptz
      FROM
        release rt
      WHERE
        rt.topic = topic.id
      ORDER BY
        (info ->> 'publishedAt') :: timestamptz desc
      limit
        6
    )
    SELECT
      json_agg(info)
    FROM
      r
  ) AS releases,
  (
    WITH c AS (
      SELECT
        DISTINCT info
      FROM
        community
      WHERE
        id = ANY(topic.communities)
    )
    SELECT
      json_agg(
        info
        ORDER BY
          (info ->> 'official') :: boolean ASC
      )
    FROM
      c
  ) AS communities,
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
  ) as latestRelease,
  (
    WITH b AS (
      SELECT
        DISTINCT info
      FROM
        blog
      WHERE
        id = ANY(topic.blogs)
    )
    SELECT
      json_agg(
        info
        ORDER BY
          (info ->> 'official') :: boolean ASC
      )
    FROM
      b
  ) AS blogs
FROM
  topic topic
  LEFT JOIN developer developer ON developer.id = ANY(topic.developers)
  LEFT JOIN book book ON book.id = ANY(topic.books)
  LEFT JOIN podcast podcast ON podcast.id = ANY(topic.podcasts)
  LEFT JOIN newsletter newsletter ON newsletter.id = ANY(topic.newsletters)
  LEFT JOIN course course ON course.id = ANY(topic.courses)
GROUP BY
  topic.id