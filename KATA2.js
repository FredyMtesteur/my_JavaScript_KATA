// Variables
const Nb = 5 // Nombre à factoriser

// Fonction factoriel
function Factoriel() {
    let Fact = 1;
  
    for (let i = 2; i <= Nb; i++) {
      Fact = Fact * i;
    }
  
    return `Le factoriel de ${Nb} = ${Fact}.`;
  }

// Résultat
console.log(Factoriel(Nb))