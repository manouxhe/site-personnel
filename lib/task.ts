"use server"; //ndique à Next.js que tout le code de ce fichier s’exécute uniquement côté serveur.

import { redirect } from "next/navigation"; //Permet de forcer une navigation (rechargement ou changement de page) après une action serveur.

/* Définir la structure exacte d’un post de blog  Les types n’existent pas à l’exécution.
Ils servent uniquement à éviter les erreursV*/
export type Post = {
  content: string;
  createdAt: Date;
};

/*export : rend la fonction accessible depuis d’autres fichiers
/* Stocker les posts côté serveur, dans un tableau. Le navigateur n’y a PAS accès directement*/
const posts: Post[] = [];

/* Permettre à une page de récupérer la liste des posts. */
export async function getPosts(): Promise<Post[]> {
  /*Une fonction async retourne toujours une promesse*/
  return posts;
}

/*Cette fonction dit :

“Quelqu’un peut me demander la liste des messages,
et je la renverrai.”*/

/* 4Créer un post */
export async function createPost(form: FormData) {
  /*Créer un nouveau post à partir des données envoyées par un formulaire HTML*/

  /*Là, quelqu’un a rempli un formulaire et a cliqué sur un bouton.
Le navigateur envoie  “Voilà ce que l’utilisateur a tapé”*/
  const content = String(
    form.get("content")
  ); /*On le transforme en texte (String) pour être sûrs */

  posts.unshift({
    /*unshift ajoute l’élément au début du tableau*/ content,
    createdAt: new Date(),
  });

  
  redirect("/blog"); //Recharger la page /blog pour afficher immédiatement le nouveau post
}
export async function editPost(form: FormData) {
  const index = Number(form.get('index'))
  const newContent = String(form.get('content'))

  posts[index].content = newContent

  redirect('/blog')
}

/* 🗑 DELETE */
export async function deletePost(index: number) {
  posts.splice(index, 1)
  redirect('/blog')
}