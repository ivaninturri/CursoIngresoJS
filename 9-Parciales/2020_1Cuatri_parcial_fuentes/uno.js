function mostrar()
{
var tipoProducto;
var contadorProductos;
var precio;
var cantidad;
var marca;
var fabricante;
var precioAlcoholMasBarato;
var cantidadAlcoholMasBarato;
var fabricanteAlcoholMasBarato;
var promedioPorCompra;
var contadorJabones;
var contadorBarbijos;
var contadorAlcohol;
var acumuladorJabones;
var acumuladorBarbijos;
var acumuladorAlcohol;


contadorProductos=0;
contadorJabones=0;
contadorBarbijos=0;
contadorAlcohol=0;
acumuladorJabones=0;
acumuladorBarbijos=0;
acumuladorAlcohol=0;


while(contadorProductos<5)
{   //  INGRESOS Y VALIDACIONES
    tipoProducto = prompt("Ingrese el tipo de producto: BARBIJO - JABÓN O ALCOHOL ").toLowerCase();
    while(isNaN(tipoProducto)==false || tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") //cuando se valida PALABRAS es false, cuando se valida Numero es true
    {
        tipoProducto = prompt("ERROR! Ingrese el tipo de producto: BARBIJO - JABÓN O ALCOHOL ").toLowerCase();
    }

    precio = prompt("Ingrese el precio (entre 100 y 300)");
    precio = parseInt(precio);
    while(isNaN(precio)==true || precio < 100 || precio > 300) //cuando se valida PALABRAS es false, cuando se valida Numero es true
    {
        precio = prompt("ERROR. El precio debe ser entre 100 y 300:");
        precio = parseInt(precio);
    }

    cantidad = prompt("Ingrese la cantidad de unidades entre 1 y 1000:");
    cantidad = parseInt(cantidad);
    while(isNaN(cantidad)==true || cantidad < 1 || cantidad > 1000) //cuando se valida PALABRAS es false, cuando se valida Numero es true
    {
        cantidad = prompt("ERROR. La cantidad de unidades debe ser entre 1 y 1000:");
        cantidad = parseInt(cantidad);
    }

    marca = prompt("Ingrese la marca del producto: ");

    fabricante = prompt("Ingrese el nombre del fabricante: ");

    // TIPOS DE DATOS
    switch(tipoProducto)
    {
        case "alcohol":
            if(precio < precioAlcoholMasBarato || contadorAlcohol == 0 ) 
            {
                precioAlcoholMasBarato = precio;
                cantidadAlcoholMasBarato = cantidad;
                fabricanteAlcoholMasBarato = fabricante;
                contadorAlcohol++;
                acumuladorAlcohol = acumuladorAlcohol + cantidad;
            } 
            break;
        case "jabon":
                contadorJabones++;
                acumuladorJabones = acumuladorJabones + cantidad;
            break;
        case "barbijo":
                contadorBarbijos++;
                acumuladorBarbijos = acumuladorBarbijos + cantidad;
            break;
    }  //FIN SWITCH
contadorProductos++;
} //FIN WHILE 5 UNIDADES



if(acumuladorAlcohol > acumuladorBarbijos && acumuladorAlcohol > acumuladorJabones)
    {
        promedioPorCompra = acumuladorAlcohol /contadorAlcohol;
    } 
    else 
    {
        if(acumuladorBarbijos > acumuladorJabones)
        {
            promedioPorCompra = acumuladorBarbijos / contadorBarbijos;
        }
        else
        {
            promedioPorCompra = acumuladorJabones / contadorJabones;
        }
    }
if(contadorAlcohol > 0)
{
    document.write("Del más barato de los alcohol, la cantidad de unidades es: "+cantidadAlcoholMasBarato + " y el fabricante es: "+ fabricanteAlcoholMasBarato+"<br>");
}
else
{
    document.write("No se ingreso ningun alcohol" +"<br>");
}
    document.write("El promedio del tipo con más unidades: "+ promedioPorCompra +"<br>");
if(contadorJabones > 0)
{
    document.write("La cantidad total de jabones es: " + acumuladorJabones + "<br>");
}
else
{
    document.write("No se ingreso ningun jabon ");
}
}//FIN FUNCION







