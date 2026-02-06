export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const url = searchParams.get('url');
  
    if (!url) return Response.json({ error: 'URL requise' });
  
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        signal: AbortSignal.timeout(8000)
      });
  
      const html = await response.text();
  
      // Extraction regex simple (sans DOMParser)
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                       html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i);
  
      const title = titleMatch ? titleMatch[1].trim().slice(0, 50) : 'Sans titre';
      const description = descMatch ? descMatch[1].trim().slice(0, 150) : 'Découvrez ce projet';
  
      // ✅ HOSTNAME SANS new URL()
      const hostname = url.match(/https?:\/\/([^\/]+)/)?.[1] || 'site.com';
      const favicon = `https://favicon.im/${hostname}`;
  
      return Response.json({
        id: parseInt(id || '0'),
        url,
        nom: title,
        description,
        type: 'Application Web',
        favicon
      });
    } catch {
      const hostname = url.match(/https?:\/\/([^\/]+)/)?.[1] || 'site.com';
      return Response.json({
        id: parseInt(id || '0'),
        url,
        nom: hostname,
        description: 'Site disponible',
        type: 'Application Web',
        favicon: `https://favicon.im/${hostname}`
      });
    }
  }
  