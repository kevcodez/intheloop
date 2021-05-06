import { createClient } from '@supabase/supabase-js'

export default async function (req, res, next) {
  const supabaseClient = createClient(
    'https://pvnyntuqgqafdtgzucqj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzA3MjMyMiwiZXhwIjoxOTI4NjQ4MzIyfQ.47NmRknfnVDcLDWZouiFjVErXkw15kYJrUdkXt5Ii9I'
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

  const { data: topics } = await supabaseClient
    .from('topic')
    .select('id')

  urls += topics
    .map((topic) =>
      sitemapUrl(`https://intheloop.dev/topics/${topic.id}`, 'daily')
    )
    .join('\n')

  const { data: books } = await supabaseClient.from('book').select('id')

  urls += books
    .map((book) =>
      sitemapUrl(`https://intheloop.dev/books/${book.id}`, 'weekly')
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
