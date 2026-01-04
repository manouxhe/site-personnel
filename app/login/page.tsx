import PostCard from "@/components/post-card";
import LoginOverlay from "@/components/LoginOverlay";
import { getCurrentUser } from "@/lib/auth";
import { createPost, getPosts, editPost, deletePost } from "@/lib/task";

export default async function PrivateBlog() {
  const posts = await getPosts();
  const user = await getCurrentUser();
  const isLoggedIn = !!user;

  if (!isLoggedIn) return <LoginOverlay />;

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
        Mon blog privé
      </h2>

      {/* FORMULAIRE CRÉATION */}
      <form action={createPost} className="mb-8">
        <textarea
          name="content"
          placeholder="Write something..."
          className="w-full p-3 rounded-lg border mb-3"
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Post
        </button>
      </form>

      {/* LISTE  POSTS */}
      <div className="grid grid-cols-1 gap-6 min-[700px]:grid-cols-2">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            content={post.content}
            createdAt={post.createdAt}
            showActions={true} // édition/suppression possible
          />
        ))}
      </div>
    </section>
  );
}
