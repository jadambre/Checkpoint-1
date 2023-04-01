/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes :
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice
où chaque sous-tableau liste les positions des sieges d'une rangée.

exemple du rendu final :

[
  ['1-1', '1-2', '1-3', ..., '1-100'],
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ...
  ['26-1', '26-2', '26-3', ..., '26-100']
]
*/
//Définit une fonction nommée theaterSieges qui ne prend pas d'argument
function theaterSieges() {
  //Création d'un tableau vide "seats" qui sera utilisé pour stocker toutes les rangées de sièges
  const seats = [];
  //Boucle des rangées de 1 à 26
  for (let i = 1; i <= 26; i++) {
    //Création d'un tableau vide "row" pour stocker les sièges dans la rangée actuelle
    const row = [];
    //Boucle des sièges de 1 à 100 dans la rangée actuelle
    for (let j = 1; j <= 100; j++) {
      //Ajout d'une chaîne de caractères représentant le siège actuel à la rangée
      //i=numéro de la rangée, j=celui du siège dans cette rangée
      //ajout d'un tiret entre pour rendre la place plus lisible
      row.push(i + "-" + j);
      //Ajoute la rangée complète au tableau "seats"
    }
    seats.push(row);
    //Renvoie le tableau "seats" soit tous les sièges dans le théâtre
  }
  return seats;
}
// Pour visualiser la fonction
console.log(theaterSieges());

module.exports = theaterSieges;
