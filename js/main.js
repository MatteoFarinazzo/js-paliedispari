

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


//Pari o dispari

function paritarium(){
    
    let choice;

    let userChoice = prompt("Scegli pari o dispari");

    if(userChoice == "pari" || userChoice == "Pari"){
        choice = "pari";
    } else if(userChoice == "dispari" || "Dispari") {
        choice = "dispari";
    }

    let userNumberChoice = prompt("Scegli un numero da 1 a 5");
    userNumberChoice = parseInt(userNumberChoice);





}


//Funzioni



//invertitore di stringhe

function invertiParola(str){
    var strInversa = str.split('').reverse().join('');
    return strInversa;
  }



//generatore di numeri randomici

function generateRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (min + max) - min);
    return randomNumber;
}
