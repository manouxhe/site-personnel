import { createPost, getPosts } from '@/lib/task'
import PostCard from '@/components/post-card'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Mini Blog</h1>

      {/* FORMULAIRE */}
      <form action={createPost} className="mb-8">
        <textarea
          name="content"
          placeholder="Write something..."
          className="w-full p-3 rounded-lg border mb-3"
          required
        />
        <button className="bg-pink-400 text-white px-4 py-2 rounded-lg">
          Post
        </button>
      </form>

      {/* AFFICHAGE DES POSTS */}
      {posts.map((post, index) => (
        <PostCard
          key={index}
          content={post.content}
          createdAt={post.createdAt}
        />
      ))}
    </main>
  )
}
