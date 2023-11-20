

//inserire parola palindroma

function palindromium(){
let parolaUtente = prompt("Inserisci qui la parola");
let parolaInvertita = invertiParola(parolaUtente);

if(parolaUtente == parolaInvertita){
    alert("Complimenti! La parola che hai inserito è palindroma!");
}else{
    alert("Ahi ahi ahi! Quella non era una parola palindroma!!");
}
}



//Funzioni

function invertiParola(str){
    var strInversa = str.split('').reverse().join('');
    return strInversa;
  }

