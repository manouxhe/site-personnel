import PostCard from "../../components/post-card";
import LoginOverlay from "../../components/LoginOverlay";
import { getCurrentUser } from "@/lib/auth";
import { createPost, getPosts, deletePost, editPost } from "../../lib/task";

export default async function Post() {
  const Posts = await getPosts();
  const user = await getCurrentUser();
  const isLoggedIn = !!user;

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {!isLoggedIn && <LoginOverlay />}
      <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
        Mon blog privé
      </h2>

      <div className="grid grid-cols-1 gap-6 min-[700px]:grid-cols-2">
        {Posts.map((Post) => (
          <PostCard
            id={Post.id}
            content={Post.content}
            createdAt={Post.createdAt}
          />
        ))}
      </div>
    </section>
  );
}
