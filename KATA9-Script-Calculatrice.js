// Débogage script
//let Nbr1 = 2
//let Nbr2 = 3
//let Operation = "+"

// Var
let Nbr1 = parseFloat(prompt("Entrez le premier nombre :"));
let Nbr2 = parseFloat(prompt("Entrez le deuxième nombre :"));
let Calcul = prompt("Quelle opération voulez vous réaliser (+, -, *, /) :");


// Fonction
function Calculatrice(nombre1, nombre2, operation) {
  switch (Calcul) {
    case "+":
      return `${Nbr1} + ${Nbr2} = ${Nbr1 + Nbr2}`;
    case "-":
      return `${Nbr1} - ${Nbr2} = ${Nbr1 - Nbr2}`;
    case "*":
      return `${Nbr1} * ${Nbr2} = ${Nbr1 * Nbr2}`;
    case "/":
      if (Nbr2 !== 0) {
        return `${Nbr1} / ${Nbr2} = ${Nbr1 / Nbr2}`;
      } else {
        return "Division par zéro impossible !";
      }
    default:
      return "! Opération non valide !";
  }
}

// Résultat
const Result = Calculatrice(Nbr1, Nbr2, Calcul);// Resultat fonction
const InputOperation = document.getElementById("Operation");// Champ Opération
InputOperation.value = Result;

// Débogage script
//console.log(Result);
