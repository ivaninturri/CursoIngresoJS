/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en la memoria para guardar el nombre del usuario creando una variable
	   let nombre;
	   

    //guardo en la variable nombre el texto que escribio en usuario dentro de la ventana prompt
	nombre = prompt ("Ingrese su nombre");
	
	
	//copio el nombre que tengo guardado en la variable "nombre" dentro de la caja de texto  embebida en la caja html
	document.getElementById("txtIdNombre").value = nombre;


}

