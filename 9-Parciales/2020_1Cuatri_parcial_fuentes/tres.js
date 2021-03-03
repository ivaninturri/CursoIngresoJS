
/* Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),x
la edad de la mascota (edad validada);x
el nombre (una palabra) x
la raza  (una palabra) x
el peso (peso validado) x
el estadoClinico (enfermo,internado o adopcion)x
la temperaruta corporal x

y nos piden informar solo si existe
a)El perro mas pesado 
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/
function mostrar()
{
	let mascotas;
	let pelaje;
	let edadMascota;
	let nombreMascota;
	let razaMascota;
	let pesoMascota;
	let estadoClinico;
	let temperaturaCorporal;
	let contadorPerro;
	let contadorGatos;
	let contadorSerpiente;
	let acumuladorPerro;
	let acumuladorPesoGato;
	let acumuladorSerpiente;
	let perroPesado;
	let nombrePerroPesado;
	let gatoMasLiviano;
	let nombreGatoMasLivino;
	let gatoLivianoRaza;

	contadorPerro = 0;
	contadorGatos = 0;
	contadorSerpiente = 0;
	acumuladorPerro = 0;
	acumuladorPesoGato = 0;
	acumuladorSerpiente = 0;
	nombrePerroPesado = 0;
	gatoLivianoRaza = 0;
	gatoMasLiviano = 0;

	
	respuesta = "si"


	while(respuesta == "si")
	{
		mascotas = prompt("Ingrese su mascota Gato, Perro o Serpiente").toLowerCase();
		while(isNaN(mascotas)==false|| mascota != "gato" && mascota != "perro" && mascota != "serpiente") //cuando se valida PALABRAS es false, cuando se valida Numero es true
		{
			mascota = prompt("ERROR. Ingrese su mascota Gato, Perro o Serpiente").toLowerCase();
		}

		pelaje = prompt("Ingrese tipo de pelaje (corto, largo , sin pelo)").toLowerCase();
		while(isNaN(pelaje)==false|| mascota != "corto" && mascota != "largo" && mascota != "sin pelo")
		{
			mascota = prompt("ERROR. Ingrese tipo de pelaje (corto, largo , sin pelo)").toLowerCase();
		}

		edadMascota = prompt("Ingrese la edad de la mascota").toLowerCase();
		edadMascota = parseInt(edadMascota);
		while(isNaN(edadMascota)==true)
		{
			edadMascota = prompt("ERROR. Ingrese la edad de la mascota").toLowerCase();
		}

		nombreMascota = prompt("Ingrese el nombre de la mascota").toLowerCase();
		while(isNaN(nombreMascota)==false)
		{
			nombreMascota = prompt("ERROR. Ingrese el nombre de la mascota").toLowerCase();
		}

		razaMascota = prompt("Ingrese la raza de la mascota").toLowerCase();
		while(isNaN(razaMascota)==false)
		{
			razaMascota = prompt("ERROR. Ingrese la raza de la mascota").toLowerCase();
		}

		razaMascota = prompt("Ingrese la raza de la mascota").toLowerCase();
		while(isNaN(razaMascota)==false)
		{
			razaMascota = prompt("ERROR. Ingrese la raza de la mascota").toLowerCase();
		}

		pesoMascota = prompt("Ingrese el peso de la mascota").toLowerCase();
		pesoMascota = parseFloat(pesoMascota);
		while(isNaN(pesoMascota)==false)
		{
			pesoMascota = prompt("ERROR. Ingrese el peso de la mascota").toLowerCase();
			pesoMascota = parseFloat(pesoMascota);
		}

		estadoClinico = prompt("Ingrese el estado clinico de la mascota (enfermo,internado o adopcion)").toLowerCase();
		while(isNaN(estadoClinico)==false) || estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion" 
		{
			estadoClinico = prompt("ERROR. Ingrese el estado clinico de la mascota (enfermo,internado o adopcion)").toLowerCase();
		}

		temperaturaCorporal = prompt("Ingrese la temperatura corporal de la mascota").toLowerCase();
		temperaturaCorporal = parseFloat(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==false)
		{
			temperaturaCorporal = prompt("ERROR. Ingrese el peso de la mascota").toLowerCase();
			temperaturaCorporal = parseFloat(temperaturaCorporal);
		}

		switch (mascotas) 
		{
			case"perro":
			if(perroPesado < pesoMascota || contadorPerro == 0)
			{
				perroPesado = peso;
				nombrePerroPesado = nombreMascota;
			}
			contadorPerro++
			break;
			case"gato":
			if(contadorGatos == 0 || gatoMasLiviano > peso && pelaje == "sin pelo")
			{
				gatoMasLiviano = peso;
				nombreGatoMasLivino = nombreMascota;
				gatoLivianoRaza = razaMascota;
			}
			contadorGatos++;
			break;
			case"serpiente":
			if()
			break;
		}

		if()



	






		
		

		respuesta = prompt("Desea ingresar otra mascota?")

		
		

	}

	


	
}
