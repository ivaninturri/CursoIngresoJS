/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let resultado;

 //parseint es para convertir una variable en un tipo numerico (numeros enteros)
 //parsefloat (numeros decimales)

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

    num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado = num1 + num2;
  
    alert("La suma es " + resultado);

}

