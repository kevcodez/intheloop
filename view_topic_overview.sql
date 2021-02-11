drop view vw_topic_overview;
CREATE VIEW vw_topic_overview as 


SELECT
  topic.id as id,
  topic.info AS info,
  array_agg(DISTINCT developer.info) AS developers,
  array_agg(DISTINCT book.info) AS books,
  array_agg(DISTINCT podcast.info) as podcasts,
  array_agg(DISTINCT blog.info) as blogs,
  array_agg(DISTINCT newsletter.info) as newsletters,
  array_agg(DISTINCT community.info) as communities,
  array_agg(DISTINCT course.info) as courses,
  (SELECT array_agg(DISTINCT info) from release) as releases
FROM
  topic
  LEFT JOIN developer developer ON developer.id = ANY(topic.developers)
  LEFT JOIN book book ON book.id = ANY(topic.books)
  LEFT JOIN podcast podcast ON podcast.id = ANY(topic.podcasts)
  LEFT JOIN blog blog ON blog.id = ANY(topic.blogs)
  LEFT JOIN newsletter newsletter ON newsletter.id = ANY(topic.newsletters)
  LEFT JOIN community community ON community.id = ANY(topic.communities)
  LEFT JOIN course course ON course.id = ANY(topic.courses)

GROUP BY
  topic.id