let variable = 5;

alert("El valor es: " + variable);

let variableA = 33;
let variableB = 77;
let resultado;

resultado = variableA + variableB;


alert("El resultado es: " + resultado);

let A = 10;
let B = 10;
let C = 7;
let D = 5;
let E = 3;
let promedio;


promedio = (A + B + C + D + E) / 5;

alert("El promedio es: " + promedio);

let nota1 = 5;
let nota2 = 10;
let resultado;

resultado = nota1 > nota2;

alert(resultado);


let nota1 = 50;
let nota2 = 10;

if (nota1 > nota2) // if = Si..
{
    alert("nota1 es mayor");
}
else // Si no..
{
    alert("nota2 es mayor");
} 

let puntuacion = 3;

switch(puntuacion) 
{
    case 0:
    {

        alert("mala");
        break; // Salir del switch en caso que sea correcto
    }  
    case 1:
        {
    
            alert("regular");
            break;
        }  
    case 2:
    {

        alert("buena");
        break; 
    }  
    case 3:
    {

        alert("muy buena");
        break; 
    }  
    case 4:
    {

        alert("excelente");
        break; 
    }  
}
