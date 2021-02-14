function mostrar()
{
	let destinoIngresado 

	destinoIngresado = document.getElementById("txtIdDestino").value;


	switch (destinoIngresado)
	 {
		case "Ushuaia":
			alert("Se encuentra en el Sur de Argentina");
			break;
		case "Bariloche":
			 alert("Se encuentra en el Sur de Argentina");
		 	break;
		 case "Misiones":
		 	alert("Se encuentra en el Norte de Argentina");
			 break;
		 case "Mardelplata":
			 alert("Se encuentra en el Este de argentina");
			 break;
		
		default:
			break;
	}


}//FIN DE LA FUNCIÓN