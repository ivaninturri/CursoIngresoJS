function mostrar()
{
  let tipoProducto;
  let respuesta;
  let cantidadBolsas;
  let precioUnitario;
  let precioPorBolsa;
  let cantidadDeBolsas;
  let acumuladorCal;
  let acumuladorArena;
  let acumuladorCemento;
  let precioBrutoFinal;
  let acumuladorDeBolsasTotal;
  let productoConMasUnidades;
  let precioConDescuento;
  let precioMasCaro;



 
  
 respuesta = "si";
 cantidadBolsas = 0;
 precioUnitario = 0;
 precioUnidad = 0;
 acumuladorCal = 0;
 acumuladorArena = 0;
 acumuladorCemento = 0;
 precioBrutoArena = 0;
 precioBrutoCal = 0;
 precioBrutoCemento = 0;
 precioBrutoFinal = 0;


  while (respuesta == "si") 
  {
    tipoProducto = prompt("Ingrese que desea comprar: ARENA - CAL O CEMENTO ").toLowerCase();
    while(isNaN(tipoProducto)==false || tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento") 
    {
      tipoProducto = prompt("Error. Ingrese que desea comprar: ARENA - CAL O CEMENTO ").toLowerCase();
    }
    cantidadDeBolsas = prompt("Cuantas bolsas desea comprar?");
    cantidadDeBolsas = parseInt(cantidadDeBolsas);

    while(isNaN(cantidadDeBolsas)==true || cantidadDeBolsas < 1)
    {
    cantidadDeBolsas = prompt("ERROR. Cuantas bolsas desea comprar?");
    cantidadDeBolsas = parseInt(cantidadDeBolsas);
    }

    precioPorBolsa = prompt("Ingrese el precio")
    precioPorBolsa = parseInt(precioPorBolsa)
     
    while(isNaN(precioPorBolsa)==true)
    {
    precioPorBolsa = prompt("ERROR. Ingrese el precio");
    precioPorBolsa = parseInt(precioPorBolsa);
    }
    
    switch (tipoProducto) 
    {
      case "arena":
        acumuladorArena = acumuladorArena + cantidadBolsas;
        precioBrutoArena = acumuladorArena + precioPorBolsa;
       break;
      case "cal":
        acumuladorCal = acumuladorCal + cantidadBolsas;
        precioBrutoCal = acumuladorCal + precioPorBolsa;
       break;
       default:
        acumuladorCemento = acumuladorCemento + cantidadDeBolsas;
        precioBrutoCemento = acumuladorCemento + precioPorBolsa;
       break;
    }
    
    acumuladorDeBolsasTotal = acumuladorCemento + acumuladorCal + acumuladorArena;
    precioBrutoFinal = precioBrutoArena + precioBrutoCal + precioBrutoCemento;
    respuesta = ("Quiere seguir agregando productos? si/no");

  }
   
  
  if(acumuladorDeBolsasTotal > 10 && acumuladorDeBolsasTotal < 31)
  {
    precioConDescuento = precioBrutoFinal * 0.15;
  }
  else
  {
     if(acumuladorDeBolsasTotal>30)
     {
      precioConDescuento = precioBrutoFinal * 0.25;
     }
  }

  if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
  {
    productoConMasUnidades = "arena";
  }
  else
  {
    if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento)
    {
      productoConMasUnidades = "cal";
    }
    else
    {
      productoConMasUnidades = "cemento";
    }
  }
  if(precioBrutoArena > precioBrutoCal && precioBrutoArena > precioBrutoCemento)
  {
    precioMasCaro = "arena"
  }
  else
  {
    if(precioBrutoCemento > precioBrutoCal && precioBrutoCemento > precioBrutoArena)
    {
      precioMasCaro = "cemento"
    }
    else
    {
      precioMasCaro = "Cal"
    }

  }

  document.write("Las " + acumuladorDeBolsasTotal + " bolsas " + " cuestan sin descuento " + precioBrutoFinal + "<br>");
  document.write("Las " + acumuladorDeBolsasTotal + " bolsas " + " cuestan con descuento " + PrecioConDescuento + "<br>");
  document.write("El tipo con mas unidades es " + productoConMasUnidades + "<br>");
  document.write("El Precio mas caro es " + PrecioMasCaro + "<br>");
 


}
