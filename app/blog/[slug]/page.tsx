import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Legal Insights Blog`,
    description: post.excerpt || `Article by Advocate Challa Vimalanand on ${post.title}.`,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-10 py-16 sm:py-24">
        <nav className="mb-6 text-sm">
          <Link href="/blog" className="text-blue-700 hover:text-blue-900 font-medium">
            ← Back to all articles
          </Link>
        </nav>

        <article className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <header className="mb-6 sm:mb-8">
            <p className="text-xs uppercase tracking-wide text-blue-600 mb-1">
              Legal Insights
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {post.title}
            </h1>
            {post.date && (
              <p className="text-xs sm:text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}
          </header>

          <div className="prose prose-sm sm:prose-base max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-blue-600">
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>
        </article>
      </div>
    </main>
  )
}


