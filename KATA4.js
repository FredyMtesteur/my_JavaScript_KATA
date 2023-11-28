//  Variables
let MyFavoritOldCars = ["Jaguar","Bugatti","Delahaye","Delage"];

// Fonction dernier élément d'un tableau
function LastFavorit(MyFavoritOldCars) {
    let TableSize = MyFavoritOldCars.length
    return MyFavoritOldCars[TableSize-1];
  }

// Résultat
const Result = LastFavorit(MyFavoritOldCars)
console.log(`La dernière de mes vieilles voitures favorites est ${Result}.`)