

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
    
    let choice = "default";

    let userChoice = prompt("Scegli pari o dispari (scrivi tutto in minuscolo)");

    if(userChoice == "pari"){
        choice = "pari";
    } else if(userChoice == "dispari") {
        choice = "dispari";
    } else{
        alert("non hai inserito una scelta valida! Riprova");
        return;
    }

    let userNumberChoice = prompt("Scegli un numero da 1 a 5");
    userNumberChoice = parseInt(userNumberChoice);

    randomNumber = generateRandomNumber(1, 5);
    randomNumber = parseInt(randomNumber);
    console.log(randomNumber);

    let numbersSum = userNumberChoice + randomNumber;

    let result = "boh";

    if(numbersSum%2 == 0){
        result = "pari";
    } else {
        result = "dispari";
    }

    if(choice == result){
        alert("hai vinto");
    } else { 
        alert("hai perso");
    }

}


// Somma numeri

alert("Inserisci i tuoi 10 numeri");
let arrayNumbers = generateArrayOfNumbers(10);

let sumOfNubers = sumOfArrayNumbers(array, array.length);

let theArithmeticAverage = arithmeticAverage(sum, array.length);

alert("La somma dei tuoi numeri è :" + sumOfNubers);
alert("La media aritmetica dei tuoi numeri è:" + theArithmeticAverage);






//Funzioni


//invertitore di stringhe

function invertiParola(str){
    var strInversa = str.split('').reverse().join('');
    return strInversa;
  }



//generatore di numeri randomici

function generateRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}



//generare array con numeri scelti

function generateArrayOfNumbers(totalNumbers) {
    array = [];

    //  Dichiaro un ciclo for per ripetere n volte la scelta del numero
    //  e l'inserimento del numero nel vettore
    for (let i = 0; i < totalNumbers; i++) {
        let choiceNumber = prompt("Inserisci il" + (i+1) + "°" + "numero" );
        choiceNumber = parseInt(choiceNumber);
        array.push(choiceNumber);
    }

    return array;
}


//sommatore di numeri

function sumOfArrayNumbers (arrayName, arrayLenght){
    sum = 0;
    for (i=0; i< arrayLenght; i++){
        sum = sum + arrayName[i];
    }

    console.log(sum);
}


//media aritmetica

function arithmeticAverage (sum, arrayLenght){
    let resultArithmeticAverage;
    resultArithmeticAverage = sum / arrayLenght;

    console.log(resultArithmeticAverage);
}



