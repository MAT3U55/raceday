let raceNumber = Math.floor(Math.random() * 1000);

let horaDeRegistro = true;
let idade = parseInt(prompt("digite sua idade"))

if( idade >=18 & horaDeRegistro == true){
    console.log(raceNumber)
}

if(horaDeRegistro == true && idade >=18){
document.write(`Os corredores correrão as 9h30! Seu número ${raceNumber}`)
} else if(horaDeRegistro == false && idade >=18 ){
    document.write(`Os corredores correrão as 11h00! Seu número${raceNumber}`)
} else if( idade <= 17){
    document.write(`Jovens registados correm às 12h30! (independentemente do registro) Seu número ${raceNumber}`)
}