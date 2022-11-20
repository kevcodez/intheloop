export default async () => {
    return await fetch('/api/sitemap_routes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  }