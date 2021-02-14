function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	
    if(mesDelAño == "Enero")
	{
		alert("Que comiences bien el año");
	}
	else
	{
		if(mesDelAño=="Marzo")
		{
			alert("A clases")
		}
		else
		{
			if(mesDelAño=="Julio")
			{
				alert("Se vienen las vacaciones!!!");
			}
			else
			{
				if(mesDelAño=="Diciembre")
				alert("Felices fiestas!");
			}
		}
	}

 switch (mesDelAño)
 {
	 case "Enero":
		 alert("Que comiencen bien el año")
		 break;
	 case "Marzo":
		 alert("Q")
 
	 default:
		 break;
 }



}//FIN DE LA FUNCIÓN