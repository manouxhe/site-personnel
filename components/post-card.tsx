type PostCardProps = {
  content: string
  createdAt: Date
}

export default function PostCard({ content, createdAt }: PostCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <p className="text-gray-800 mb-2">{content}</p>
      <p className="text-xs text-gray-400">
        {createdAt.toLocaleString()}
      </p>
    </div>
  )
}