// Variables
const Nbr = 8

// Fonction parité
function PairImpair(nombre) {
  return nombre % 2 === 0 ? 'pair' : 'impair';  
  //si Résiduel de la division modulo = 0 
  //-> renvoie Pair sinon renvoie Impair
}

// Résultat
const Result = PairImpair(Nbr)
console.log(`Le nombre ${Nbr} est un nombre ${Result}.`)

