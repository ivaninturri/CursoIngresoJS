function mostrar()
{
	//tomo la hora
	let horaDelDia
    let mensajeDia
	let mensajeNoche
	let mensajeTarde

	mensajeDia = "Es de mañana";
	mensajeNoche = "Es de noche";
	mensajeTarde = "Es de tarde";
	horaDelDia = document.getElementById("txtIdHora").value;
    horaDelDia = parseInt(horaDelDia);

	switch (horaDelDia) 
	{   case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert(mensajeNoche)
			break;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert(mensajeDia);
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert(mensajeTarde);
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		alert(mensajeNoche);
		default:
			"La hora no existe"
			break;
	}
	

}//FIN DE LA FUNCIÓN