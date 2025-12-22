import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export type PostMeta = {
  slug: string
  title: string
  date?: string
  excerpt?: string
}

export type Post = PostMeta & {
  contentHtml: string
}

function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const realSlug = slug.replace(/\.mdx?$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content)
  const contentHtml = processedContent.toString()

  const meta: PostMeta = {
    slug: realSlug,
    title: data.title || realSlug,
    date: data.date,
    excerpt: data.excerpt,
  }

  return {
    ...meta,
    contentHtml,
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = getPostSlugs()

  const posts: PostMeta[] = []

  for (const slug of slugs) {
    const post = await getPostBySlug(slug)
    if (post) {
      posts.push({
        slug: post.slug,
        title: post.title,
        date: post.date,
        excerpt: post.excerpt,
      })
    }
  }

  return posts.sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return a.date < b.date ? 1 : -1
  })
}


