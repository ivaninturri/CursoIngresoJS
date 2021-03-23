/*
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. 
Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:

a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)

Alumno: Ivan Inturri
DIV 1H*/

function mostrar()
{
let nombre;
let cantidadLamparas;
let precioUnitario;
let marcaLamparas;
let respuesta;


let promedioFelipeLamparas;
let promedioArgentinaLuz;
let promedioIlluminatis;

let contadorFelipeLamparas;
let contadorArgentinaLuz;
let contadorilluminatis;
let acumuladorFelipeLamparas;
let acumuladorArgentinaLuz;
let acumuladorIlluminatis;


contadorFelipeLamparas=0;
contadorArgentinaLuz=0;
contadorilluminatis=0;
acumuladorFelipeLamparas=0;
acumuladorArgentinaLuz=0;
acumuladorIlluminatis=0;







respuesta="si";

while(respuesta=="si")
{
	nombre = prompt("Ingrese el nombre del cliente:");
    
	cantidadLamparas = prompt("Ingrese la cantidad de lamparas:");
    cantidadLamparas = parseInt(cantidadLamparas);
    while(isNaN(cantidadLamparas) == true)
    {
		cantidadLamparas = prompt("ERROR. Ingrese una cantidad de lamparas válida:");
		cantidadLamparas = parseInt(cantidadLamparas);
    }
    marcaLamparas = prompt("Ingrese la marca:").toLocaleLowerCase();
    while(isNaN(marcaLamparas) == false || marcaLamparas != "felipelamparas" && marcaLamparas != "argentinaluz" && marcaLamparas != "illuminatis")
    {
		marcaLamparas = prompt("ERROR. Ingrese una marca válida:");
    }
	precioUnitario = prompt("Ingrese el precio unitario:").toLocaleLowerCase();
    precioUnitario = parseFloat(precioUnitario);
    while(isNaN(precioUnitario) == true)
    {
		precioUnitario = prompt("ERROR.Ingrese un precio unitario válido:");
		precioUnitario = parseFloat(precioUnitario);
    } 

	switch (marcaLamparas) 
	{
		case "felipelamparas":
			contadorFelipeLamparas++;
			acumuladorFelipeLamparas+=cantidadLamparas;
			break;
		case "argentinaluz":
			contadorArgentinaLuz++;
			acumuladorArgentinaLuz+=cantidadLamparas;
			break;
		case "illuminatis":
			contadorilluminatis++;
			acumuladorIlluminatis+=cantidadLamparas;
			
			break;
	}//FIN SWITCH


 respuesta = prompt("Desea ingresar otra compra? Si/no")

}//FIN WHILE
//C)
if(contadorFelipeLamparas>0)
{
	promedioFelipeLamparas=acumuladorFelipeLamparas/contadorFelipeLamparas;
	document.write("El promedio de cantidad de lamparas de marca FelipeLampras es: "+ promedioFelipeLamparas +"<br>");
}
else
{
	document.write("El promedio de cantidad de lamparas de marca FelipeLampras es: No se ingreso <br>");
}
if(contadorArgentinaLuz>0)
{
	promedioArgentinaLuz=acumuladorArgentinaLuz/contadorArgentinaLuz;
	document.write("El promedio de cantidad de lamparas de marca FelipeLampras es: "+ promedioArgentinaLuz + "<br>");
}
else
{
	document.write("No se han registrado ingresos de lampras marca ArgentinaLuz <br>");
}
if(contadorilluminatis>0)
{
	promedioIlluminatis=acumuladorIlluminatis/contadorilluminatis;
	document.write("El promedio de cantidad de lamparas de marca FelipeLampras es: "+ promedioIlluminatis + "<br>");
}
else
{
	document.write("No se han registrado ingresos de lampras marca illuminatis <br>");
}
//D SALIDA;
if(acumuladorArgentinaLuz>acumuladorFelipeLamparas && acumuladorArgentinaLuz>acumuladorIlluminatis)
{
	document.write("la que mas vendio fue Argentinaluz");
}
else
{
	if(acumuladorFelipeLamparas>acumuladorIlluminatis)
	{
		document.write("la que mas vendio fue felipeLamparas");
	}
	else
	{
		document.write("la que mas vendio fue illuminatis");
	}
}



}//FIN 
