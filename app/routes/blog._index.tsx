import { useLoaderData, useRouteError } from '@remix-run/react'
import {
  PageViewer,
  cleanPage,
  fetchPage,
  fetchPages,
  fetchTags,
  useReactBricksContext,
} from 'react-bricks/frontend'

import Layout from '~/components/Layout'
import PostListItem from '~/components/PostListItem'
import TagListItem from '~/components/TagListItem'

export const loader = async ({ params }: { params: any }) => {
  const posts = await fetchPages(process.env.API_KEY as string, {
    type: 'blog',
    pageSize: 1000,
    sort: '-publishedAt',
  })

  const { items: tags } = await fetchTags(process.env.API_KEY as string)
  tags.sort()

  const [header, footer] = await Promise.all([
    fetchPage('header', process.env.API_KEY as string).catch(() => {
      throw new Error(
        `Cannot find header. Create a new 'header' entity under 'Layout'`
      )
    }),
    fetchPage('footer', process.env.API_KEY as string).catch(() => {
      throw new Error(
        `Cannot find footer. Create a new 'footer' entity under 'Layout'`
      )
    }),
  ])

  return {
    posts,
    tags,
    header,
    footer,
  }
}

export default function Page() {
  const { posts, tags, header, footer } = useLoaderData<typeof loader>()
  // Clean the received content
  // Removes unknown or not allowed bricks

  const { pageTypes, bricks } = useReactBricksContext()
  const headerOk = header ? cleanPage(header, pageTypes, bricks) : null
  const footerOk = header ? cleanPage(footer, pageTypes, bricks) : null

  return (
    <Layout>
      <PageViewer page={headerOk} />
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <h1 className="max-w-2xl text-4xl sm:text-6xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white pb-4 mt-10 sm:mt-12 mb-4">
            Our latest articles
          </h1>

          <div className="flex flex-wrap items-center">
            {tags
              ?.filter((tag) => tag !== 'popular')
              .map((tag) => (
                <TagListItem tag={tag} key={tag} />
              ))}
          </div>

          <hr className="mt-6 mb-10 dark:border-gray-600" />

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:gap-12">
            {posts?.map((post) => {
              return (
                <PostListItem
                  key={post.id}
                  title={post.meta.title || ''}
                  href={post.slug}
                  content={post.meta.description || ''}
                  author={post.author}
                  date={post.publishedAt || ''}
                  featuredImg={post.meta.image}
                />
              )
            })}
          </div>
        </div>
      </div>
      <PageViewer page={footerOk} />
    </Layout>
  )
}
