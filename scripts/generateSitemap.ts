import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'
import { Database } from '~/lib/database.types'
import * as fs from 'fs'

(async () => {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  )

  const staticUrls = [
    '',
    'contact',
    'imprint',
    'privacy-policy',
    'courses',
    'books',
  ]
  let urls = staticUrls
    .map((staticUrl) =>
      sitemapUrl(`https://intheloop.dev/${staticUrl}`, 'weekly')
    )
    .join('\n')

  const [{ data: topics }, { data: books }, { data: courses }] =
    await Promise.all([
      supabaseClient.from('topic').select('id'),
      supabaseClient.from('book').select('id'),
      supabaseClient.from('course').select('id'),
    ])

  urls += topics!
    .map((topic) =>
      sitemapUrl(`https://intheloop.dev/topics/${topic.id}`, 'daily')
    )
    .join('\n')

  urls += books!
    .map((book) =>
      sitemapUrl(`https://intheloop.dev/books/${book.id}`, 'weekly')
    )
    .join('\n')

  urls += courses!
    .map((course) =>
      sitemapUrl(`https://intheloop.dev/courses/${course.id}`, 'weekly')
    )
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
    </urlset> 
    `

  fs.writeFileSync('public/sitemap.xml', sitemap.toString())
})()

function sitemapUrl(url: string, frequency: string) {
  return `<url>
  <loc>${url}</loc>
  <changefreq>${frequency}</changefreq>
</url>`
}