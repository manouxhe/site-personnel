"use client";

import { useState } from "react";
import { editPost, deletePost } from "@/lib/task"; // On importe les fonctions pour l'édition et la suppression des posts.

type PostCardProps = {
  id: string;
  content: string;
  createdAt: Date;
};

export default function PostCard({ id, content, createdAt }: PostCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      {!isEditing ? (
        <>
          <p className="text-gray-800 mb-2">{content}</p>
          <p className="text-xs text-gray-400 mb-4">
            {new Date(createdAt).toLocaleString()}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500"
            >
              Edit
            </button>

            <form action={deletePost} method="POST">
              <input type="hidden" name="id" value={id} />
              <button type="submit" className="text-red-500">
                ✕
              </button>
            </form>
          </div>
        </>
      ) : (
        <form action={editPost} method="POST" className="flex flex-col gap-3">
          <input type="hidden" name="id" value={id} />
          <textarea
            name="content"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="text-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
