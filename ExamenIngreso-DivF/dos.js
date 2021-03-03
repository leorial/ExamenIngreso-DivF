function mostrar()
{
    let nombre;
    let situacionlaboral;
    let sexo;
    let notaPromedio;
    let edad;
    let seguir;
    let flagestudiante=0;
    let mejorpromedioestudiante=0;
    let nombremejorpromedioestudiante;
    let flagedad=0;
    let edadmasviejoestudiante=0;
    let nombremasviejoestudiante;
    let acumuladornotatrabajando=0;
    let acumuladornotabuscando=0;
    let acumuladornotasoloestudiante=0;
    let contadorbuscando=0;
    let contadorsoloestudiante=0;
    let contadortrabajando=0;
    let promediobuscando=0;
    let promediotrabajando=0;
    let promediosoloestudiante=0;
    let flagmenosmaterias=0;
    let cantidadmenosmaterias=0;
    let nombremenosmaterias;
    let edadmenosmaterias;

    do
    {
      nombre=prompt("ingrese nombre");

      situacionlaboral=prompt("ingrese situacion laboral. buscando, trabajando o solo estudiante").toLowerCase();
      while (situacionlaboral!="buscando" && situacionlaboral!="trabajando" && situacionlaboral!="solo estudiante")
      {
          situacionlaboral=prompt("ERROR. ingrese situacion laboral. buscando, trabajando o solo estudiante").toLowerCase();
      }

      cantidadMaterias=parseInt(prompt("ingrese cantidad de materias. menos de 8"));
	    while (cantidadMaterias<1 || cantidadMaterias>7)
		  {
			    cantidadMaterias=parseInt(prompt("ERROR. ingrese cantidad de materias. menos de 8"));
		  }

      sexo=prompt("ingrese sexo. masculino/femenino/no binario").toLowerCase();
		  while (sexo!="masculino" && sexo!="femenino" && sexo!="no binario")
      {
          sexo=prompt("ERROR. ingrese sexo. masculino/femenino/no binario").toLowerCase();
      }

      notaPromedio=parseInt(prompt("ingrese nota promedio. entre 0 y 10"));
		  while (isNaN(notaPromedio) || notaPromedio>10 || notaPromedio<0 )
      {
          notaPromedio=parseInt(prompt("ERROR. ingrese nota promedio. entre 0 y 10"));
      }

      edad=parseInt(prompt("ingrese edad."));
      while (isNaN(edad) || edad<=0)
      {
          edad=parseInt(prompt("ERROR. ingrese edad."));
      }

      if (situacionlaboral="solo estudiante" && (flagestudiante==0 || mejorpromedioestudiante<notaPromedio))
      {
          mejorpromedioestudiante=notaPromedio;
          flagestudiante=1;
          nombremejorpromedioestudiante=nombre;
      }

      if (situacionlaboral="solo estudiante" && (flagedad==0 || edadmasviejoestudiante<edad))
      {
          edadmasviejoestudiante=edad;
          flagedad=1;
          nombremasviejoestudiante=nombre;
      }

      switch (situacionlaboral)
      {
        case "buscando":
          acumuladornotabuscando+=notaPromedio;
          contadorbuscando++;
          alert(acumuladornotabuscando);
          break;
        
        case "trabajando":
          acumuladornotatrabajando+=notaPromedio;
          contadortrabajando++;
          break;
        
        case "solo estudiante":
          acumuladornotasoloestudiante+=notaPromedio;
          contadorsoloestudiante++;
          break;
      }

      if (situacionlaboral=="buscando" && (flagmenosmaterias==0 || cantidadmenosmaterias<cantidadMaterias));
      {
          flagmenosmaterias=1;
          cantidadmenosmaterias=cantidadMaterias;
          nombremenosmaterias=nombre;
          edadmenosmaterias=edad;
      }





    seguir=prompt("desea seguir ingresando alumnos? s/n");
    }while (seguir=="s");


    promediobuscando=acumuladornotabuscando/contadorbuscando;
	  promediotrabajando=acumuladornotatrabajando/contadortrabajando;
	  promediosoloestudiante=acumuladornotasoloestudiante/contadorsoloestudiante;


    if (flagestudiante==1)
    {
      console.log("A- el nombre del mejor promedio que es solo estudiante es "+nombremejorpromedioestudiante);
    }
    else
    {
      console.log("A- no hay estudiante que solo sea estudiante");
    }

    if (flagedad==1)
    {
      console.log("B- el nombre del mas viejo estudiante es "+nombremasviejoestudiante);
    }
    else
    {
      console.log("B- no hay estudiante que solo sea estudiante");
    }

    console.log("C- promedio por situacion laboral: \n buscando: "+promediobuscando+"\n trabajando: "+promediotrabajando+"\n solo estudiante: "+promediosoloestudiante);

    if (flagmenosmaterias==1)
    {
      console.log("D- estudiante que cursa menos materias y busca trabajo: edad: "+edadmenosmaterias+" nombre: "+nombremenosmaterias);
    }
}

//no logre encontrar mi error en el punto C
