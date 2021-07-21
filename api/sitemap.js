import { createClient } from '@supabase/supabase-js'

export default async function (req, res, next) {
  const supabaseClient = createClient(
    process.env.NUXT_ENV_SUPABASE_URL,
    process.env.NUXT_ENV_SUPABASE_KEY
  )

  const staticUrls = [
    '',
    'contact',
    'imprint',
    'privacy-policy',
    'roadmap',
    'courses',
    'books',
  ]
  let urls = staticUrls
    .map((staticUrl) =>
      sitemapUrl(`https://intheloop.dev/${staticUrl}`, 'weekly')
    )
    .join('\n')

  const [{ data: topics }, { data: books }, { data: courses }] =
    await Promise.all(
      supabaseClient.from('topic').select('id'),
      supabaseClient.from('book').select('id'),
      supabaseClient.from('course').select('id')
    )

  urls += topics
    .map((topic) =>
      sitemapUrl(`https://intheloop.dev/topics/${topic.id}`, 'daily')
    )
    .join('\n')

  urls += books
    .map((book) =>
      sitemapUrl(`https://intheloop.dev/books/${book.id}`, 'weekly')
    )
    .join('\n')

  urls += courses
    .map((course) =>
      sitemapUrl(`https://intheloop.dev/courses/${course.id}`, 'weekly')
    )
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
    </urlset> 
    `

  res.setHeader('Content-Type', 'application/xml')
  res.end(sitemap.toString())
}

function sitemapUrl(url, frequency) {
  return `<url>
  <loc>${url}</loc>
  <changefreq>${frequency}</changefreq>
</url>`
}
