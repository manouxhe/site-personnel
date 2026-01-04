import PostCard from "@/components/post-card";
import { getPosts } from "@/lib/task";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <h1 className="text-3xl font-bold mb-6">My daily Blog</h1>

      <div className="grid grid-cols-1 gap-6 min-[700px]:grid-cols-2">
        {posts.map((post) => (
          <PostCard
            key={post.id}        // clé unique 
            id={post.id}
            content={post.content}
            createdAt={post.createdAt}
            showActions={false}  // lecture seule
          />
        ))}
      </div>
    </main>
  );
}
