/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	/*let contador; //variable de control se usa las letras (i, j ,k etc depende las variables)
    contador = 0;//1era iniciar


	while(contador<10) //2da comparar
	{
       console.log((contador+1) + "-");

	   contador = contador + 1; //3era contador (cambio de variable de control)

	}*/

	
  let contadorNumero= 0;
  let numeroIngresado;
  let contadorRango10y20 =0;


  while(contadorNumero<5)
  {
	  numeroIngresado = prompt("Ingrese un numero");
	  numeroIngresado = parseInt(numeroIngresado);
	  	if (numeroIngresado>9 && numeroIngresado<21)
		  {
			contadorRango10y20++;
		  }

		contadorNumero++;
  }
	alert("La cantidad de numero que estan entre 10 y 20 son: " + contadorRango10y20);


	

	/*	(mientras)= while(condicion) // while (Condicion)
	{
		            //  sentencias que quiero repetir...
	                //sentencia que hace que la condicion resulte falsa
				}  */             

}//FIN DE LA FUNCIÓN 