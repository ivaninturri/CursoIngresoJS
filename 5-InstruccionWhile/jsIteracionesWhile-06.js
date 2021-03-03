function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;


	while(contador > 5) //el while se ejecuta hasta que contador sea mayor a 5 (se ejecuta 5 veces)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado; // Ej Acumulador 0 =  acumulador 0 + numeroIngresado 1 (Esto es igual acumulador 1)
        contador++;  // contador++ hace que se sume 1 al valor de la variable contador
	}
	
	
	document.getElementById("txtIdSuma").value =acumulador;

	document.getElementById("txtIdPromedio").value = acumulador/5;
}//FIN DE LA FUNCIÓN