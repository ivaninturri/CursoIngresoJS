/*Test
nota = 9  Excelente nota
nota = 8 Aprobó
nota = 4 Aprobó
nota = 3 Vamos, la proxima se puede




*/




function mostrar()
{
	let nota;

	nota = Math.round(Math.random() * 9 + 1);
	//Hardcodeo
	

	if (nota > 8)
	{
		alert("EXCELENTE: " + nota);
	}
	else if (nota > 3)
	{
		alert("APROBÓ: " + nota);
	}
	else
	{
		alert("Vamos, la proxima se puede: " + nota);
	}

}//FIN DE LA FUNCIÓN