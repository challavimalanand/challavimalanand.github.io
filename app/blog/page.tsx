import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Legal Insights Blog | Advocate Challa Vimalanand',
  description:
    'Articles and insights on civil law, land litigation, marriage disputes, and patent & IP services by Advocate Challa Vimalanand.',
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 py-16 sm:py-24">
        <header className="mb-10 sm:mb-12">
          <p className="text-sm text-blue-700 mb-2">Blog</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Legal Insights
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Clear & practical explanations on civil law and intellectual property 
            from Advocate Challa Vimalanand.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-gray-600">
            No articles have been published yet. Please check back soon.
          </p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all p-5 sm:p-6"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  {post.date && (
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  )}
                  {post.excerpt && (
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="mt-3 inline-flex text-sm font-medium text-blue-600 hover:text-blue-700">
                    Read article →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10">
          <Link
            href="/"
            className="text-sm text-blue-700 hover:text-blue-900 font-medium"
          >
            ← Back to main site
          </Link>
        </div>
      </div>
    </main>
  )
}


