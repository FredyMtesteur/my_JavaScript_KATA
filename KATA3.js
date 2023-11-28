// Variables
const Int1 = 5 // nombre entier 1
const Int2 = 10 // nombre entier 2
const Int3 = 9 // nombre entier 3


// Fonction plus grand entier
function HeigherInteger(i1,i2,i3) {
  let HighInt = Int1
    if (Int2 > HighInt){
      HighInt = Int2
    } else if (Int3 > HighInt){
      HighInt = Int3
    } 

    return `Le plus grand des entiers = ${HighInt}.`;
  }

// Résultat
console.log(HeigherInteger(Int1,Int2,Int3))