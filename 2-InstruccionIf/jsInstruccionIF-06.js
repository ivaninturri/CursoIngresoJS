function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Es mayor de edad");
	}

		else 
	{
		if (edad > 12 && edad < 18)
		{
			alert("Es adolecente");
		}
		else 
		{
			alert("Es menor");
		}
	}

} //FIN DE LA FUNCIÓN