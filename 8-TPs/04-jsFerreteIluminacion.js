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

function CalcularPrecio () 
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

    
}
