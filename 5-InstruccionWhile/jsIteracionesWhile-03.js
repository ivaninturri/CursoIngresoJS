/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let contador = 0;


	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != ("utn750") && (contador !=2))
	{
		claveIngresada = prompt("Error, reingrese la contraseña");
		contador ++; 
	}

	if (contador == 2)
	{
		alert ("Usted fue bloqueado");

	}
	else
	{
		alert ("Usted ingreso correctamente");
	}
	
	
}//FIN DE LA FUNCIÓN
