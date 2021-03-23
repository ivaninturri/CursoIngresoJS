/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

Alumno: Iván Inturri
DIV: 1H*/


function mostrar()
{
 let nombre;
 let edad;
 let sexo;
 let puesto;
 let sueldo;

 //A variables
 let acumuladorAnalista;
 let acumuladorProgramador;
 let acumuladorQa;
 let contadorAnalista;
 let contadorProgramador;
 let contadorQa;

 acumuladorAnalista = 0;
 acumuladorProgramador = 0;
 acumuladorQa = 0;
 contadorAnalista = 0;
 contadorProgramador = 0;
 contadorQa = 0;

 let promedioAnalista;
 let promedioProgramador;
 let promedioQa;

 //B variables

 let acumuladorMasculino;
 let acumuladorNobinario;
 let acumuladorFemenino;

 contadorFemenino = 0;
 acumuladorFemenino = 0;
 acumuladorNobinario = 0;
 acumuladorMasculino = 0;

 //C VARIABLES

 let nombreEmpleadoFemenino
 let mayorSueldoFemenino

 //D VARIABLES
 let contadorNoBinario;
 contadorNoBinario = 0;
 let noBinariosSueldos;
 
 



 respuesta = "si"

 while (respuesta=="si")
 {
    nombre = prompt("Ingrese el nombre");

    edad = prompt("Ingrese la edad (Tiene que ser mayor de edad)");
    edad = parseInt(edad);
    while(isNaN(edad)==true || edad<18)
    {
        edad = prompt("ERROR! Ingrese la edad (Tiene que ser mayor de edad)");
    }

    sexo = prompt("Ingrese el sexo: Masculino-Femenino-No binario").toLowerCase();
    while(isNaN(sexo)==false || sexo != "masculino" && sexo != "femenino" && sexo != "no binario") 
    {
        sexo = prompt("ERROR! Ingrese el sexo").toLowerCase();
    }

    puesto = prompt("Ingrese el puesto: Programador-Analista-Qa").toLowerCase();
    while(isNaN(puesto)==false || puesto != "programador" && puesto != "analista" && puesto != "qa") 
    {
        puesto = prompt("ERROR! Ingrese el sexo: Programador-Analista-Qa").toLowerCase();
    }
    
    sueldo = prompt("Ingrese el sueldo entre 15000 y 70000");
    sueldo = parseInt(sueldo);
    while(isNaN(sueldo)==true || sueldo<15000 || sueldo>70000)
    {
        sueldo = prompt("ERROR! Ingrese el sueldo entre 15000 y 70000");
        sueldo = parseInt(sueldo);
    }

    switch (puesto) 
    {
        case "programador":
            acumuladorProgramador+=sueldo;
           //d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/  
            if(contadorProgramador == 0 && sexo == "no binario" && sueldo>19999 && sueldo<55001)
            {
                noBinariosSueldos = sueldo;
                contadorNoBinario++;
            }
            contadorProgramador++;
            
            break;
            case "qa":
            acumuladorQa+=sueldo;
            contadorQa++;
            
            break;
            case "analista":
            acumuladorAnalista+=sueldo;
            contadorAnalista++;
            
            break;
    }//FIN SWITCH

    switch (sexo) 
    {
        case "masculino":
            acumuladorMasculino+=sueldo;
            
            break;
        case "femenino":
            acumuladorFemenino+=sueldo;
            //C)
            if(contadorFemenino == 0 || sueldo > mayorSueldoFemenino)
            {
                nombreEmpleadoFemenino = nombre;
                mayorSueldoFemenino = sueldo;
            }
            contadorFemenino++;
             break;
        case "no binario":
            acumuladorNobinario+=sueldo;
            
            break;
    }
    


    respuesta = prompt("Desea continuar ingresando datos? Si/no");
 }//FIN WHILE
 
 

 //SAILD D) 
if(contadorNoBinario>0)
{
	document.write("La cantidad de programadores no binarios que cobran sueldo entre 20000 y 55000 son: " + contadorNoBinario + "<br>");
}
else
{
	document.write("La cantidad de programadores no binarios que cobran sueldo entre 20000 y 55000 son: Ninguno <br>");
}

//SALIDA A)

 if(contadorProgramador>0)
 {
     promedioProgramador = acumuladorProgramador / contadorProgramador;
     document.write("El promedio de Programador es: " + promedioProgramador + "<br>");
 }
 else
 {
    document.write("El promedio de Programador es: No se ingreso puesto Programador <br>");
 }

 if(contadorAnalista>0)
 {
     promedioAnalista = acumuladorAnalista / contadorAnalista;
     document.write("El promedio de Analista es: " + promedioAnalista + "<br>");
 }
 else
 {
    document.write("El promedio de Analista es: No se ingreso puesto Analista <br>");
 }

 if(contadorQa>0)
 {
     promedioQa = acumuladorQa / contadorQa;
     document.write("El promedio de QA es: " + promedioQa + "<br>");
 }
 else
 {
    document.write("El promedio de Qa es: No se ingreso puesto QA <br>");
 }

 //SALIDA B)

 if(acumuladorMasculino > acumuladorFemenino && acumuladorMasculino > acumuladorNobinario)
 {
     document.write("El sexo que percibe el mayor sueldo es: Masculino <br>");
 }
 else
 {
     if(acumuladorFemenino > acumuladorNobinario)
     {
        document.write("El sexo que percibe el mayor sueldo es: Femenino <br>");
     }

     else
     {
        document.write("El sexo que percibe el mayor sueldo es: No binario <br>");
     }

 }

 //SALIDA c)
if(contadorFemenino>0)
{
   document.write("El nombre del empleado femenino con mas sueldo es : " + nombreEmpleadoFemenino + "<br"); 
}
else
{
  document.write("El nombre del empleado femenino con mas sueldo es: No hubo empleado femeninos <br");
}
 



}
