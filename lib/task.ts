'use server';

import { db } from '@/db'; // Assurez-vous d'avoir importé votre connexion à la base de données correctement.
import { postsTable } from '@/db/schema';
import { eq, desc } from 'drizzle-orm'; // Assurez-vous d'avoir importé ces fonctions de Drizzle correctement.
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

/* ================= READ ================= */
export async function getPosts() {
  return await db
    .select()
    .from(postsTable)
    .orderBy(desc(postsTable.createdAt));  // On récupère les posts triés par date de création (du plus récent au plus ancien).
}

/* ================= CREATE ================= */
export async function createPost(form: FormData) {
  const content = String(form.get('content')); // On transforme le contenu récupéré du formulaire en chaîne de caractères.

  await db.insert(postsTable).values({ content }); // On insère le post dans la base de données.

  redirect((await headers()).get('referer') ?? '/blog');  // On redirige vers la page des posts.
}

/* ================= UPDATE ================= */
export async function editPost(form: FormData) {
  const id = String(form.get('id'));  // On récupère l'ID du post à modifier.
  const content = String(form.get('content'));  // On récupère le nouveau contenu du post.

  await db
    .update(postsTable)
    .set({ content })  // On met à jour le contenu du post.
    .where(eq(postsTable.id, id));  // On trouve le post à modifier via son ID.

  redirect((await headers()).get('referer') ?? '/blog');  // On redirige vers la page des posts après modification.
}

/* ================= DELETE ================= */
export async function deletePost(form: FormData) {
  const id = String(form.get('id'));  // On récupère l'ID du post à supprimer.

  await db.delete(postsTable).where(eq(postsTable.id, id));  // On supprime le post de la base de données.

  redirect((await headers()).get('referer') ?? '/blog');  // On redirige vers la page des posts après suppression.
}
