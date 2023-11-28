// Variables
const MyChar = "Ce n'est pas si simple que ça !";
const Vowell = "AEIOUaeiou";
let VowellNumber = 0;

// Fonction compteur de voyelle dans une chaine
function VowellCounter(char) {
    for (let i = 0; i < char.length; i++) { 
        // .length = nombre de caractères de la chaine
      
        if (Vowell.indexOf(char[i]) !== -1) {
        // .indexOf = recherche élément en position char[i] de la Chaine testée
        //dans la chaine Vowell 
        //--> Renvoie nombre positif si élément trouvé 
        //--> Renvoie -1 sinon
            VowellNumber++;// Incrémenter le compteur de voyelles si .indexOf différent de -1
        }
    
    }
    return VowellNumber;
}
  
// Résultat
const Result = VowellCounter(MyChar);
console.log("Le nombre de voyelles dans la chaîne est : " + Result);