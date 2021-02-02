/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreDelAlumno;
	let edadDelAlumno;
	let apellidoDelAlumno;

	nombreDelAlumno = document.getElementById("txtIdNombre").value;

	edadDelAlumno = document.getElementById("txtIdEdad").value;

    apellidoDelAlumno =  prompt("Ingrese su apellido "); 

	alert("Usted se llama " + nombreDelAlumno + " " + apellidoDelAlumno + " y tiene " + edadDelAlumno + " años ");
 


}