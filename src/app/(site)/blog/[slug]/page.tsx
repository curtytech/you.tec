import React from 'react'
import Link from 'next/link'

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    
    // Check if response is OK and looks like JSON
    if (!res.ok) {
      console.warn('API returned error:', res.status, res.statusText)
      return []
    }
    
    const contentType = res.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('API returned non-JSON content:', contentType)
      return []
    }

    const posts = await res.json()
    const postsArray = Array.isArray(posts) ? posts : posts.data || []

    return postsArray.map((post: any) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  let post: any = null
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${slug}`)
    if (res.ok) {
      const data = await res.json()
      // Adjust if data is wrapped in 'data'
      post = data.data || data
    }
    console.log(res)
  } catch (error) {
    console.error('Error fetching post:', error)
  }

  if (!post) {
    return (
      <section className="relative min-h-screen bg-gray-900 pt-32 pb-20 flex items-center justify-center">
        <h1 className="text-white text-3xl">Post não encontrado</h1>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen bg-gray-900 pt-32 pb-20">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/images/hero/you_hero.avif')" }}
      ></div>
      <div className="absolute inset-0 bg-blue-900 opacity-5 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto max-w-4xl px-4" style={{ marginTop: '170px' }}>
        <Link href="/" className="group inline-flex items-center gap-2 py-2 px-4 rounded-md bg-primary text-white hover:bg-blue-700 transition duration-300 mb-10">
          Voltar
        </Link>

        <article className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-2xl">
          {post.banner_url && (
            <img src={post.banner_url} alt={post.title} className="w-full h-auto rounded-lg mb-8 object-cover" />
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          <div
            className="text-gray-300 leading-relaxed text-lg blog-content"
            dangerouslySetInnerHTML={{ __html: post.content || post.body || '' }}
          />
          <div className="flex justify-end items-center space-x-1 text-sm text-gray-300 group-hover:text-blue-400 duration-[0.3s] mt-5">
            <span className="text-gray-400">Publicado em</span>
            <time dateTime={post.published_at}>{new Date(post.published_at).toLocaleDateString('pt-BR')}</time>
            <p>por Phelipe Curty</p>
          </div>

        </article>
      </div>
    </section>
  )
}
