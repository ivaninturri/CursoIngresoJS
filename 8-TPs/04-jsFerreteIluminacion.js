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

function CalcularPrecio() 
{
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
    else if (cantidadDeLamparas == 5) 
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
    else if (cantidadDeLamparas == 4) 
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
    else if (cantidadDeLamparas == 3) 
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