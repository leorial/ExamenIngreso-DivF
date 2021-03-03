function mostrar()
{
	let nombre;
	let obrasocial;
	let edad;
	let tempCorporal;
	let sexo;
	let seguir;
	let contadorosdeancianos;
	let precioporpasajero=600;
	let nombremujerjovenosde;
	let tempmujerjovenosde;
	let edadmujerjovenosde;
	let valorviajesindesc;
	let contadordepasajeros=0;
	let porcentajepami=0;
	let contadorpami=0;
	let descuento25;
	let valorviajecondescuento;
	let flagmujerjoven=0;


	do
	{
		nombre=prompt("ingrese nombre");

		obrasocial=prompt("ingrese obra social. PAMI, OSDE o otras");
		while (obrasocial!="PAMI" && obrasocial!="OSDE" && obrasocial!="otras")
		{
			obrasocial=prompt("ERROR. ingrese obra social. PAMI, OSDE o otras");
		}

		edad=parseInt(prompt("ingrese edad"));
		while (edad<17 || isNaN(edad))
		{
			edad=parseInt(prompt("ERROR. ingrese edad"));
		}

		tempCorporal=parseFloat(prompt("ingrese temperatura corporal"));
		while (tempCorporal<0 || isNaN(tempCorporal))
		{
			tempCorporal=parseFloat(prompt("ERROR. ingrese temperatura corporal"));
		}

		sexo=prompt("ingrese sexo m/f");
		while (sexo!="m"&&sexo!="f")
		{
			sexo=prompt("ERROR. ingrese sexo m/f");
		}

		contadordepasajeros++;

		if (obrasocial == "OSDE" && edad>60)
		{
			contadorosdeancianos++;
		}

		if (obrasocial=="OSDE" && (flagmujerjoven==0 || edadmujerjovenosde>edad))
		{
			flagmujerjoven=1;
			edadmujerjovenosde=edad;
			nombremujerjovenosde=nombre;
			tempmujerjovenosde=tempCorporal;
		}



    	seguir=prompt("desea continuar ingresando pasajeros? s/n");
	}while (seguir="s");



	valorviajesindesc=contadordepasajeros*precioporpasajero;
	porcentajepami=contadorpami*100/contadordepasajeros;
	descuento25=valorviajesindesc*25/100;
	
	if (contadorosdeancianos=!0)
	{
	console.log("A- La cantidad de personas con OSDE de mas de 60 años es "+contadorosdeancianos);
	}
	if (flagmujerjoven==1)
	{
	console.log("B- la mujer con OSDE mas joven se llama "+nombremujerjovenosde+" y su temperatura es de "+tempmujerjovenosde);
	}
	console.log("C- el valor del viaje sin descuento es de $"+valorviajesindesc);
	if (porcentajepami>50)
	{
		valorviajecondescuento=valorviajesindesc-descuento25;
		console.log("D- el valor total del viaje con descuento es de $"+valorviajecondescuento);
	}


	
}
