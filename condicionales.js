//CONDICIONALES

//Aqui se utilizan los que se nombran como OPERADORES LÓGICOS

//Igual que:  a === b
//Mayor que:  a > b
//Menor que:  a < b
//Mayor o igual a:  a >= b
//Menor o igual a:  a <= b
//O: a === b || a > b
//Y: a === b && a === 5



const a = 5;
const b = 6;

//
if(a === b){
    console.log('Somos iguales');
}else{
    console.log('No somos iguales');
}


//
if(a > 10){
    console.log('a es mayor que 10');
}else if(a <= 8){
    console.log('a es menor que 8');
}else{
    console.log('Ninguno de los anteriores');
}


//
if(a === null || a === 5){
    console.log('a es null o igual a 5')
}else if(a >= b && a === 10){
    console.log('a es mayor o igual a b e igual a 10')
}else if(a === 5 && b === 6){
    console.loog('a es igual a 5 y b es igual a 6');
}

