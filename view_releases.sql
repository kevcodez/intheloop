drop view if exists vw_releases;
CREATE VIEW vw_releases as
select
  r.*,
  t.info as topic_info
from
  release r
  join topic t on r.topic = t.id
ORDER BY
  (r.published_at) :: timestamptz desc;