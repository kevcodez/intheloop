drop view if exists vw_topic_blog_posts;
CREATE VIEW vw_topic_blog_posts as
select
  bp.info as blog_post_info,
  b.info as blog_info,
  unnest(bp.topics) topic_id
from
  blog_posts bp
  join blog b ON bp.blog_id = b.id
ORDER BY
  (bp.info ->> 'publishedAt') :: timestamptz desc;