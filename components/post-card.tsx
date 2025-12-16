'use client'

import { useState } from 'react'
import { editPost, deletePost } from '@/lib/task'

type PostCardProps = {
  content: string
  createdAt: Date
  index: number
}

export default function PostCard({ content, createdAt, index }: PostCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [newContent, setNewContent] = useState(content)

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      
      {/* 🟢 MODE AFFICHAGE */}
      {!isEditing && (
        <>
          <p className="text-gray-800 mb-2">{content}</p>
          <p className="text-xs text-gray-400 mb-4">
            {createdAt.toLocaleString()}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500"
            >
              Edit
            </button>

            <form action={() => deletePost(index)}>
              <button className="text-red-500">Delete</button>
            </form>
          </div>
        </>
      )}

      {/* ✏️ MODE ÉDITION */}
      {isEditing && (
        <form action={editPost} className="flex flex-col gap-3">
          <input type="hidden" name="index" value={index} />

          <textarea
            name="content"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

          <div className="flex gap-3">
            <button className="bg-blue-500 text-white px-4 py-1 rounded">
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
  )
}
