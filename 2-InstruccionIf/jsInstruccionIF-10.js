/*Test
nota = 9  Excelente nota
nota = 8 Aprobó
nota = 4 Aprobó
nota = 3 Vamos, la proxima se puede




*/




function mostrar()
{
	let nota;

	//nota = Math.round(Math.random() * 9 + 1);
	//Hardcodeo
	nota = 9;

	if (nota>=9)
	{
		alert("EXCELENTE: " + nota);
	}
	else if (nota < 4)
	{
		alert("APROBÓ: " + nota);
	}
	else
	{
		alert("Vamos, la proxima se puede: " + nota);
	}

}//FIN DE LA FUNCIÓN