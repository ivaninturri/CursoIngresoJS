/*Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
    tipo(limpieza , comestible , otros)solo estos tres tipos
    nombre del producto
    importe del producto (no mayor a 1000 pesos)
    TipoDeStock("Pedido","sin stock", "con stock")
    procedencia(importado, nacional, elaborado)
    Peso (no mayor a 30 kilos)
    
    informar SOLO SI HAY 
    
    
    a)  el NOMBRE del  mas barato de los elaborados
    b)  de los Productos nacionales con stock , el promedio de precio
    c)  el porcentaje de productos elaborados por sobre el total
    d)  De los tipos de stock , cual tiene mas productos nacionales
    
    
    Ivan Inturri DIV 1H */

    


function mostrar()
{

    let mercaderia;
    let respuesta;
    let precio;
    let tipoDeStock;
    let procedencia;
    let nombreProducto;
    let peso;
    let elMasBaratoDeLosElaborados;
    let nombreDelMasBaratoElaborado;
    let contadorElaboradoMasBarato;
    contadorElaboradoMasBarato = 0;
    let contadorProductoNacionales;
    contadorProductoNacionales = 0;
    let promedioPrecio;
    let acumuladorNacional;
    acumuladorNacional =0;
    let contadorImportado;
    contadorImportado = 0;
    let aucmuladorImportado;
    aucmuladorImportado = 0;
    let contadorGeneral;
    contadorGeneral = 0;
    let contadorProductosElaborados;
    contadorProductosElaborados = 0;
    let contadorPedido;
    contadorPedido = 0;
    let contadorSinStock;
    contadorSinStock = 0;
    let contadorConStock;
    contadorConStock = 0;
    
    


    

    


    respuesta = "si"
    
    while(respuesta=="si")
    {
        mercaderia = prompt("ingrese la mercaderia que solicita (limpieza, comestible ,otro)").toLowerCase()
        while(isNaN(mercaderia)==false || mercaderia != "limpieza" && mercaderia != "comestible" && mercaderia != "otro") //cuando se valida PALABRAS es false, cuando se valida Numero es true
    {
        mercaderia = prompt("ERROR! ingrese la mercaderia que solicita (limpieza, comestible ,otro) ").toLowerCase();
    }

    nombreProducto = prompt("Ingrese nombre del producto").toLowerCase()
    
    precio = prompt("ingrese el importe del producto (no mayor a 1000 pesos)").toLowerCase()
        while(isNaN(precio)==true || precio < 0 || precio > 1000) //cuando se valida PALABRAS es false, cuando se valida Numero es true
    {
        precio = prompt("ERROR! ingrese el importe del producto (no mayor a 1000 pesos)").toLowerCase()
    }

    tipoDeStock = prompt("ingrese el tipo de stock").toLowerCase()
        while(isNaN(tipoDeStock)==false || tipoDeStock != "pedido" && tipoDeStock != "sin stock" && tipoDeStock != "con stock") //cuando se valida PALABRAS es false, cuando se valida Numero es true
    {
        tipoDeStock = prompt("ERROR! ingrese el tipo de stock").toLowerCase()
    }

        procedencia = prompt("ingrese su procedencia").toLowerCase()
    while(isNaN(procedencia)==false || procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado") //cuando se valida PALABRAS es false, cuando se valida Numero es true
    {
        procedencia = prompt("ERROR! ingrese su procedencia").toLowerCase()
    }

        peso = prompt("ingrese su peso (no mayor a 30 kilos)").toLowerCase()
        peso = parseInt(peso);

    while(isNaN(peso)==true || peso < 0 || peso > 30) 
    {
        peso = prompt("ERROR! ingrese su peso (no mayor a 30 kilos").toLowerCase()
        peso = parseInt(peso);
    }

 switch (procedencia) 
 {
     case "elaborado":
         if(precio<elMasBaratoDeLosElaborados || contadorElaboradoMasBarato == 0)
         {
             elMasBaratoDeLosElaborados = precio;
             nombreDelMasBaratoElaborado = nombreProducto;
             contadorElaboradoMasBarato = 1;
         }
         contadorProductosElaborados++; // guarda la cantidad de productos elaborados
         break;
    case "nacional":
        if(tipoDeStock == "pedido")
        {
            contadorPedido++; //guarda la cantidad de pedido
        }
        else
        {
            if(tipoDeStock == "sin stock")
            {
                contadorSinStock++; //guarda la cantidad de sin stock
            }
            else
            {
               contadorConStock++; //guarda la cantidad de con stock
            }
        }
        contadorProductoNacionales++ //guarda la cantidad de productos nacionales que se ingresaron
        acumuladorNacional = acumuladorNacional + precio; // hace la suma de todos los precios ingresados
        break;
    case "importado":
        contadorImportado++
        aucmuladorImportado = aucmuladorImportado + precio;
        break;
        
         default:

         break;
    }   //FIN SWITCH
    
    
    contadorGeneral++;
    porcentajeElaborados = (contadorGeneral * contadorProductosElaborados) / 100; //saca el porcentaje 
    promedioPrecio = acumuladorNacional / contadorProductoNacionales; //sacar promedio de los nacionales

    respuesta = prompt("Desea seguir ingresando mercaderia? si/no");  

 } //fin while
 
 if(contadorPedido > contadorSinStock && contadorPedido > contadorConStock)
    {
      document.write("Pedido es el que mas productos nacionales tiene: " + contadorPedido + "<br>");
    }
    else
    {
        if(contadorSinStock > contadorPedido && contadorSinStock > contadorConStock)
        {
            document.write("Sin Stock es el que mas productos nacionales tiene: " + contadorSinStock + "<br>");
        }
        else
        {
            document.write("Con Stock es el que mas productos nacionales tiene: " + contadorConStock + "<br>");
        }


    }
    
   if(nombreDelMasBaratoElaborado > 0)
   {
    document.write("El nombre de los elaborados mas barato es: " + nombreDelMasBaratoElaborado + "<br>");
   }
   else
   {
       document.write("El nombre de los elabarados mas barato es: Ninguno <br>");
   }

document.write("El promedio de precio de los nacionales con stock es de " + promedioPrecio + "<br>");

document.write("El porcentaje de los productos elaborados es: " + porcentajeElaborados + "<br>");


 // terminar de hacer los enunciados, y lo que falte para que ande


}
