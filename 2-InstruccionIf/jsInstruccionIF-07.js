function mostrar()
{
	//tomo la edad  
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
    estadoCivil = document.getElementById("estadoCivil").value;

    if (edad < 19 && estadoCivil != ("soltero"))
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	//document.getElementById("estadoCivil").value = estadoCivil

}//FIN DE LA FUNCIÓN