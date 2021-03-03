
function mostrar()
{
	let nombre;
	let tipo;
	let precio;
	let cantidad;
	let categoria;
	let fabricante;
	let acumuladoralcohol=0;
	let acumuladoriac=0;
	let acumuladorquat=0;
	let contadorcomprasalcohol=0;
	let contadorcomprasiac=0;
	let contadorcomprasquat=0;
	let promediocantidadalcohol;
	let promediocantidadiac;
	let promediocantidadquat;
	let acumuladordesinfectante=0;
	let acumuladorbactericida=0;
	let acumuladordetergente=0;
	let cantidaddetergentebarato=0;
	let flagcaro=0;
	let categoriamascaro;
	let fabricantemascaro;
	let preciomascaro;





	for(let i = 0; i < 5; i++)
	{
		nombre=prompt("ingrese nombre del producto.");

		tipo=prompt("Ingrese el tipo (ALCOHOL, IAC o QUAT)");
		while(isNaN(tipo) == false || tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT") 
		{
			tipo=prompt("ERROR. Ingrese el tipo (ALCOHOL, IAC o QUAT)");
		}

		precio=parseInt(prompt("ingrese precio entre 100 y 300"));
		while (isNaN(precio) || precio>300 || precio<100)
		{
			precio=parseInt(prompt("ERROR. ingrese precio entre 100 y 300"));
		}

		cantidad=parseInt(prompt("ingrese cantidad entre 1 y 1000"));
		while (isNaN(cantidad) || cantidad>1000 || cantidad<=0)
		{
			cantidad=parseInt(prompt("ERROR. ingrese cantidad entre 1 y 1000"));
		}

		categoria=prompt("ingrese categoria del producto. desinfectante, bactericida o detergente").toLowerCase();
		while (categoria!="desinfectante" && categoria!="bactericida" && categoria!="detergente")
		{
			categoria=prompt("ERROR. ingrese categoria del producto. desinfectante, bactericida o detergente").toLowerCase();
		}

		fabricante=prompt("ingrese el fabricante");

		switch (tipo)
		{
			case "ALCOHOL":
				acumuladoralcohol+=cantidad;
				contadorcomprasalcohol++;
				break;

			case "IAC":
				acumuladoriac+=cantidad;
				contadorcomprasiac++;
				break;

			case "QUAT":
				acumuladorquat+=cantidad;
				contadorcomprasquat++;
				break;
		}

		switch (categoria)
		{
			case "desinfectante":
				acumuladordesinfectante+=cantidad;
				break;

			case "bactericida":
				acumuladorbactericida+=cantidad;
				break;

			case "detergente":
				acumuladordetergente+=cantidad;
				break;
		}

		if (categoria=="detergente" && precio<=200)
		{
			cantidaddetergentebarato+=cantidad;
		}

		if (flag==0 || (flag==1 && precio>preciomascaro))
		{
			flag=1;
			preciomascaro=precio;
			fabricantemascaro=fabricante;
			categoriamascaro=categoria;
		}


	}

	promediocantidadalcohol=acumuladoralcohol/contadorcomprasalcohol;
	promediocantidadiac=acumuladoriac/contadorcomprasiac;
	promediocantidadquat=acumuladorquat/contadorcomprasquat;

	console.log("A- El promedio de cantidad por tipo de producto es:\n alcohol: "+promediocantidadalcohol+"\n IAC: "+promediocantidadiac+"\n QUAT: "+promediocantidadquat);

	if (acumuladordesinfectante>acumuladordetergente && acumuladordesinfectante>acumuladorbactericida)
	{
		console.log("B- hay mas catidad de desinfectante: "+acumuladordesinfectante);
	}
	else if (acumuladorbactericida>=acumuladordetergente && acumuladorbactericida>acumuladordesinfectante)
	{
		console.log("B- hay mas cantidad de bactericida: "+acumuladorbactericida);
	}
	else
	{
		console.log("B- hay mas cantidad de detergente: "+acumuladordetergente);
	}

	console.log("C- la cantidad de detergente a menos de $200 es: "+cantidaddetergentebarato);

	console.log("D- el producto mas caro es de fabricante "+fabricantemascaro+" y de categoria "+categoriamascaro);

	
}
