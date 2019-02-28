//Array para guardar los recursos del sistema
var arrayRecursos = new Array();
//Array para guardar las temporadas del sistema
var arraySeason = new Array();

//Funcion que inicializa todos los objetos y la relacion entre ellos
function initPopulate(){
	
	/* INICIO DE LA CREACION DE OBJETOS */ 
	//Se crean los objetos person
	try {
		var persona = new Person("Guillermo","Rodriguez",new Date(1993,09,25),"Moraga");
		var persona1 = new Person("Barry","Allen",new Date(1993,05,15));
		var persona2 = new Person("Marco","Mendez",new Date(1993,10,25),"Moraga","c://imagenes/usuario213123.jpg");
		var persona3 = new Person("Ramon","Diaz",new Date(1945,01,25));
		var persona4 = new Person("Manolo","Leon",new Date(1997,01,25));
		var persona5 = new Person("Robert","Downey",new Date(1964,09,25),"Jr.");
		var persona6 = new Person("Mark","Rufallo",new Date(1993,09,25));
		var persona7 = new Person("Emma","Frost",new Date(1963,09,25));
		var persona8 = new Person("Jonah","Jameson",new Date(1943,09,25),"J");
	} catch (error) {
		console.log("" + error);
	}
    //Se crean los objetos category
	try {
		var category = new Category("Comedia" , "Películas realizadas con la intención de provocar humor, entretenimiento y/o risa en el espectador.");
		var category1 = new Category("Romance" , "Un desarrollo romántico o amoroso entre dos personas. Puede acabar bien o mal");
		var category2 = new Category("Terror" , "Realizadas con la intención de provocar tensión, miedo y/o el sobresalto en la audiencia.");
		var category3 = new Category("Acción" , "El argumento implica una interacción moral entre el «bien» y el «mal» llevada a su fin por la violencia o la fuerza física");
		var category4 = new Category("Ciencia Ficción","Se basa en un futuro cercano o muy lejano, donde se logra ver el avance de la tecnología y como ejecuta este en la historia");
		var category5 = new Category("Drama", "Se centran principalmente en el desarrollo de un conflicto entre los protagonistas, o del protagonista con su entorno o consigo mismo");
		var category6 = new Category("Fantasía" , "La inexistencia de la tecnología nos da a entender que sucede en un tiempo pasado. La magia y animales mitológicos o sucesos sin una explicación lógica forman parte de este mundo");
		var category7 = new Category("Musical" , "Contienen interrupciones en su desarrollo, para dar un breve receso por medio de un fragmento musical cantado o acompañados de una coreografía.");
		var category8 = new Category("Serie B" , "Así era llamado el cine de baja de la producción realizada entre los años 1930 y 1960, cuando el público podía ver dos o tres películas por un mismo boleto");
		var category9 = new Category("Animacion" , "Se caracteriza por no recurrir a la técnica del rodaje de imágenes reales sino a una o más técnicas de animación");
	} catch (error) {
		console.log("" + error);
	}
	//Se crean objetos resource
	
	try {
		var resource = new Resource(180,"http://www.guiromo.es/resource",["Español","Ingles"],["Chino","Japones"]);
		arrayRecursos.push(resource);
		var resource1 = new Resource(120,"http://www.guiromo.es/resource1");
		arrayRecursos.push(resource1);
		var resource2 = new Resource(25,"http://www.guiromo.es/resource2",["Español","Ingles"],["Ruso","Ingles"]);
		arrayRecursos.push(resource2);
		var resource3 = new Resource(50,"http://www.guiromo.es/resource3",["Español","Ingles"],["Aleman","Ingles"]);
		arrayRecursos.push(resource3);
	} catch (error) {
		console.log("" + error);
	}
    //Se crea un objeto Coordinate
	try {
		var coor = new Coordinate(123,124);
	} catch (error) {
		console.log("" + error);
	}
    //Se crean objetos Movie
    try {
		var movie = new Movie("Vengadores",new Date(2012,05,05),"Americana","Superheroes y explosiones",null,resource,coor);
		var movie1 = new Movie("Aterriza como puedas",new Date(1980,05,05),"Americana","Se complica la cosa cuando van en avion",null,resource1,coor);
		var movie2 = new Movie("Las aventuras de Rita",new Date(1999,12,05),"Rusa","La vida no siempre puede ir bien",null,resource2);
		var movie3 = new Movie("Los cazafantasmas",new Date(1999,12,05),"Americana","Unos cazafantasmas están en su mero apogeo, al tratar de evitar que un demonio haga contacto con la Tierra.",null,resource2);
		var movie4 = new Movie("Mental",new Date(2016,12,05),"Española","El Doctor Ruiz tendrá que averiguar quien ha sido el asesino del crimen cometido en el psiquiátrico",null,resource2);
		var movie5 = new Movie("Sharknado",new Date(2004,12,05),"Americana","Un huracan de tiburones acecha a la tierra",null,resource2);
		var movie6 = new Movie("LaLaLand",new Date(2017,12,05),"Americana","Sebastian, un pianista de jazz, y Mia, una aspirante a actriz, se enamoran locamente; pero la ambición desmedida que tienen por triunfar en sus respectivas carreras, en una ciudad como Los Ángeles, repleta de competencia y carente de piedad, pone en peligro su amor.",null,resource3);
    } catch (error) {
        console.log("" + error);
	}
	//Se crean objetos User
	try {
		var user = new User("pepe","pepe@yo.com","pepe");
		var user1 = new User("ramon","ramon@yo.com","milady");
		var user2 = new User("guillermo","guillermo@yo.com","guillermo");
		var user3 = new User("prueba","prueba@prueba.com","prueba");
	} catch (error) {
		console.log("" + error);
	}
	//Se crean los objetos Season
	try {
		var season = new Season("Temporada 1",["Episodio 1","Episodio 2"]);
		arraySeason.push(season);
		var season1 = new Season("Temporada 2",["Episodio 1","Episodio 2"]);
		arraySeason.push(season1);
		var season2 = new Season("Temporada 3",["Episodio 1","Episodio 2"]);
		arraySeason.push(season2);
	} catch (error) {
		console.log("" + error);
	}
	//Se crean los objetos Serie
	try {
		var serie = new Serie("El Mago Invisible visible",new Date(2010,05,05),"Francesa","Un mago se cree invisible pero no lo es","http://www.guiromo.es/resource6",[season,season1]);
		var serie1 = new Serie("Juego de Gnomos",new Date(2016,05,05),"Americana","Movidas raras","http://www.guiromo.es/resource21",[season,season1,season2]);
		var serie2 = new Serie("The Flash",new Date(2014,05,05),"Americana","Barry Allen obtiene supervelocidad en una accidente, pero no es el unico","http://www.guiromo.es/resource21",[season,season1,season2]);
		var serie3 = new Serie("El bisonte",new Date(2010,05,05),"Rusa","Un bisonte con un don para el canto","http://www.guiromo.es/resource21",[season,season1,season2]);
	} catch (error) {
		console.log("" + error);
	}

	/* FIN DE LA CREACION DE OBJETOS */
	/* INICIO DE LAS RELACIONES MEDIANTE LAS FUNCIONES DE VIDEOSYSTEM */

	//Se crea el objeto VideoSystem y se le añade el nombre 
	try {
		var video = VideoSystem.getInstance();
		video.name = "GUIROMO CHANNEL";
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos las categorias 
	try {
		video.addCategory(category);
		video.addCategory(category1);
		video.addCategory(category2);
		video.addCategory(category3);
		video.addCategory(category4);
		video.addCategory(category5);
		video.addCategory(category6);
		video.addCategory(category7);
		video.addCategory(category8);
		video.addCategory(category9);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos los usuarios
	try {
		video.addUser(user);
		video.addUser(user1);
		video.addUser(user2);
		video.addUser(user3);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos las producciones
	try {
		video.addProduction(movie);
		video.addProduction(movie1);
		video.addProduction(movie2);
		video.addProduction(movie3);
		video.addProduction(movie4);
		video.addProduction(movie5);
		video.addProduction(movie6);
		video.addProduction(serie);
		video.addProduction(serie1);
		video.addProduction(serie2);
		video.addProduction(serie3);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos los actores
	try {
		video.addActor(persona);
		video.addActor(persona1);
		video.addActor(persona4);
		video.addActor(persona5);
		video.addActor(persona7);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos un director
	try {
		video.addDirector(persona2);
		video.addDirector(persona3);
		video.addDirector(persona6);
		video.addDirector(persona8);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a una categoria
	try {
		video.assignCategory(category,movie);
		video.assignCategory(category,movie1);
		video.assignCategory(category,movie3);
		video.assignCategory(category1,movie6);
		video.assignCategory(category1,movie2);
		video.assignCategory(category1,serie1);
		video.assignCategory(category2,movie2);
		video.assignCategory(category2,movie4);
		video.assignCategory(category2,movie5);
		video.assignCategory(category3,movie);
		video.assignCategory(category3,movie3);
		video.assignCategory(category3,movie5);
		video.assignCategory(category4,serie1);
		video.assignCategory(category4,serie2);
		video.assignCategory(category4,movie5);
		video.assignCategory(category5,movie6);
		video.assignCategory(category5,movie4);
		video.assignCategory(category5,movie2);
		video.assignCategory(category6,serie1);
		video.assignCategory(category6,serie3);
		video.assignCategory(category7,movie6);
		video.assignCategory(category7,serie3);
		video.assignCategory(category8,movie5);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a un director
	try {
		video.assignDirector(persona2,movie);
		video.assignDirector(persona2,movie1);
		video.assignDirector(persona3,movie2);
		video.assignDirector(persona6,movie3);
		video.assignDirector(persona6,movie4);
		video.assignDirector(persona8,movie5);
		video.assignDirector(persona8,movie6);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a un actorr
	try {	
		video.assignActor(persona,movie,"Hulk",true);
		video.assignActor(persona,movie1,"Ciudadano",false);
		video.assignActor(persona,movie2,"Nemesio",true);
		video.assignActor(persona4,movie,"Extra",false);
		video.assignActor(persona4,movie3,"Ciudadano",false);
		video.assignActor(persona5,movie4,"Ciudadano",false);
		video.assignActor(persona5,movie5,"Ciudadano",false);
		video.assignActor(persona5,movie6,"Ciudadano",false);
		video.assignActor(persona7,movie5,"Ciudadano",false);
		video.assignActor(persona7,movie6,"Ciudadano",false);
		video.assignActor(persona1,serie,"Mago Invisible",true);
		video.assignActor(persona1,serie1,"Extra",false);
		video.assignActor(persona1,serie2,"Barry Allen/The Flash",true);	
		video.assignActor(persona1,serie3,"Ciudadano",false);
	} catch (error) {
		console.log("" + error);
	}

}//Fin de initPopulate

//Funcion que actualiza las migas de pan
function breadcrumb(lugar, anterior, valor){
	var nav = document.getElementById("navMigas");
	//Selecciona la zona de las migas de pan y quita el contenido para añadir el nuevo
	var migas = document.getElementById("breadcrumb");
	while (migas.firstChild) {
		migas.removeChild(migas.firstChild);
	}
	//Añade el boton de cerrar ventanas
	var liVentanas = document.createElement("li");
	liVentanas.setAttribute("class","nav-item ml-auto");
	liVentanas.setAttribute("style","display: none");
	liVentanas.setAttribute("id","btnVentanas");
	var btnVentanas = document.createElement("button");
	btnVentanas.setAttribute("type","button");
	btnVentanas.setAttribute("class","btn btn-outline-secondary btn-sm cerrarVentana");
	btnVentanas.addEventListener("click",cerrarVentanas);
	btnVentanas.appendChild(document.createTextNode("Cerrar ventanas"));
	liVentanas.appendChild(btnVentanas);
	
	if (lugar == "Inicio") {
		var inicio = document.createElement("li");
		inicio.setAttribute("class","breadcrumb-item btn btn-sm active");
		inicio.appendChild(document.createTextNode(valor));
		inicio.addEventListener("click",function(){
					//Selecciona la zona debajo del menu horizontal de edicion y la muestra
					var contenidoCentral = document.getElementById("contenidoCentral");
					contenidoCentral.setAttribute("class","d-block");
					//Selecciona la zona para poner los formularios
					var contenidoFormularios = document.getElementById("contenidoFormularios");
					contenidoFormularios.setAttribute("class","d-none");
					showHomePage();
				});
		migas.appendChild(inicio);
		nav.appendChild(liVentanas);
	}else if ((lugar == "Actores") || (lugar == "Directores") || (lugar == "Producciones")) {
		var inicio = document.createElement("li");
		var enlaceInicio = document.createElement("button");
		inicio.setAttribute("class","breadcrumb-item ");
		enlaceInicio.appendChild(document.createTextNode("Inicio"));
		enlaceInicio.setAttribute("class","btn btn-link btn-sm");
		enlaceInicio.addEventListener("click",showHomePage);
		inicio.appendChild(enlaceInicio);
		migas.appendChild(inicio);
		var actual = document.createElement("li");
		actual.setAttribute("class","breadcrumb-item btn btn-sm active");
		actual.appendChild(document.createTextNode(valor));
		migas.appendChild(actual);
		nav.appendChild(liVentanas);
	}else {
		var inicio = document.createElement("li");
		var enlaceInicio = document.createElement("button");
		inicio.setAttribute("class","breadcrumb-item ");
		enlaceInicio.appendChild(document.createTextNode("Inicio"));
		enlaceInicio.setAttribute("class","btn btn-link btn-sm");
		enlaceInicio.addEventListener("click",showHomePage);
		inicio.appendChild(enlaceInicio);
		migas.appendChild(inicio);
		var ultimo = document.createElement("li");
		var enlaceUltimo = document.createElement("button");
		ultimo.setAttribute("class","breadcrumb-item ");
		enlaceUltimo.appendChild(document.createTextNode(anterior));
		enlaceUltimo.setAttribute("class","btn btn-link btn-sm");
		enlaceUltimo.setAttribute("value",anterior);
		if (lugar == "Produccion") {
			enlaceUltimo.addEventListener("click",showProductions);
		}else if(lugar == "Actor"){
			enlaceUltimo.addEventListener("click",showActors);
		}else{
			enlaceUltimo.addEventListener("click",showDirectors);
		}
		ultimo.appendChild(enlaceUltimo);
		migas.appendChild(ultimo);
		var actual = document.createElement("li");
		actual.setAttribute("class","breadcrumb-item btn btn-sm active");
		actual.setAttribute("aria-current","page");
		actual.appendChild(document.createTextNode(valor));
		migas.appendChild(actual);
		nav.appendChild(liVentanas);
	}
}//Fin de breadcrumb

//Carga las tarjetas de la pagina de inicio con las categorias
function showHomePage(){
	//Selecciona el titulo central y le cambia el nombre
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.innerHTML = "Categorias del sistema";

	//Selecciona la zona debajo del menu horizontal de edicion y la muestra
	var contenidoCentral = document.getElementById("contenidoCentral");
	contenidoCentral.setAttribute("class","d-block");
	//oculta la zona para poner los formularios
	var contenidoFormularios = document.getElementById("contenidoFormularios");
	contenidoFormularios.setAttribute("class","d-none");

	//Actualiza las migas de pan
	breadcrumb("Inicio",null,"Inicio");

	//Selecciona la zona central donde van las tarjetas de las categorias
	var tarjetas = document.getElementById("tarjetasZona");
	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE TARJETAS
	while (tarjetas.firstChild) {
		tarjetas.removeChild(tarjetas.firstChild);
	}
	//Con un iterador recorremos todas las categorias del sistema
	//Y creamos el menu lateral mientras haya categorias
	//Al ser singleton e llama al mismo objeto
	video = VideoSystem.getInstance();
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		//Crea las card de la zona central
		var tarjeta = document.createElement("div");
		tarjeta.setAttribute("class","col-lg-4 col-md-6 mb-4 zoom");	
		var borde = document.createElement("div");
		borde.setAttribute("class","card h-100");
		var cuerpo = document.createElement("div");
		cuerpo.setAttribute("class","card-body");
		var imagen = document.createElement("img");
		imagen.setAttribute("class","card-img-top");
		/* ESTA LINEA CAMBIA EL ENLACE DE LA FOTO DE LAS TARJETAS*/ 
		imagen.setAttribute("src","img/"+categoria.value.name+".jpg");
		imagen.setAttribute("alt",categoria.value.name);
		var buttonTitle = document.createElement("button");
		//id que sirve para recoger la categoria pulsada en el evento
		buttonTitle.setAttribute("id","boton"+categoria.value.name);
		buttonTitle.setAttribute("type","button");
		buttonTitle.setAttribute("value",categoria.value.name);
		buttonTitle.setAttribute("class","btn btn-link btn-block");
		buttonTitle.appendChild(document.createTextNode(categoria.value.name));	
		var descripCategory = document.createElement("p");
		descripCategory.setAttribute("class","card-text");
		/* ESTA LINEA CAMBIA LA DESCRIPCION DE LAS TARJETAS */ 
		descripCategory.appendChild(document.createTextNode(categoria.value.description));
		var valoracion = document.createElement("div");
		valoracion.setAttribute("class","card-footer");
		var estrellas = document.createElement("small");
		estrellas.setAttribute("class","text-muted");
		/* ESTA LINEA CAMBIA LAS ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS (PROXIMA VERSION)?*/ 
		estrellas.appendChild(document.createTextNode('Valoracion'));
		
		//Se crea la estructura de las tarjetas con appendChild
		tarjetas.appendChild(tarjeta);
		tarjeta.appendChild(borde);
		borde.appendChild(cuerpo);
		cuerpo.appendChild(imagen);
		cuerpo.appendChild(buttonTitle);
		cuerpo.appendChild(descripCategory);
		cuerpo.appendChild(valoracion);
		valoracion.appendChild(estrellas);
	
		//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
		buttonTitle.addEventListener("click", showProductions);

        //Pasa a la siguiente categoria
		categoria = categorias.next();
	}//FIn del while iterador

}//Fin de categoriesMenuPopulate

//Carga el menu lateral con las categorias
function categoriesMenuPopulate(){
	//Selecciona el menu lateral donde van a ir las categorias del sistema
	var menu = document.getElementById("menuCategorias").getElementsByClassName("nav flex-column mx-2")[0];
	//QUITA TODO EL CONTENIDO QUE HAYA EN EL MENU 
	while (menu.firstChild) {
		menu.removeChild(menu.firstChild);
	}

	//Con un iterador recorremos todas las categorias del sistema
	//Y creamos el menu lateral mientras haya categorias
	//Al ser singleton e llama al mismo objeto
	video = VideoSystem.getInstance();
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		//Crea las opciones del menu lateral
		var li = document.createElement("li");
		li.setAttribute("class","nav-item");
		var botonEnlace = document.createElement("button");
		botonEnlace.setAttribute("class","nav-link btn btn-outline-primary btn-lg btn-block");
		botonEnlace.setAttribute("value",categoria.value.name);
		botonEnlace.appendChild(document.createTextNode(categoria.value.name));
		botonEnlace.addEventListener("click", showProductions);
		li.appendChild(botonEnlace);
		menu.appendChild(li);
		
        //Pasa a la siguiente categoria
		categoria = categorias.next();
	}//FIn del while iterador
	//Añade funciones a los bntones de actores y directores
	var btnAct = document.getElementById("btnActores");
	var btnDir = document.getElementById("btnDirectores");
	btnAct.addEventListener("click", showActors);
	btnDir.addEventListener("click", showDirectors);

}//Fin de showHomePage

//Muestra un listado con los actores del sistema.
function showActors(){
	//Cambia el titulo de la pagina principal
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.style.display = "block";
	//El valor this.value lo recoge del valor del boton que hayamos pulsado
	tituloContenido.innerHTML = "Actores del sistema";

	//Actualiza las migas de pan
	breadcrumb("Actores",null,"Actores");

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER TODOS LOS ACTORES DEL SISTEMA
	video = VideoSystem.getInstance();
	var actores = video.actors;
	var actor = actores.next();
	while (actor.done !== true){
		//Crea las tarjetas de las producciones en la zona central
		var tarjeta = document.createElement("div");
		tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
		var borde = document.createElement("div");
		borde.setAttribute("class","card h-100");
		var cuerpo = document.createElement("div");
		cuerpo.setAttribute("class","card-body");
		var imagen = document.createElement("img");
		imagen.setAttribute("class","card-img");
		imagen.setAttribute("width","750");
		imagen.setAttribute("heigh","200");
		/* ESTA LINEA CAMBIA EL ENLACE DE LA FOTO DE LAS TARJETAS*/ 
		//imagen.setAttribute("src","img/"+actor.value.name+".jpg");
		imagen.setAttribute("src","img/Portada.jpg");
		imagen.setAttribute("alt",actor.value.name);
		var buttonTitle = document.createElement("button");
		//id que sirve para recoger la produccion pulsada en el evento
		buttonTitle.setAttribute("id","botonActor");
		buttonTitle.setAttribute("type","button");
		var nombre = actor.value.name+" "+actor.value.lastName1;
		if (actor.value.lastName2 != null) {
			nombre += " " + actor.value.lastName2
		}
		buttonTitle.setAttribute("value",nombre);
		buttonTitle.setAttribute("class","btn btn-link btn-lg btn-block");
		buttonTitle.appendChild(document.createTextNode(nombre));	
		var valoracion = document.createElement("div");
		valoracion.setAttribute("class","card-footer");
		var estrellas = document.createElement("small");
		estrellas.setAttribute("class","text-muted");
		/* ESTA LINEA CAMBIA LAS ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS (PROXIMA VERSION)?*/ 
		estrellas.appendChild(document.createTextNode('Valoracion'));
		
		//Se crea la estructura de las tarjetas con appendChild
		contenido.appendChild(tarjeta);
		tarjeta.appendChild(borde);
		borde.appendChild(cuerpo);
		cuerpo.appendChild(imagen);
		cuerpo.appendChild(buttonTitle);
		cuerpo.appendChild(valoracion);
		valoracion.appendChild(estrellas);
	
		//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
		buttonTitle.addEventListener("click", showActor);
		//imagen.addEventListener("click", showActor);			

		//Pasa al siguiente actor
		actor = actores.next();
	}//Fin del while

}//Fin de showActors

//Muestra un listado con los directores del sistema.
function showDirectors(){
	//Cambia el titulo de la pagina principal
	var tituloContenido = document.getElementById("tituloZona");
	//El valor this.value lo recoge del valor del boton que hayamos pulsado
	tituloContenido.innerHTML = "Directores del sistema";

	//Actualiza las migas de pan
	breadcrumb("Directores",null,"Directores");

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER TODOS LOS ACTORES DEL SISTEMA
	video = VideoSystem.getInstance();
	var directores = video.directors;
	var director = directores.next();
	while (director.done !== true){
		//Crea las tarjetas de las producciones en la zona central
		var tarjeta = document.createElement("div");
		tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
		var borde = document.createElement("div");
		borde.setAttribute("class","card h-100");
		var cuerpo = document.createElement("div");
		cuerpo.setAttribute("class","card-body");
		var imagen = document.createElement("img");
		imagen.setAttribute("class","card-img");
		imagen.setAttribute("width","750");
		imagen.setAttribute("heigh","200");
		/* ESTA LINEA CAMBIA EL ENLACE DE LA FOTO DE LAS TARJETAS*/ 
		//imagen.setAttribute("src","img/"+director.value.name+".jpg");
		imagen.setAttribute("src","img/Portada.jpg");
		imagen.setAttribute("alt",director.value.name);
		var buttonTitle = document.createElement("button");
		//id que sirve para recoger la produccion pulsada en el evento
		buttonTitle.setAttribute("id","botonDirector");
		buttonTitle.setAttribute("type","button");
		var nombre = director.value.name+" "+director.value.lastName1;
		if (director.value.lastName2 != null) {
			nombre += " " + director.value.lastName2
		}
		buttonTitle.setAttribute("value",nombre);
		buttonTitle.setAttribute("class","btn btn-link btn-lg btn-block");
		buttonTitle.appendChild(document.createTextNode(nombre));	
		var valoracion = document.createElement("div");
		valoracion.setAttribute("class","card-footer");
		var estrellas = document.createElement("small");
		estrellas.setAttribute("class","text-muted");
		/* ESTA LINEA CAMBIA LAS ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS (PROXIMA VERSION)?*/ 
		estrellas.appendChild(document.createTextNode('Valoracion'));
		
		//Se crea la estructura de las tarjetas con appendChild
		contenido.appendChild(tarjeta);
		tarjeta.appendChild(borde);
		borde.appendChild(cuerpo);
		cuerpo.appendChild(imagen);
		cuerpo.appendChild(buttonTitle);
		cuerpo.appendChild(valoracion);
		valoracion.appendChild(estrellas);

		//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
		buttonTitle.addEventListener("click", showDirector);
		//imagen.addEventListener("click", showDirector);			

		//Pasa al siguiente actor
		director = directores.next();
	}//Fin del while
} //Fin de showDirectors

//Dado un actor muestra toda su información relacionada, incluida sus producciones.
function showActor(){
	//Quita el titulo de la zona
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.innerHTML = this.value;

	//Actualiza las migas de pan
	breadcrumb("Actor","Actores",this.value);

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");
	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER LA PRODUCCION SELECCIONADA
	//Recuperamos del array de actores el objeto person que tenga el mismo nombre apellidos que el seleccionado
	var encontrado = false;
	var actores = video.actors;
	var actor = actores.next();
	while ((actor.done !== true) && (!encontrado)){
		//Si coincide el name, lastName1 y lastName2 con el this.value es el actor seleccionado
		var nombreCompleto = actor.value.name +" "+ actor.value.lastName1;
		if (actor.value.lastName2 != null) {
			nombreCompleto += " " + actor.value.lastName2
		}
		if (nombreCompleto == this.value){
			//Si coincide nombre de la produccion con el valor del boton muestra la informacion
			//Crea las tarjetas de las producciones en la zona central
			var tarjeta = document.createElement("div");
			tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
			var borde = document.createElement("div");
			borde.setAttribute("class","card h-100");
			var cuerpo = document.createElement("div");
			cuerpo.setAttribute("class","card-body");
			var imagen = document.createElement("img");
			imagen.setAttribute("class","card-img");
			imagen.setAttribute("width","750");
			imagen.setAttribute("heigh","200");
			/* ESTA LINEA CAMBIA EL ENLACE DE LA FOTO DE LAS TARJETAS*/ 
			//imagen.setAttribute("src","img/"+production.value.title+".jpg");
			imagen.setAttribute("src","img/Portada.jpg");
			imagen.setAttribute("alt",actor.value.name);
			/* ESTAS LINEAS SON PARA LA NACIONALIDAD DEL ACTOR */
			var nombre = document.createElement("p");
			nombre.setAttribute("class","card-text cajaTitulo");
			nombre.appendChild(document.createTextNode("Nombre:"));
			var nombreDescript = document.createElement("p");
			nombreDescript.setAttribute("class","card-text cajaDescripcion");
			nombreDescript.appendChild(document.createTextNode(nombreCompleto));
			/* ESTAS LINEAS SON PARA LA FECHA DE NACIMIENTO DEL ACTOR */
			var nacimiento = document.createElement("p");
			nacimiento.setAttribute("class","card-text cajaTitulo");
			nacimiento.appendChild(document.createTextNode("Fecha de nacimiento:"));
			var nacimientoDescript = document.createElement("p");
			nacimientoDescript.setAttribute("class","card-text cajaDescripcion");
			nacimientoDescript.appendChild(document.createTextNode(actor.value.born.toLocaleDateString()));			
			
			//Se crea la estructura de las tarjetas con appendChild
			contenido.appendChild(tarjeta);
			tarjeta.appendChild(borde);
			borde.appendChild(cuerpo);
			cuerpo.appendChild(imagen);	
			cuerpo.appendChild(nombre);
			cuerpo.appendChild(nombreDescript);
			cuerpo.appendChild(nacimiento);
			cuerpo.appendChild(nacimientoDescript);

			var film = document.createElement("p");
			film.setAttribute("class","card-text cajaTitulo");
			film.appendChild(document.createTextNode("Producciones en las que ha participado:"));
			cuerpo.appendChild(film);
			//Muestra las producciones en las que esta asignado el actor
			var productions = video.getProductionsActor(actor.value);
			var production = productions.next();
			while (production.done !== true){
				var filmDescript = document.createElement("p");
				filmDescript.setAttribute("class","card-text cajaDescripcion");
				filmDescript.appendChild(document.createTextNode("Titulo: "));
				var proBtn = document.createElement("button");
				proBtn.setAttribute("class","card-text btn btn-link ");
				proBtn.setAttribute("value",production.value.title);
				proBtn.appendChild(document.createTextNode(production.value.title));
				proBtn.addEventListener("click", showProduction); 
				filmDescript.appendChild(proBtn);
				filmDescript.appendChild(document.createTextNode(". Papel: "+production.papel));
				cuerpo.appendChild(filmDescript);
				//Pasa a la siguiente produccion del actor
				production = productions.next();
			}//Fin del while iterador de producciones de un actor

			encontrado = true;
		}//Fin del if principal del while
		//Pasamos al siguiente actor
		actor = actores.next();
	}//Fin del while iterador de actores

}//Fin de showActor

//Dado un director, muestra toda su información relacionada, incluida sus producciones
function showDirector(){
	//Quita el titulo de la zona
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.innerHTML = this.value;

	//Actualiza las migas de pan
	breadcrumb("Director","Directores",this.value);

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");
	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER LA PRODUCCION SELECCIONADA
	//Recuperamos del array de actores el objeto person que tenga el mismo nombre apellidos que el seleccionado
	var encontrado = false;
	var directores = video.directors;
	var director = directores.next();
	while ((director.done !== true) && (!encontrado)){
		//Si coincide el name, lastName1 y lastName2 con el this.value es el actor seleccionado
		var nombreCompleto = director.value.name +" "+ director.value.lastName1;
		if (director.value.lastName2 != null) {
			nombreCompleto += " " + director.value.lastName2
		}
		if (nombreCompleto == this.value){
			//Si coincide nombre de la produccion con el valor del boton muestra la informacion
			//Crea las tarjetas de las producciones en la zona central
			var tarjeta = document.createElement("div");
			tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
			var borde = document.createElement("div");
			borde.setAttribute("class","card h-100");
			var cuerpo = document.createElement("div");
			cuerpo.setAttribute("class","card-body");
			var imagen = document.createElement("img");
			imagen.setAttribute("class","card-img");
			imagen.setAttribute("width","750");
			imagen.setAttribute("heigh","200");
			/* ESTA LINEA CAMBIA EL ENLACE DE LA FOTO DE LAS TARJETAS*/ 
			//imagen.setAttribute("src","img/"+director.value.title+".jpg");
			imagen.setAttribute("src","img/Portada.jpg");
			imagen.setAttribute("alt",director.value.name);
			/* ESTAS LINEAS SON PARA LA NACIONALIDAD DEL ACTOR */
			var nombre = document.createElement("p");
			nombre.setAttribute("class","card-text cajaTitulo");
			nombre.appendChild(document.createTextNode("Nombre:"));
			var nombreDescript = document.createElement("p");
			nombreDescript.setAttribute("class","card-text cajaDescripcion");
			nombreDescript.appendChild(document.createTextNode(nombreCompleto));
			/* ESTAS LINEAS SON PARA LA FECHA DE NACIMIENTO DEL DIRECTOR */
			var nacimiento = document.createElement("p");
			nacimiento.setAttribute("class","card-text cajaTitulo");
			nacimiento.appendChild(document.createTextNode("Fecha de nacimiento:"));
			var nacimientoDescript = document.createElement("p");
			nacimientoDescript.setAttribute("class","card-text cajaDescripcion");
			nacimientoDescript.appendChild(document.createTextNode(director.value.born.toLocaleDateString()));			
			
			//Se crea la estructura de las tarjetas con appendChild
			contenido.appendChild(tarjeta);
			tarjeta.appendChild(borde);
			borde.appendChild(cuerpo);
			cuerpo.appendChild(imagen);	
			cuerpo.appendChild(nombre);
			cuerpo.appendChild(nombreDescript);
			cuerpo.appendChild(nacimiento);
			cuerpo.appendChild(nacimientoDescript);

			var film = document.createElement("p");
			film.setAttribute("class","card-text cajaTitulo");
			film.appendChild(document.createTextNode("Producciones que ha dirigido:"));
			cuerpo.appendChild(film);
			//Muestra las producciones en las que esta asignado el actor
			var productions = video.getProductionsDirector(director.value);
			var production = productions.next();
			while (production.done !== true){
				var filmDescript = document.createElement("p");
				filmDescript.setAttribute("class","card-text cajaDescripcion");
				filmDescript.appendChild(document.createTextNode("Titulo: "));
				var proBtn = document.createElement("button");
				proBtn.setAttribute("class","card-text btn btn-link ");
				proBtn.setAttribute("value",production.value.title);
				proBtn.appendChild(document.createTextNode(production.value.title));
				proBtn.addEventListener("click", showProduction); 
				filmDescript.appendChild(proBtn);
				cuerpo.appendChild(filmDescript);
				//Pasa a la siguiente produccion del actor
				production = productions.next();
			}//Fin del while iterador de producciones de un actor

			encontrado = true;
		}//Fin del if principal del while
		//Pasamos al siguiente director
		director = directores.next();
	}//Fin del while iterador de directores
}//Fin de showDirector

//Dado una categoría, director o actor, muestra el listado de sus producciones.
function showProductions(){
	//Cambia el titulo de la pagina principal
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.style.display = "block";
	//El valor this.value lo recoge del valor del boton que hayamos pulsado
	tituloContenido.innerHTML = this.value;

	//Actualiza las migas de pan
	breadcrumb("Producciones",null,this.value);

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER LAS PRODUCCIONES DE UNA CATEGORIA
	var encontrado = false;
	video = VideoSystem.getInstance();
	var categorias = video.categories;
	var categoria = categorias.next();
	while ((categoria.done !== true) && (!encontrado)){
		if (categoria.value.name == this.value) {
			//Si coincide nombre de la categoria con el valor del boton
			//Comienza el iterador de las producciones de esa categoria
			var productions = video.getProductionsCategory(categoria.value);
			var production = productions.next();
			while (production.done !== true){

				//Crea las tarjetas de las producciones en la zona central
				var tarjeta = document.createElement("div");
				tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
				var borde = document.createElement("div");
				borde.setAttribute("class","card h-100");
				var cuerpo = document.createElement("div");
				cuerpo.setAttribute("class","card-body");
				var imagen = document.createElement("img");
				imagen.setAttribute("class","card-img");
				var tipo = document.createElement("span");
				tipo.setAttribute("class","card-text");
				if(production.value instanceof Movie){
					tipo.appendChild(document.createTextNode("Pelicula"));
				}else{
					tipo.appendChild(document.createTextNode("Serie"));
				}
				imagen.setAttribute("width","750");
				imagen.setAttribute("heigh","200");
				/* ESTA LINEA CAMBIA EL ENLACE DE LA FOTO DE LAS TARJETAS*/ 
				//imagen.setAttribute("src","img/"+production.value.title+".jpg");
				imagen.setAttribute("src","img/Portada.jpg");
				imagen.setAttribute("alt",production.value.title);
				var buttonTitle = document.createElement("button");
				//id que sirve para recoger la produccion pulsada en el evento
				buttonTitle.setAttribute("id","botonProduccion");
				buttonTitle.setAttribute("type","button");
				buttonTitle.setAttribute("value",production.value.title);
				buttonTitle.setAttribute("class","btn btn-link btn-lg btn-block");
				buttonTitle.appendChild(document.createTextNode(production.value.title));	
				var descripProduction = document.createElement("p");
				descripProduction.setAttribute("class","card-text");
				/* ESTA LINEA CAMBIA LA DESCRIPCION DE LAS TARJETAS */ 
				descripProduction.appendChild(document.createTextNode(production.value.synopsis));
				var valoracion = document.createElement("div");
				valoracion.setAttribute("class","card-footer");
				var estrellas = document.createElement("small");
				estrellas.setAttribute("class","text-muted");
				/* ESTA LINEA CAMBIA LAS ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS (PROXIMA VERSION)?*/ 
				estrellas.appendChild(document.createTextNode('Valoracion'));
				
				//Se crea la estructura de las tarjetas con appendChild
				contenido.appendChild(tarjeta);
				tarjeta.appendChild(borde);
				borde.appendChild(cuerpo);
				cuerpo.appendChild(imagen);
				cuerpo.appendChild(tipo);
				cuerpo.appendChild(buttonTitle);
				cuerpo.appendChild(descripProduction);
				cuerpo.appendChild(valoracion);
				valoracion.appendChild(estrellas);
			
				//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
				buttonTitle.addEventListener("click", showProduction);
				//imagen.addEventListener("click", showProduction);	

				production = productions.next();
			}//fin del while iterador
			//Variable para salir del bucle principal si encuentra la categoria
			encontrado = true;
		}//Fin del if que compara el nombre de la categoria con el valor del boton
		
        //Pasa a la siguiente categoria
		categoria = categorias.next();
	}//FIn del while iterador
	
}//Fin de showProductions

//Muestra la información de una producción, incluida su director y sus actores participantes.
function showProduction(){
	//Oculta el  el titulo de la zona
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.style.display = "none";
	
	//Se actualizan las migas de pan
	breadcrumb("Produccion",tituloContenido.textContent, this.value);

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");
	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER LA PRODUCCION SELECCIONADA
	var encontrado = false;
	var producciones = video.productions;
	var produccion = producciones.next();
	while ((produccion.done !== true) && (!encontrado)){
		if (produccion.value.title == this.value) {
			//Si coincide nombre de la produccion con el valor del boton muestra la informacion
			//Crea las tarjetas de las producciones en la zona central
			var tarjeta = document.createElement("div");
			tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
			var borde = document.createElement("div");
			borde.setAttribute("class","card h-100");
			var cuerpo = document.createElement("div");
			cuerpo.setAttribute("class","card-body");
			var titulo = document.createElement("h2");
			titulo.setAttribute("class","card-title");
			titulo.setAttribute("id","titulo");
			titulo.setAttribute("value",produccion.value.title);
			titulo.appendChild(document.createTextNode(produccion.value.title));
			var imagen = document.createElement("img");
			imagen.setAttribute("class","card-img");
			imagen.setAttribute("width","750");
			imagen.setAttribute("heigh","200");
			/* ESTA LINEA CAMBIA EL ENLACE DE LA FOTO DE LAS TARJETAS*/ 
			//imagen.setAttribute("src","img/"+production.value.title+".jpg");
			imagen.setAttribute("src","img/Portada.jpg");
			//imagen.setAttribute("alt",produccion.value.title);
			/* ESTAS LINEAS SON PARA LA NACIONALIDAD DE LA PRODUCCION */
			var nationality = document.createElement("p");
			nationality.setAttribute("class","card-text cajaTitulo");
			nationality.appendChild(document.createTextNode("Nacionalidad:"));
			var nationalityDescript = document.createElement("p");
			nationalityDescript.setAttribute("class","card-text cajaDescripcion");
			nationalityDescript.appendChild(document.createTextNode(produccion.value.nationality));
			/* ESTAS LINEAS SON PARA LA FECHA DE LA PRODUCCION */
			var publication = document.createElement("p");
			publication.setAttribute("class","card-text cajaTitulo");
			publication.appendChild(document.createTextNode("Fecha de publicacion:"));
			var publicationDescript = document.createElement("p");
			publicationDescript.setAttribute("class","card-text cajaDescripcion");
			publicationDescript.appendChild(document.createTextNode(produccion.value.publication.toLocaleDateString()));
			/* ESTAS LINEAS SON PARA LA SIPNOSIS DE LA PRODUCCION */
			var synopsis = document.createElement("p");
			synopsis.setAttribute("class","card-text cajaTitulo");
			synopsis.appendChild(document.createTextNode("Sipnosis:"));
			var synopsisDescript = document.createElement("p");
			synopsisDescript.setAttribute("class","card-text cajaDescripcion");
			synopsisDescript.appendChild(document.createTextNode(produccion.value.synopsis));

			//Se crea la estructura de las tarjetas con appendChild
			contenido.appendChild(tarjeta);
			tarjeta.appendChild(borde);
			borde.appendChild(cuerpo);
			cuerpo.appendChild(imagen);
			cuerpo.appendChild(titulo);		
			cuerpo.appendChild(nationality);
			cuerpo.appendChild(nationalityDescript);
			cuerpo.appendChild(publication);
			cuerpo.appendChild(publicationDescript);
			cuerpo.appendChild(synopsis);
			cuerpo.appendChild(synopsisDescript);

			//Para mostrar el director de la produccion
			var encontrado = false;
			var directores = video.directors;
			var director = directores.next();
			//Recorre todos los directores del sistema
			while ((director.done !== true) && (!encontrado)){
				//Para cada director hace un iterador con sus producciones
				var productions = video.getProductionsDirector(director.value);
				var production = productions.next();
				while ((production.done !== true) && (!encontrado)){
					//Si el titulo de la production del iterador es igual al titulo de la produccion en la que estamos
					//muestra en esta produccion que es el director
					if(production.value.title == produccion.value.title){
						var dir = document.createElement("p");
						dir.setAttribute("class","card-text cajaTitulo");
						dir.appendChild(document.createTextNode("Dirigida por:"));
						cuerpo.appendChild(dir);
						var dirDescript = document.createElement("p");
						dirDescript.setAttribute("class","card-text cajaDescripcion");
						var dirBtn = document.createElement("button");
						dirBtn.setAttribute("class","card-text btn btn-link ");
						var nombre = director.value.name+" "+ director.value.lastName1;
						if (director.value.lastName2 != null) {
							nombre += " " + director.value.lastName2
						}
						dirBtn.setAttribute("value",nombre);
						dirBtn.appendChild(document.createTextNode(nombre)); 
						dirBtn.addEventListener("click", showDirector);
						dirDescript.appendChild(dirBtn);
						cuerpo.appendChild(dirDescript);
	
						encontrado = true;
					}
					//Pasa a la siguiente production del director
					production = productions.next();
				}//FIn del while iterador de producciones de un director
				//Pasa al siguiente director
				director = directores.next();
			}//Fin del while iterador de directores
			
			//Para mostrar los actores de la produccion necesitamos otro iterador
			var elenco = video.getCast(produccion.value);
			var actor = elenco.next();
			var act = document.createElement("p");
			act.setAttribute("class","card-text cajaTitulo");
			act.appendChild(document.createTextNode("Reparto"));
			cuerpo.appendChild(act);
			while (actor.done !== true){	
				var actDescript = document.createElement("p");
				actDescript.setAttribute("class","card-text cajaDescripcion");
				var actBtn = document.createElement("button");
				actBtn.setAttribute("class","card-text btn btn-link ");
				var nombre = actor.value.name+" "+ actor.value.lastName1;
				if (actor.value.lastName2 != null) {
					nombre += " " + actor.value.lastName2
				}
				actBtn.setAttribute("value",nombre);
				actBtn.appendChild(document.createTextNode(nombre)); 
				actBtn.addEventListener("click", showActor);
				actDescript.appendChild(actBtn);
				actDescript.appendChild(document.createTextNode(". Papel: "+ actor.papel + ". Principal: " + actor.principal));
				cuerpo.appendChild(actDescript);		
				actor = elenco.next();
			}

			//Muestra el boton que abre una ventana nueva para mostrar los recursos
			var resourceBtn = document.createElement("button");
			//Pone el value al boton con el titulo de la produccion para poder identificar la ventana que crea el boton
			resourceBtn.setAttribute("value",titulo.textContent);
			resourceBtn.setAttribute("class","card-text btn btn-primary btn-lg btn-block");
			resourceBtn.appendChild(document.createTextNode("Mostrar recursos")); 
			resourceBtn.addEventListener("click", abrirVentana);
			cuerpo.appendChild(resourceBtn);
			
			encontrado = true;
		}//Fin del if
		//Pasa a la siguiente produccion
		produccion = producciones.next();
		
	}//Fin del while iterador
	
}//Fin de showProduction

/* FUNCIONES AÑADIDAS EN LA PRACTICA 6 */

var arrayVentanas = new Array();
//Abre una nueva ventana
function abrirVentana(){
	var index = 0;
	var encontrada = false;
	
	//Activa el boton de cerrar ventanas
	document.getElementById("btnVentanas").style.display = "block";
	//Si es la primera vez que se ejecuta la funcion crea directamente la ventana
	if((arrayVentanas[0] == undefined) || (arrayVentanas[0].name == "")){
		crearVentana(this.value);
	}else{
		while ((index < arrayVentanas.length) && !encontrada) {
			if ((arrayVentanas[index] && !arrayVentanas[index].closed && arrayVentanas[index].name == this.value)){
				//Si la ventana no esta cerrada, esta creada y ya tiene ese nombre pone la variable a true
				encontrada = true;
			}
			index++;
		}//Fin del while
		if (encontrada) {
			arrayVentanas[index-1].focus();
		}else{
			crearVentana(this.value);
		}
	}//Fin del if
	
}//FIn de abrir ventana

//Crea una ventana
function crearVentana(nombre){
	var ventanaNueva = window.open("pages/Resource.html",nombre,"toolbar=yes,scrollbars=yes,resizable=yes,width=640,height=670");
	arrayVentanas.push(ventanaNueva);
}//FIn de crearVentana

//Cierra las ventanas abiertas
function cerrarVentanas(){
	var boton = document.getElementById("btnVentanas");
	for (let index = 0; index < arrayVentanas.length; index++) {
		//Si la ventana no esta cerrada la cierra
		if (!arrayVentanas[index].closed) {
			arrayVentanas[index].close();	
		}
	}
	//Elimina los elementos del array
	while(arrayVentanas.length != 0){
		arrayVentanas.shift();
	}
	boton.style.display = "none";
}//FIn de cerrarVentanas

//Muestra los recursos relacionados con una producción en una nueva ventana
//Esta funcion se ejecuta al cargar la ventana
function showResource(){
	//Se recoge el titulo de la produccion
	var tituloProduccion = document.getElementById("titulo");

	//Se recorre el array de ventanas 
	for (let index = 0; index < arrayVentanas.length; index++) {
		//Si el titulo es igual a la ventana que haya en el array
		if (arrayVentanas[index].name == tituloProduccion.textContent) {
			//Selecciona la zona de la ventana nueva
			var ventana = arrayVentanas[index];
		}
	}

	var contenidoVentana = ventana.document.getElementById("contenidoZona");
	//Cambia el titulo de la ventana
	ventana.document.title = "Recursos de " + tituloProduccion.textContent;

	var encontrado = false;
	var producciones = video.productions;
	var produccion = producciones.next();
	while ((produccion.done !== true) && (!encontrado)){
		//Compara el titulo de la produccion del iterador con el titulo que hay en el h2 de la tarjeta
		if (produccion.value.title == tituloProduccion.textContent) {
			//Si la produccion es una movie tendra unos parametros distintos a las series
			if(produccion.value instanceof Movie){
				//Si es distinto de null pone el recurso de la produccion
				if(produccion.value.resource != null){
					
					var duration = document.createElement("p");
					duration.setAttribute("class","cajaTitulo");
					duration.appendChild(document.createTextNode("Duracion: "));
					var durationDescript = document.createElement("p");
					durationDescript.setAttribute("class","cajaDescripcion");
					durationDescript.appendChild(document.createTextNode(produccion.value.resource.duration+" minutos"));
					var audio = document.createElement("p");
					audio.setAttribute("class","cajaTitulo");
					audio.appendChild(document.createTextNode("Audio: "));
					var audioDescript = document.createElement("p");
					audioDescript.setAttribute("class","cajaDescripcion");
					audioDescript.appendChild(document.createTextNode(produccion.value.resource.audios));
					var subtitles = document.createElement("p");
					subtitles.setAttribute("class","cajaTitulo");
					subtitles.appendChild(document.createTextNode("Subtitulos: "));
					var subtitlesDescript = document.createElement("p");
					subtitlesDescript.setAttribute("class","cajaDescripcion");
					subtitlesDescript.appendChild(document.createTextNode(produccion.value.resource.subtitles));
					var link = document.createElement("p");
					link.setAttribute("class","cajaTitulo");
					link.appendChild(document.createTextNode("Enlaces: "));
					var linkDescript = document.createElement("p");
					linkDescript.setAttribute("class","cajaDescripcion");
					var linkHref = document.createElement("a");
					linkHref.setAttribute("href",produccion.value.resource.link);
					linkHref.appendChild(document.createTextNode(produccion.value.resource.link));
					linkDescript.appendChild(linkHref);
				}
				//Si es distinto de null pone la localizacion de la produccion
				if(produccion.value.locations != null){
					var locations = document.createElement("p");
					locations.setAttribute("class","cajaTitulo");
					locations.appendChild(document.createTextNode("Localizacion:"));
					var locationsDescript = document.createElement("p");
					locationsDescript.setAttribute("class","cajaDescripcion");
					locationsDescript.appendChild(document.createTextNode(produccion.value.locations));
				}
			}//Fin del if del instanceof

			//Pinta todo en la nueva ventana
			var tituloProdu = ventana.document.getElementById("tituloZona");
			tituloProdu.innerHTML = tituloProduccion.textContent;
			if(produccion.value.resource != null){
				contenidoVentana.appendChild(duration);
				contenidoVentana.appendChild(durationDescript);
				contenidoVentana.appendChild(audio);
				contenidoVentana.appendChild(audioDescript);
				contenidoVentana.appendChild(subtitles);
				contenidoVentana.appendChild(subtitlesDescript);
				contenidoVentana.appendChild(link);
				contenidoVentana.appendChild(linkDescript);
			}
			if(produccion.value.locations != null){
				contenidoVentana.appendChild(locations);
				contenidoVentana.appendChild(locationsDescript);
			}
			if(produccion.value.season != null){
				//Si tiene temporadas las muestra
				for (let index = 0; index < produccion.value.season.length; index++) {
					var season = document.createElement("p");
					season.setAttribute("class","cajaTitulo");
					season.appendChild(document.createTextNode("Temporada "+(index+1)+":"));
					var seasonDescrip = document.createElement("p");
					seasonDescrip.setAttribute("class","cajaDescripcion");
					seasonDescrip.appendChild(document.createTextNode(produccion.value.season[index].episodes));
					contenidoVentana.appendChild(season);
					contenidoVentana.appendChild(seasonDescrip);	
				}//Fin del for
			}//Fin del if de season	
		}//Fin del if
		//Pasa a la siguiente produccion
		produccion = producciones.next();
	}//Fin del while

}//Fin de showResource

//Funcion que llama a todas las funciones que necesita el sistema
function init(){
	initPopulate();
	showHomePage();
	categoriesMenuPopulate();
	//Esta funcion esta en el archivo formularios.js
	checkCookie();
}//Fin de init

window.onload = init;