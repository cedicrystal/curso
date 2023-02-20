
const arreglo = [1, 2, 3, 4];

//Un arreglo puede tener cualquier cosa
const arregloDinamico = [1, 'Hola', 2, false];

//Un arreglo tiene posiciones. Comienza desde cero
console.log(arregloDinamico[0]);
console.log(arregloDinamico[2]);

//Agregar elementos a un arreglo
arregloDinamico.push('cadena');
const variable = 55;
arregloDinamico.push(variable);

//Recorrer un arreglo
console.log(arregloDinamico[0]);
console.log(arregloDinamico[1]);
console.log(arregloDinamico[2]);
console.log(arregloDinamico[6]);


//CICLOS

//1. FOR LOOP

for(let i=0; i<6; i+=1){
    console.log(`Estoy en ${i}`);    
}


//2. WHILE

let i;
while(i < 6){
    console.log(`Estoy en ${i}`);
}


//3. FOR OF: Especial para recorrer arreglos
for(let valor of arregloDinamico){
    console.log(`Valor: ${valor}`);
}




