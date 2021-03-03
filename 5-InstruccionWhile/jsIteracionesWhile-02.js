/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let i;
	i=11; 

	while(i>1)
	{
		console.log((i-1) + "-");

		i = i - 1;
	}
	

}//FIN DE LA FUNCIÓN

let respuesta = "si"
let numeroIngresado;
let contadorRango10y20 = 0;

while(respuesta == "si")
{
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	if (numeroIngresado>9 && numeroIngresado<21)
	{
		contadorRango10y20++;
	}

	respuesta = prompt("Quiere seguir con la operacion?")	

}

alert("La cantidad de numero que estan entre 10 y 20 son: " + contadorRango10y20 + " Y el promedio es de: " + numeroIngresado/contadorRango10y20);