/*
Voici un tableau de personnes.
Tu dois écire le code de la fonction findAdult, qui renvoie un
nouveau tableau avec 2 tableaux à l'intérieur:
- Le premier avec uniquement les femmes adultes.
- Le deuxième avec uniquement les hommes adultes.
(Compte tenu qu'on est adulte à 18 ans)
Exemple : output [ [femmes adultes], [hommes adultes] ]

Voilà un exemple de tableau que peut recevoir ma fonction findAdults

const persons = [
  { name: 'Mary Poppins', age: 32, sex: 'female' },
  { name: 'Tony Stark', age: 36, sex: 'male' },
  { name: 'John Doe', age: 12, sex: 'male' },
  { name: 'Jane Doe', age: 6, sex: 'female' },
  { name: 'Maggie Simpson', age: 2, sex: 'female' },
  { name: 'Leonardo', age: 92, sex: 'male' },
  { name: 'Carla Moreau', age: 24, sex: 'female' },
  { name: 'Mickael Jackson', age: 17, sex: 'male' },
  { name: 'Penelope Milena', age: 27, sex: 'female' },
  { name: 'Homer Simpson', age: 45, sex: 'male' },
  { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
  { name: 'Carla Bruni', age: 54, sex: 'female' },
  { name: 'Lisa Simpson', age: 13, sex: 'female' },
  { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
  { name: 'Penelope Cruz', age: 47, sex: 'female' },
];

*/

//Définition de la fonction findAdults qui prend un tableau en argument
function findAdults(arr) {
  //Création d'un tableau adultFemales qui contient les femmes adultes
  //La méthode filtre les femmes qui ont un âge > ou = à 18 ans
  const adultFemales = arr.filter(
    (person) => person.sex === "female" && person.age >= 18
  );
  //Même chose pour les hommes
  const adultMales = arr.filter(
    (person) => person.sex === "male" && person.age >= 18
  );
  return [adultFemales, adultMales];
}

module.exports = findAdults;
