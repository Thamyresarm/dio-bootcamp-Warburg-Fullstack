let str = gets(); 
let strSplit = str.toLowerCase().split('');
let brancos;
let vogais;

vogais = strSplit.filter(vetorVogais);
brancos = strSplit.filter(vetorBrancos);

function vetorVogais(str){
  if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u"){
    return true;
  } 
}

function vetorBrancos(str){
  if (str === " "){
    return true;
  }
}

print("Espacos em branco: " + brancos.length + " Vogais: " + vogais.length)