/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, 
los datos solicitados son:
nombre 
carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.


Alumno: Iván Inturri
Div: 1H */

function mostrar()
{
    let nombre
    let carrera;
    let sexo;
    let cantidad;
    let notaPromedio;
    let edad;
    let contadorAlumnos;
    contadorAlumnos = 0;

    //Variables A)
    let mejorPromedio;
    let nombreMejorPromedio;
    let contadorFisica;
    contadorFisica = 0;

    //Variables B)

    let nombreAlumnaMasJoven;
    let edadMasJoven;
    let banderaFemenino;
    banderaFemenino = 0;

    //VARIABLES C)
    let porcentajeQuimica;
    let porcentajeFisica;
    let porcentajeSistemas;
    let contadorSistemas;
    let contadorQuimica;
    
    
    contadorQuimica = 0;
    contadorSistemas= 0;

    //Variables D)

    let edadMasMaterias;
    let nombreMasMaterias;
    let cantidadMasMaterias;
    let banderaNoQuimica
    banderaNoQuimica = 0;


    


   

    while (contadorAlumnos<500) 
    {
        nombre= prompt("Ingrese nombre");
        
        carrera = prompt("Ingrese la carrera").toLowerCase();
        while(isNaN(carrera)==false || carrera != "quimica" && carrera != "fisica" && carrera != "sistemas") 
        {
            carrera = prompt("ERROR. Ingrese la carrera ").toLowerCase();
        }

        sexo = prompt("Ingrese su sexo").toLocaleLowerCase()
        while(isNaN(sexo)==false || sexo != "masculino" && sexo != "femenino" && sexo != "no binario") 
        {
           sexo = prompt("ERROR! Ingrese su sexo").toLowerCase();
        }

        cantidad = prompt("Ingrese la cantidad de materias");
        cantidad = parseInt(cantidad);

        while(isNaN(cantidad)==true || cantidad <1 || cantidad >5)
        {
        cantidad = prompt("ERROR. El cantidad de materias debe ser entre 1 y 5");
        cantidad = parseInt(cantidad);
        }

        notaPromedio = prompt("Ingrese su nota promedio");
        notaPromedio = parseInt(notaPromedio);

        while(isNaN(notaPromedio)==true || notaPromedio <0 || notaPromedio >10)
        {
        notaPromedio = prompt("ERROR. Ingrese su nota promedio");
        notaPromedio = parseInt(notaPromedio);
        }

        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);

        while(isNaN(edad)==true || edad<18)
        {
        edad = prompt("ERROR. Ingrese su edad");
        edad = parseInt(edad);
        }

        switch (carrera) 
        {
            case "fisica":
                //a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
                if(contadorFisica == 0 || notaPromedio>mejorPromedio)
                {
                    mejorPromedio = notaPromedio;
                    nombreMejorPromedio = nombre;
                }
               
                contadorFisica++
            break;

            case "quimica":
                contadorQuimica++
                
            break;

            case "sistemas":
                contadorSistemas++
            break;
        }

        //b) El nombre de la alumna mas joven.
         if(sexo == "femenino")
         {
            if(banderaFemenino == 0 || edad < edadMasJoven)
            {
                edadMasJoven = edad;
                nombreAlumnaMasJoven = nombre;
                banderaFemenino = 1;
            }
         }

         //d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
         if(carrera != "quimica")
         {
             if(banderaNoQuimica == 0 || cantidad > cantidadMasMaterias)
             {
                 nombreMasMaterias = nombre;
                 cantidadMasMaterias = cantidad;
                 edadMasMaterias = edad;
                 banderaNoQuimica = 1;
             }
         }
        
         
        contadorAlumnos++

    
    }//FIN WHILE

 //Salida A) 
    if(contadorFisica>0)
    {
        document.write("El nombre del mejor promedio de los alumnos que estudian Fisica es:" + nombreMejorPromedio + "<br>");
    }
    else
    {
        document.write("El nombre del mejor promedio de los alumnos que estudian Fisica es: No se ingreso alumnos que estudian Fisica <br>");
    }
    //SALIDA B)


    if(banderaFemenino>0)
    {
        document.write("El nombre de la alumna mas joven es: " + nombreAlumnaMasJoven + " Y su edad es: " + edadMasJoven + "<br>");
    }
    else
    {
        document.write("El nombre de la alumna mas joven es: No se ingreso alumnas <br>");
    }




     //SALIDA C)

     if(contadorQuimica>0)
     {
        porcentajeQuimica = (contadorQuimica * 100) / cantidad;
        document.write("El porcentaje que estudia Quimica es: " + porcentajeQuimica + "<br>");
     }
     else
     {
        document.write("El porcentaje que estudia Quimica es: No fueron ingresados estudiantes de Quimica <br>");
     }
     if(contadorFisica>0)
     {
        porcentajeFisica = (contadorFisica * 100) / cantidad;
        document.write("El porcentaje que estudia Fisica es: " + porcentajeFisica + "<br>");
     }
     else
     {
        document.write("El porcentaje que estudia Fisica: No fueron ingresados estudiantes de Fisica <br>");
     }
     if(contadorSistemas>0)
     {
        porcentajeSistemas = (contadorSistemas * 100) / cantidad;
        document.write("El porcentaje que estudia Sistemas es: " + porcentajeSistemas + "<br>");
     }
     else
     {
        document.write("El porcentaje que estudia Sistemas: No fueron ingresados estudiantes de Sistemas <br>");
     }

     //SALIDA EJERCICIO D)
     
     if(banderaNoQuimica>0)
     {
        document.write("El nombre del estudiante que cursa mas materias exceptuando Quimica es: " + nombreMasMaterias + " y su edad es: " + edadMasMaterias + "<br>"  );
     }
     else
     {
        document.write("El nombre del estudiante que cursa mas materias exceptuando Quimica es: No Hay <br>");
     }
     


}//FIN