/* Notre équipe de football participe à un championnat
dans laquelle elle a joué 10 matchs.
Le résultat d'un match est comme suit : "3-0"
Le premier chiffre correspond au nombre de but que notre équipe a marqué.
Le deuxième correspond au nombre de but que notre adversaire a marqué.
Victoire : +3 points
Match nul : +1 points
Défaite : +0 point
Ci-dessous, tu as un tableau avec tous les résultats de notre équipe,
qui te permet de tester si ta fonction est bonne. Le résultat doit être 13
écris la fonction qui nous permet de récupérer le nombre
de points de notre équipe à la fin du championnat

Voilà un exemple de tableau que peut recevoir ma fonction getPoints

const scores = ['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:3'];
*/

function getPoints(scores) {
  //Initialise un compteur de points à 0
  let points = 0;
  //Parcourt le tableau des scores avec une boucle for
  for (let i = 0; i < scores.length; i++) {
    //Sépare les scores de chaque équipe avec le caractère ":"
    const match = scores[i].split(":");
    //Convertit les scores en nombres entiers avec parseInt
    const ourScore = parseInt(match[0]);
    const theirScore = parseInt(match[1]);
    //Ajout des points en fonction du résultat du match
    if (ourScore > theirScore) {
      points += 3; //Victoire +3 points
    } else if (ourScore === theirScore) {
      points += 1; //Match nul +1 point
    } //Pas besoin d'ajouter de points en cas de défaite
  }
  return points;
}

module.exports = getPoints;
