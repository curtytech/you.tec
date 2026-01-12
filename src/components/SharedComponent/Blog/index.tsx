'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import BlogCard from './blogCard'

const Blog: React.FC = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    async function getPosts() {
      console.log(process.env.NEXT_PUBLIC_API_URL)
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
        const data = await res.json()
        console.log(data.data)
        setPosts(data.data)
      } catch (error) {
        console.error('Erro ao buscar posts', error)
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [mounted])

  if (!mounted || loading) {
    return <div className="text-center py-10">Carregando posts...</div>
  }

  return (
    <section className="flex flex-wrap justify-center dark:bg-darkmode" id="blog">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="sm:mb-11 mb-3 text-4xl font-bold">
            Blog e Notícias
          </h2>

          <Link href="#" className="flex items-center gap-3">
            Ver mais
            <Icon icon="solar:arrow-right-outline" width={30} height={30} />
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-7">
          {posts.map((post: any, i) => (
            <div key={i} className="md:col-span-4 sm:col-span-6 col-span-12">

              <Link href={`/blog/${post.slug}`} className="block">
                <div className="antialiased text-white ">
                  <div className="bg-gradient-to-b from-[#000F30] to-[#1c2e57] rounded-lg overflow-hidden shadow-2xl  group overflow-hidden transition-transform duration-300 hover:translate-y-[-10px]">
                    <div className="h-48 w-full overflow-hidden">
                      <img className="h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-125 object-end" src={post.banner_url ?? 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=60'} alt="Home in Countryside" />
                    </div>

                    <div className="p-6 pb-4 group-hover:bg-gradient-to-b from-[# 3b4765] to-[#182033] duration-[0.3s]">
                      <p className="mt-1 font-semibold text-xl leading-tight truncate group-hover:text-blue-600 duration-[0.3s] " title={post.title}>{post.title}</p>
                      <p className="Card-info text-gray-300 font-light text-sm mt-2 group-hover:text-blue-400" title={post.description}>
                        {post.description.length > 40 ? post.description.slice(0, 40) + '...' : post.description}
                      </p>
                      <div className="mt-4 flex items-center">
                        <div className="flex-shrink-0">
                          {/* <span className="sr-only text-blue-600">Phelipe Curty</span> */}
                          <img className="h-10 w-10 rounded-full" src="/images/logo/youtec-logo.svg" alt="" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-white">
                            <p className="hover:text-blue-600 group-hover:text-blue-600 duration-[0.3s]">Phelipe Curty</p>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-300 group-hover:text-blue-400 duration-[0.3s] ">
                            <time dateTime={post.published_at}>{new Date(post.published_at).toLocaleDateString('pt-BR')}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Blog
