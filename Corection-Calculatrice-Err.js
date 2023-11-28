function calculatrice(){
    let op = prompt("Veuillez entrer une opéaration");
    let a = parseFloat(prompt("Veuillez entrer la première valeur"));
    let b = parseFloat(prompt("Veuillez entrer la seconde valeur"));
  
    switch(op){
      case '+':
        return a + b; 
        break;
      case '-':
        return a - b; 
        break;
      case '*':
        return a * b; 
        break;
      case '/':
        return a / b; 
        break;
      default:
        console.log('Votre opération est incorrecte. Choisir entre * / + - !')
    }
  }
  
  console.log(calculatrice())