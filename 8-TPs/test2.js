/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

//txtIdCantidad
// txtIdprecioDescuento

function CalcularPrecio() {
    let lampara;
    let cantidadDeLamparas;
    let marca;
    let precioTotal;
    let precioConDescuento
    let descuento;

    lampara = 35;
    marca = document.getElementById("Marca").value; 
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    precioTotal = lampara * cantidadDeLamparas;

    if (cantidadDeLamparas >= 6) 
    {
        descuento = precioTotal * 0.5;
        precioConDescuento = precioTotal - descuento;
    }
    else if (CantidadDeLamparas == 5) 
    {
        precioTotal = lampara * cantidadDeLamparas;

        if (marca == "ArgentinaLuz") 
        {
            descuento = precioTotal * 0.4;

        }
        else 
        {
            descuento = precioTotal * 0.3;

        }

        precioConDescuento = precioTotal - descuento;
    }
    else if (CantidadDeLamparas == 4) 
    {
        precioTotal = lampara * cantidadDeLamparas;

        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
        {
            descuento = precioTotal * 0.25;

        }
        else 
        {
            descuento = precioTotal * 0.2;

        }

        precioConDescuento = precioTotal - descuento;

    }
    else if (CantidadDeLamparas == 3) 
    {
        precioTotal = lampara * cantidadDeLamparas;

        if (marca == "ArgentinaLuz") 
        {
            descuento = precioTotal * 0.15;

        }
        else if (marca == "FelipeLamparas") 
        {
            descuento2 = precioTotal * 0.1;

        }
        else 
        {
            descuento = precioTotal * 0.05
        }

        precioConDescuento = precioTotal - descuento;

    }

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;  
    
}

/*function CalcularPrecio () 
{
 let cantidad;
 let precio;
 let descuento;
 let resultado;
 let marca;

 cantidad = document.getElementById("txtIdCantidad").value;
 cantidad = parseInt(cantidad);

 marca = document.getElementById("Marca").value;

 precio = 35;

 if(cantidad >= 6)
    {
        descuento = precio  * cantidad * 0.5;
        resultado = precio * cantidad  - descuento;
        document.getElementById("txtIdprecioDescuento").value = resultado;
    }

    else 
    { 
        if(cantidad == 5) // && marca == ("ArgentinaLuz"))
        {
            if(marca == "ArgentinaLuz")
            {
                    descuento = precio * cantidad * 0.4;
                    resultado = precio * cantidad - descuento;
                    document.getElementById("txtIdprecioDescuento").value = resultado;
            }
            
        }
         else 
        {
           descuento = precio * cantidad * 0.3;
           resultado = precio * cantidad - descuento;
           document.getElementById("txtIdprecioDescuento").value = resultado;
        }
        
        
    }

    
} */

function mostrar()
{
	let respuesta;
	let numeroIngresado;
	let contadorRango10y20 = 0;

	while(respuesta == "Si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado>9 && numeroIngresado<21)
		{
			contadorRango10y20++;
		}

		respuesta = prompt("Quiere seguir con la operacion?")

	}

// PARCIAL 1 

    function mostrar()
{
let tipoDeProductos;
let contadorProducto;
let precioIngresado;
let marcaIngresada;
let fabricante;
let cantidadUnidades;
let contadorAlcohol;
let acumuladorCantidadAlcohol;
let alcoholMasBarato;





contadorProducto=0;
alcoholMasBarato=0;
contadorAlcohol=0;
acumuladorCantidadAlcohol=0;


while(contadorProducto<5)
{
  tipoDeProductos = prompt("Ingrese un producto de prevencion: barbijo, alcohol o jabon"); //cuando se valida PALABRAS es false, cuando se valida Numero es true

  while(isNaN(tipoDeProductos)==false || tipoDeProductos!="barbijo" && tipoDeProductos!="alcohol" && tipoDeProductos!="jabon") 
  {
      tipoDeProductos=prompt("Error. Reingrese un producto valido: barbijo, alcohol o jabon");
  }

  precioIngresado=prompt("Ingrese el valor del producto");
  precioIngresado=parseInt(precioIngresado)

  while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300) //cuando se valida PALABRAS es false, cuando se valida NUMERO es true
  
  {
      precioIngresado=prompt("Error. Reingrese el valor del producto");
      precioIngresado=parseInt(precioIngresado)
  }

    marcaIngresada = prompt("Ingrese la marca"); 
  
  while(isNaN(marcaIngresada)==false) //cuando se valida PALABRAS es false, cuando se valida NUMERO es true
  
    {
        marcaIngresada=prompt("Error. Reingrese la marca");
    }

    fabricante = prompt("Ingrese el fabricante"); 
  
    while(isNaN(fabricante)==false) //cuando se valida PALABRAS es false, cuando se valida NUMERO es true
    {
        fabricante=prompt("Error. Reingrese el fabricante");
    }
    
    cantidadUnidades = prompt("Ingrese la cantidad de unidades"); 
  
    while(isNaN(cantidadUnidades)==true || cantidadUnidades<1 || cantidadUnidades>999) //cuando se valida numero es false, cuando se valida NUMERO es true
    {
        cantidadUnidades=prompt("Error. Reingrese la cantidad de unidades");
    }
     
	switch (tipoDeProductos) //en el caso que = switch ej En el caso de que (Tipo de producto)
    {
        case "alcohol": //sea "alcohol"
         acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidadUnidades;
         contadorAlcohol++;
            if(contadorAlcohol==0 || precioIngresado<alcoholMasBarato)
             {
                alcoholMasBarato = precioIngresado;

             }



            
            break;
    
        default:
            break;
    }                     
		