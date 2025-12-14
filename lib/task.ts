'use server'

import { redirect } from 'next/navigation'

/* 1️⃣ Type d’un post */
export type Post = {
  content: string
  createdAt: Date
}

/* 2️⃣ Faux "stockage" en mémoire */
const posts: Post[] = []

/* 3️⃣ Lire les posts */
export async function getPosts(): Promise<Post[]> {
  return posts
}

/* 4️⃣ Créer un post */
export async function createPost(form: FormData) {
  const content = String(form.get('content'))

  posts.unshift({
    content,
    createdAt: new Date(),
  })

  redirect('/blog')
}
