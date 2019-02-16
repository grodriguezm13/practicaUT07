/* FUNCIONES AÑADIDAS EN LA PRACTICA 7 */
//Recoge los campos del formulario del boton de iniciar sesion y los compara
//con los del iterador de usuario, si coinciden crea la cookie
function validarUsuario(){
	//S recogen los valores del formulario
	var nombre = document.forms["inicioSesion"]["usuarioForm"].value;
	var pass = document.forms["inicioSesion"]["passForm"].value;
	var error = document.getElementById("usuarioForm").nextSibling.nextSibling;
	var menuExtra = document.getElementById("menuEdicion");
	var encontrado = false;

	//Si ha introducido algo en los campos
	if (nombre != "" && pass != "") {
		//Usa el iterador de usuario
		var usuarios = video.users;
		var usuario = usuarios.next();
		while ((usuario.done !== true) || !encontrado){
			if(usuario.value.userName == nombre.trim() && usuario.value.password == pass.trim()){
				setCookie("userMail", usuario.value.email, 1);
				encontrado = true;
			}
			usuario = usuarios.next();
		}//Fin del while iterador
	}else{
		encontrado = false;
	}
	if (encontrado) {
		menuExtra.style.display = "flex";
		error.style.display = "none";
		checkCookie();
	} else if(!encontrado){
		error.style.display = "inline";
		error.textContent = "EL usuario o contraseña son erroneos";
	}
}//Fin de validarUsuario

//Crea la cookie
function setCookie(clave, valor, diasexpiracion) {
	var d = new Date();
	d.setTime(d.getTime() + (diasexpiracion*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = clave + "=" + valor + "; " + expires + "; path=/;";
}//Fin de setCookie
	
//Recoge el valor de una cookie
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
}//Fin de getCookie
	
//Comprueba si hay cookies en el sistema para mostrar datos u ocultar
function checkCookie() {
	var btnCuenta = document.getElementById("btnCuenta");
	var formInicio = document.getElementById("formInicio");
	var menuExtra = document.getElementById("menuEdicion");
	var saludo = document.getElementById("saludo");
	var user = getCookie("userMail");

	if (user != "") {
		//Si ha iniciado sesion y existe la cookie
		saludo.style.display = "block";
		saludo.lastChild.textContent = "Bienvenido, " + user;
		btnCuenta.style.display = "block";
		formInicio.style.display = "none";
		menuExtra.style.display = "flex";
	} else {
		//Pone todo oculto y resetea los campos de inicio de sesion, por si se ha cerrado sesion
		saludo.style.display = "none";
		menuExtra.style.display = "none";
		btnCuenta.style.display = "none";
		formInicio.style.display = "block";
		document.forms["inicioSesion"]["usuarioForm"].value = "";
		document.forms["inicioSesion"]["passForm"].value = "";
	}
}//Fin de checkCookie

/* FUNCIONES PARA LAS VALIDACIONES DE CAMPOS */
//Funcion que se usa para los campos de textos que no pueden quedarse vacios
function validarCampoTexto(input){
	if(input.value == ""){
		input.setAttribute("class","form-control border border-danger");
		input.nextSibling.style.display = "block";
		return false;
	}else{
		input.setAttribute("class","form-control border border-success");
		input.nextSibling.style.display = "none";
		return true;
	}
}//FIn de validarCampoTexto

//Funcion que se usa para los campos de ruta 
function validarCampoRuta(input){
	var expresion = expresion = /^[a-z]\:\/\/([\d\w]+\.)$/i;
	if(expresion.test(input.value) || input.value == ""){
		input.setAttribute("class","form-control border border-success");
		input.nextSibling.style.display = "none";
		return true;
	}else{
		input.setAttribute("class","form-control border border-danger");
		input.nextSibling.style.display = "block";
		return false;
	}
}//FIn de validarCampoRuta

//Funcion que se usa para los campos de fecha
function validarCampoFecha(input){
	var expresion = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
	if(!expresion.test(input.value)){
		input.setAttribute("class","form-control border border-danger");
		input.nextSibling.style.display = "block";
		return false;
	}else{
		input.setAttribute("class","form-control border border-success");
		input.nextSibling.style.display = "none";
		return true;
	}
}//Fin de validarCampoFecha

/* FUNCIONES PARA LOS FORMULARIOS DE LAS CATEGORIAS */
//FALTA MODIFICAR
//Muestra el formulario de las categorias segun el tipo
function formCategorias(tipo){
	//Selecciona la zona debajo del menu horizontal de edicion y la oculta
	var contenidoCentral = document.getElementById("contenidoCentral");
	contenidoCentral.setAttribute("class","d-none");
	//Selecciona la zona para poner los formularios
	var contenidoFormularios = document.getElementById("contenidoFormularios");
	contenidoFormularios.setAttribute("class","d-block");
	//QUITA TODO EL CONTENIDO PREVIO POR SI HAY OTROS FORMULARIOS
	while (contenidoFormularios.firstChild) {
		contenidoFormularios.removeChild(contenidoFormularios.firstChild);
	}
		
	if (tipo == "add") {
		var formulario = document.createElement("form");
		formulario.setAttribute("name","addCategory");
		formulario.setAttribute("action","");
		formulario.setAttribute("onsubmit","validarCategorias(); return false");
		formulario.setAttribute("method","post");
		var leyenda = document.createElement("legend");
		leyenda.appendChild(document.createTextNode("Añadir categoria"));
		var grupo1 = document.createElement("div");
		grupo1.setAttribute("class","form-group");
		var label1 = document.createElement("label");
		label1.setAttribute("for","nombreCat");
		label1.appendChild(document.createTextNode("Nombre de la categoria"));
		var input1 = document.createElement("input");
		input1.setAttribute("type","text");
		input1.setAttribute("class","form-control");
		input1.setAttribute("id","nombreCat");
		input1.setAttribute("onblur","validarCampoTexto(this)");
		input1.setAttribute("placeholder","Nombre de la categoria");
		var mal1 = document.createElement("small");
		mal1.setAttribute("class","form-text text-muted");
		mal1.setAttribute("id","nombreMal");
		var grupo2 = document.createElement("div");
		grupo2.setAttribute("class","form-group");
		var label2 = document.createElement("label");
		label2.setAttribute("for","descripCat");
		label2.appendChild(document.createTextNode("Descripcion de la categoria"));
		var input2 = document.createElement("input");
		input2.setAttribute("type","text");
		input2.setAttribute("class","form-control");
		input2.setAttribute("id","descripCat");
		input2.setAttribute("onblur","validarCampoTexto(this)");
		input2.setAttribute("placeholder","Descripcion de la categoria");
		var mal2 = document.createElement("small");
		mal2.setAttribute("id","descMal");
		mal2.setAttribute("class","form-text text-muted");
		var grupoBtn = document.createElement("div");
		grupoBtn.setAttribute("class","form-group d-flex justify-content-around");
		var aceptar = document.createElement("button");
		aceptar.setAttribute("type","submit");
		aceptar.setAttribute("class","btn btn-primary ");
		aceptar.appendChild(document.createTextNode("Guardar"));
		var cancelar = document.createElement("button");
		cancelar.setAttribute("type","button");
		cancelar.setAttribute("class","btn btn-primary");
		cancelar.appendChild(document.createTextNode("Cancelar"));
			
		//Añade eventos al hacer click sobre los botones del formulario creado
		cancelar.addEventListener("click", showHomePage);
		cancelar.addEventListener("click", function(){
													contenidoCentral.setAttribute("class","d-block");
													contenidoFormularios.setAttribute("class","d-none");
													});
		//Crea el formulario
		grupo1.appendChild(label1);
		grupo1.appendChild(input1);
		grupo1.appendChild(mal1);
		grupo2.appendChild(label2);
		grupo2.appendChild(input2);
		grupo2.appendChild(mal2);
		grupoBtn.appendChild(aceptar);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(leyenda);
		formulario.appendChild(grupo1);
		formulario.appendChild(grupo2);
		formulario.appendChild(grupoBtn);
		contenidoFormularios.appendChild(formulario);
		/* FIN DEL FORMULARIO DE AÑADIR CATEGORIA */
	}else if (tipo == "delete") {
		var formulario = document.createElement("form");
		formulario.setAttribute("name","deleteCategory");
		formulario.setAttribute("action","");
		formulario.setAttribute("onsubmit","return false");
		formulario.setAttribute("method","post");
		var leyenda = document.createElement("legend");
		var grupo = document.createElement("div");
		grupo.setAttribute("class","form-group");
		leyenda.appendChild(document.createTextNode("Eliminar categoria"));
		var label = document.createElement("label");
		label.setAttribute("for","categoria");
		label.appendChild(document.createTextNode("Nombre de la categoria"));
		//SE CREA EL SELECT CON LAS CATEGORIAS
		var select = document.createElement("select");
		select.setAttribute("class","custom-select");
		select.setAttribute("name","categoria");
		select.setAttribute("id","categoria");
		var categorias = video.categories;
		var categoria = categorias.next();
		while (categoria.done !== true){
			var opcion = document.createElement("option");
			opcion.setAttribute("value",categoria.value.name);
			opcion.appendChild(document.createTextNode(categoria.value.name));
			select.appendChild(opcion);
			categoria = categorias.next();
		}
		var grupoBtn = document.createElement("div");
		grupoBtn.setAttribute("class","form-group d-flex justify-content-around");
		var eliminar = document.createElement("button");
		eliminar.setAttribute("type","button");
		eliminar.setAttribute("class","btn btn-primary ");
		eliminar.appendChild(document.createTextNode("Eliminar"));
		var cancelar = document.createElement("button");
		cancelar.setAttribute("type","button");
		cancelar.setAttribute("class","btn btn-primary");
		cancelar.appendChild(document.createTextNode("Cancelar"));
		//Añade eventos al hacer click sobre los botones del formulario creado
		eliminar.addEventListener("click", deleteCategory);
		cancelar.addEventListener("click", showHomePage);
		cancelar.addEventListener("click", function(){
													contenidoCentral.setAttribute("class","d-block");
													contenidoFormularios.setAttribute("class","d-none");
													});

		//se crea el formulario de borrado
		formulario.appendChild(leyenda);
		grupo.appendChild(label);
		grupo.appendChild(select);
		formulario.appendChild(grupo);
		grupoBtn.appendChild(eliminar);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(grupoBtn);
		contenidoFormularios.appendChild(formulario);
	}else if (tipo == "update") {
		//Llama a la funcion con el parametro add para que cargue los campos
		formCategorias('add');
		//Se cambia el titulo del legend del formulario antiguo
		document.getElementsByTagName("legend")[0].textContent = "Modificar categoria";
	

	}//Fin de los if
}//Fin de formCategorias

//Valida los campos al enviar el formulario de añadir categoria
function validarCategorias(){
	var name = document.forms["addCategory"]["nombreCat"];
	var description = document.forms["addCategory"]["descripCat"];
	var malNombre = document.getElementById("nombreMal");
	var malDesc = document.getElementById("descMal");
	var nombreValido = validarCampoTexto(name);
	var descripValida = validarCampoTexto(description);
	if(nombreValido == false){
		malNombre.innerHTML = "El nombre no puede estar vacio";
	}
	if(descripValida == false){
		malDesc.innerHTML = "La descripcion no puede estar vacia";	
	}
	if (nombreValido && descripValida) {
		addNewCategory(name.value,description.value);
	}
}//FIn de validarCategorias

//Añade al video system la categoria, si existe no deja añadir
function addNewCategory(name,description){
	try {
		var newCategory = new Category(name,description);
		video.addCategory(newCategory);
		//Selecciona la zona debajo del menu horizontal de edicion y la muestra
		var contenidoCentral = document.getElementById("contenidoCentral");
		contenidoCentral.setAttribute("class","d-block");
		//Selecciona la zona para poner los formularios
		var contenidoFormularios = document.getElementById("contenidoFormularios");
		contenidoFormularios.setAttribute("class","d-none");
		showHomePage();
		categoriesMenuPopulate();
	} catch (error) {
		document.getElementById("nombreMal").style.display = "block";
		document.getElementById("nombreMal").innerHTML = "La categoria con el nombre "+name+" ya existe";
		document.getElementById("nombreCat").setAttribute("class","form-control border border-danger");
	}	
}

//Elimina una categoria seleccionada
function deleteCategory(){
	var cat = document.forms["deleteCategory"]["categoria"].value;
	var eliminar = null;
	var encontrado = false;
	var categorias = video.categories;
	var categoria = categorias.next();
	while ((categoria.done !== true) && (!encontrado)){
		if (categoria.value.name == cat) {
			//Si la encuentra asigna el objeto con ese nombre a la variable eliminar
			eliminar = categoria.value;
			encontrado = true;
		}//Fin del if que compara el nombre de la categoria con el valor del select
    //Pasa a la siguiente categoria
		categoria = categorias.next();
	}//FIn del while iterador
	try {
		//Elimina el objeto que se ha encontrado
		video.removeCategory(eliminar);
		//Selecciona la zona debajo del menu horizontal de edicion y la muestra
		var contenidoCentral = document.getElementById("contenidoCentral");
		contenidoCentral.setAttribute("class","d-block");
		//Selecciona la zona para poner los formularios
		var contenidoFormularios = document.getElementById("contenidoFormularios");
		contenidoFormularios.setAttribute("class","d-none");
		showHomePage();
		categoriesMenuPopulate();
	} catch (error) {
		alert(eliminar);
	}
}//Fin de deleteCategory

/* FUNCIONES PARA LOS FORMULARIOS DE LOS ACTORES Y DIRECTORES */
//FALTA MODIFICAR
//Muestra el formulario de los actores segun el tipo
function formActoresDirectores(tipo,rol){
	//Selecciona la zona debajo del menu horizontal de edicion y la oculta
	var contenidoCentral = document.getElementById("contenidoCentral");
	contenidoCentral.setAttribute("class","d-none");
	//Selecciona la zona para poner los formularios
	var contenidoFormularios = document.getElementById("contenidoFormularios");
	contenidoFormularios.setAttribute("class","d-block");
	//QUITA TODO EL CONTENIDO PREVIO POR SI HAY OTROS FORMULARIOS
	while (contenidoFormularios.firstChild) {
		contenidoFormularios.removeChild(contenidoFormularios.firstChild);
	}
		
	if (tipo == "add") {
		var formulario = document.createElement("form");
		formulario.setAttribute("name","addActorDirector");
		formulario.setAttribute("action","");
		formulario.setAttribute("onsubmit","validarActoresDirectores('"+rol+"'); return false");
		formulario.setAttribute("method","post");
		var leyenda = document.createElement("legend");
		leyenda.appendChild(document.createTextNode("Añadir "+rol+""));
		//NOMBRE DEL ACTOR
		var grupo1 = document.createElement("div");
		grupo1.setAttribute("class","form-group");
		var labelName = document.createElement("label");
		labelName.setAttribute("for","nombreActor");
		labelName.appendChild(document.createTextNode("Nombre*"));
		var inputName = document.createElement("input");
		inputName.setAttribute("type","text");
		inputName.setAttribute("class","form-control");
		inputName.setAttribute("id","nombreActor");
		inputName.setAttribute("onblur","validarCampoTexto(this)");
		inputName.setAttribute("placeholder","Nombre");
		var malName = document.createElement("small");
		malName.setAttribute("class","form-text text-muted");
		malName.setAttribute("id","nombreMal");
		//APELLIDO1 DEL ACTOR
		var grupo2 = document.createElement("div");
		grupo2.setAttribute("class","form-group");
		var labelLastName1 = document.createElement("label");
		labelLastName1.setAttribute("for","lastName1");
		labelLastName1.appendChild(document.createTextNode("Primer apellido*"));
		var inputLastName1 = document.createElement("input");
		inputLastName1.setAttribute("type","text");
		inputLastName1.setAttribute("class","form-control");
		inputLastName1.setAttribute("id","lastName1");
		inputLastName1.setAttribute("onblur","validarCampoTexto(this)");
		inputLastName1.setAttribute("placeholder","Primer apellido");
		var malLastName1 = document.createElement("small");
		malLastName1.setAttribute("class","form-text text-muted");
		malLastName1.setAttribute("id","lastName1Mal");
		//APELLIDO2 DEL ACTOR
		var grupo3 = document.createElement("div");
		grupo3.setAttribute("class","form-group");
		var labelLastName2 = document.createElement("label");
		labelLastName2.setAttribute("for","lastName2");
		labelLastName2.appendChild(document.createTextNode("Segundo apellido"));
		var inputLastName2 = document.createElement("input");
		inputLastName2.setAttribute("type","text");
		inputLastName2.setAttribute("class","form-control");
		inputLastName2.setAttribute("id","lastName2");
		inputLastName2.setAttribute("onblur","validarCampoTexto(this)");
		inputLastName2.setAttribute("placeholder","Segundo apellido");
		var malLastName2 = document.createElement("small");
		malLastName2.setAttribute("class","form-text text-muted");
		malLastName2.setAttribute("id","lastName2Mal");
		//FECHA DE NACIMIENTO DEL ACTOR
		var grupo4 = document.createElement("div");
		grupo4.setAttribute("class","form-group");
		var labelBorn = document.createElement("label");
		labelBorn.setAttribute("for","born");
		labelBorn.appendChild(document.createTextNode("Fecha de nacimiento*"));
		var inputBorn = document.createElement("input");
		inputBorn.setAttribute("type","text");
		inputBorn.setAttribute("class","form-control");
		inputBorn.setAttribute("id","born");
		inputBorn.setAttribute("onblur","validarCampoFecha(this)");
		inputBorn.setAttribute("placeholder","MM/DD/AAAA");
		var malBorn = document.createElement("small");
		malBorn.setAttribute("class","form-text text-muted");
		malBorn.setAttribute("id","bornMal");
		//IMAGEN DEL ACTOR
		var grupo5 = document.createElement("div");
		grupo5.setAttribute("class","form-group");
		var labelPicture = document.createElement("label");
		labelPicture.setAttribute("for","picture");
		labelPicture.appendChild(document.createTextNode("Ruta de la imagen"));
		var inputPicture = document.createElement("input");
		inputPicture.setAttribute("type","text");
		inputPicture.setAttribute("class","form-control");
		inputPicture.setAttribute("id","picture");
		inputPicture.setAttribute("onblur","validarCampoRuta(this)");
		inputPicture.setAttribute("placeholder","X://xxxxxx/xxxx");
		var malPicture = document.createElement("small");
		malPicture.setAttribute("class","form-text text-muted");
		malPicture.setAttribute("id","pictureMal");
		//BOTONES DEL FORMULARIO
		var grupoBtn = document.createElement("div");
		grupoBtn.setAttribute("class","form-group d-flex justify-content-around");
		var aceptar = document.createElement("button");
		aceptar.setAttribute("type","submit");
		aceptar.setAttribute("class","btn btn-primary ");
		aceptar.appendChild(document.createTextNode("Guardar"));
		var cancelar = document.createElement("button");
		cancelar.setAttribute("type","button");
		cancelar.setAttribute("class","btn btn-primary");
		cancelar.appendChild(document.createTextNode("Cancelar"));
			
		//Añade eventos al hacer click sobre los botones del formulario creado
		cancelar.addEventListener("click", showHomePage);
		cancelar.addEventListener("click", function(){
													contenidoCentral.setAttribute("class","d-block");
													contenidoFormularios.setAttribute("class","d-none");
													});
		//Crea el formulario
		grupo1.appendChild(labelName);
		grupo1.appendChild(inputName);
		grupo1.appendChild(malName);
		grupo2.appendChild(labelLastName1);
		grupo2.appendChild(inputLastName1);
		grupo2.appendChild(malLastName1);
		grupo3.appendChild(labelLastName2);
		grupo3.appendChild(inputLastName2);
		grupo3.appendChild(malLastName2);
		grupo4.appendChild(labelBorn);
		grupo4.appendChild(inputBorn);
		grupo4.appendChild(malBorn);
		grupo5.appendChild(labelPicture);
		grupo5.appendChild(inputPicture);
		grupo5.appendChild(malPicture);
		grupoBtn.appendChild(aceptar);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(leyenda);
		formulario.appendChild(grupo1);
		formulario.appendChild(grupo2);
		formulario.appendChild(grupo3);
		formulario.appendChild(grupo4);
		formulario.appendChild(grupo5);
		formulario.appendChild(grupoBtn);
		contenidoFormularios.appendChild(formulario);
		/* FIN DEL FORMULARIO DE AÑADIR ACTOR/DIRECTOR */
	}else if (tipo == "delete") {
		var formulario = document.createElement("form");
		formulario.setAttribute("name","deleteActorDirector");
		formulario.setAttribute("action","");
		formulario.setAttribute("onsubmit","return false");
		formulario.setAttribute("method","post");
		var leyenda = document.createElement("legend");
		var grupo = document.createElement("div");
		grupo.setAttribute("class","form-group");
		leyenda.appendChild(document.createTextNode("Eliminar "+rol+""));
		var label = document.createElement("label");
		label.setAttribute("for","person");
		label.appendChild(document.createTextNode("Nombre del "+rol+""));
		//SE CREA EL SELECT CON LAS CATEGORIAS
		var select = document.createElement("select");
		select.setAttribute("class","custom-select");
		select.setAttribute("name","person");
		select.setAttribute("id","person");
		if (rol == "Actor") {
			var actores = video.actors;
			var actor = actores.next();
			while (actor.done !== true){
				var opcion = document.createElement("option");
				opcion.setAttribute("value",actor.value.name);
				opcion.appendChild(document.createTextNode(actor.value.name+" "+actor.value.lastName1+" "+actor.value.lastName2));
				select.appendChild(opcion);
				actor = actores.next();
			}
		}else if(rol == "Director"){
			var directores = video.directors;
			var director = directores.next();
			while (director.done !== true){
				var opcion = document.createElement("option");
				opcion.setAttribute("value",director.value.name);
				opcion.appendChild(document.createTextNode(director.value.name+" "+director.value.lastName1+" "+director.value.lastName2));
				select.appendChild(opcion);
				director = directores.next();
			}
		}
		var grupoBtn = document.createElement("div");
		grupoBtn.setAttribute("class","form-group d-flex justify-content-around");
		var eliminar = document.createElement("button");
		eliminar.setAttribute("type","button");
		eliminar.setAttribute("class","btn btn-primary ");
		eliminar.appendChild(document.createTextNode("Eliminar"));
		var cancelar = document.createElement("button");
		cancelar.setAttribute("type","button");
		cancelar.setAttribute("class","btn btn-primary");
		cancelar.appendChild(document.createTextNode("Cancelar"));
		//Añade eventos al hacer click sobre los botones del formulario creado
		if (rol == "Actor") {
			eliminar.addEventListener("click", deleteActor);
		}else if (rol == "Director") {
			eliminar.addEventListener("click", deleteDirector);
		}
		cancelar.addEventListener("click", showHomePage);
		cancelar.addEventListener("click", function(){
													contenidoCentral.setAttribute("class","d-block");
													contenidoFormularios.setAttribute("class","d-none");
													});

		//se crea el formulario de borrado
		formulario.appendChild(leyenda);
		grupo.appendChild(label);
		grupo.appendChild(select);
		formulario.appendChild(grupo);
		grupoBtn.appendChild(eliminar);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(grupoBtn);
		contenidoFormularios.appendChild(formulario);
		/* FIN DEL FORMULARIO DE ELIMINAR ACTOR/DIRECTOR */
	}else if (tipo == "update") {
		
	

	}//Fin de los if
}//Fin de formActores

//Valida los campos al enviar el formulario de añadir categoria
function validarActoresDirectores(rol){
	var name = document.forms["addActorDirector"]["nombreActor"];
	var malNombre = document.getElementById("nombreMal");
	var lastName1 = document.forms["addActorDirector"]["lastName1"];
	var malLastName1 = document.getElementById("lastName1Mal");
	var lastName2 = document.forms["addActorDirector"]["lastName2"];
	var born = document.forms["addActorDirector"]["born"];
	var malBorn = document.getElementById("bornMal");
	var picture = document.forms["addActorDirector"]["picture"];
	var malPicture = document.getElementById("pictureMal");
	//Llama a las funciones de validar
	var nombreValido = validarCampoTexto(name);
	var lastName1Valido = validarCampoTexto(lastName1);
	var bornValido = validarCampoFecha(born);
	var pictureValido = validarCampoRuta(picture); 
	if(nombreValido == false){
		malNombre.innerHTML = "El nombre no puede estar vacio";
	}
	if(lastName1Valido == false){
		malLastName1.innerHTML = "El primer apellido no puede estar vacio";	
	}
	if(bornValido == false){
		malBorn.innerHTML = "La fecha esta mal introducida";	
	}
	if(pictureValido == false){
		malPicture.innerHTML = "La ruta de la imagen esta mal introducida";	
	}
	if (nombreValido && lastName1Valido && bornValido && pictureValido) {
		var apellido2 = null;
		var imagen = null;
		if (lastName2.value != "") {
			apellido2 = lastName2.value;
		}
		if (picture.value != "") {
			imagen = picture.value;
		}
		var fecha = new Date(""+born.value+"");
		if (rol == "Actor") {
			addNewActor(name.value, lastName1.value, fecha, apellido2, imagen);
		}else if(rol == "Director"){
			addNewDirector(name.value, lastName1.value, fecha, apellido2, imagen);
		}
	}//Fin del if
}//FIn de validarActores

//Añade al video system la persona nueva y la añade como actor, si existe no deja añadir
function addNewActor(name, lastName1, born, lastName2, picture){
	try {
		var newPerson = new Person(name, lastName1, born, lastName2, picture);
		video.addActor(newPerson);
		//Selecciona la zona debajo del menu horizontal de edicion y la muestra
		var contenidoCentral = document.getElementById("contenidoCentral");
		contenidoCentral.setAttribute("class","d-block");
		//Selecciona la zona para poner los formularios
		var contenidoFormularios = document.getElementById("contenidoFormularios");
		contenidoFormularios.setAttribute("class","d-none");
		showHomePage();
		categoriesMenuPopulate();
	} catch (error) {
		document.getElementById("nombreMal").innerHTML = "El actor "+name+" "+lastName1+" ya existe";
		document.getElementById("nombreMal").style.display = "block";
		document.getElementById("nombreActor").setAttribute("class","form-control border border-danger");
		document.getElementById("lastName1Mal").innerHTML = "El actor "+name+" "+lastName1+" ya existe";
		document.getElementById("lastName1Mal").style.display = "block";
		document.getElementById("lastName1").setAttribute("class","form-control border border-danger");
	}	
}//Fin de addNewActor

//Elimina un actor seleccionado
function deleteActor(){
	var cat = document.forms["deleteActorDirector"]["person"].value;
	var eliminar = null;
	var encontrado = false;
	var actores = video.actors;
	var actor = actores.next();
	while ((actor.done !== true) && (!encontrado)){
		if (actor.value.name == cat) {
			//Si la encuentra asigna el objeto con ese nombre a la variable eliminar
			eliminar = actor.value;
			encontrado = true;
		}//Fin del if que compara el nombre de la categoria con el valor del select
		actor = actores.next();
	}
	try {
		//Elimina el objeto que se ha encontrado
		video.removeActor(eliminar);
		//Selecciona la zona debajo del menu horizontal de edicion y la muestra
		var contenidoCentral = document.getElementById("contenidoCentral");
		contenidoCentral.setAttribute("class","d-block");
		//Selecciona la zona para poner los formularios
		var contenidoFormularios = document.getElementById("contenidoFormularios");
		contenidoFormularios.setAttribute("class","d-none");
		showHomePage();
		categoriesMenuPopulate();
	} catch (error) {
		
	}
}//Fin de deleteActor

//Añade al video system la persona nueva y la añade como director, si existe no deja añadir
function addNewDirector(name, lastName1, born, lastName2, picture){
	try {
		var newPerson = new Person(name, lastName1, born, lastName2, picture);
		video.addDirector(newPerson);
		//Selecciona la zona debajo del menu horizontal de edicion y la muestra
		var contenidoCentral = document.getElementById("contenidoCentral");
		contenidoCentral.setAttribute("class","d-block");
		//Selecciona la zona para poner los formularios
		var contenidoFormularios = document.getElementById("contenidoFormularios");
		contenidoFormularios.setAttribute("class","d-none");
		showHomePage();
		categoriesMenuPopulate();
	} catch (error) {
		document.getElementById("nombreMal").innerHTML = "El director "+name+" "+lastName1+" ya existe";
		document.getElementById("nombreMal").style.display = "block";
		document.getElementById("nombreActor").setAttribute("class","form-control border border-danger");
		document.getElementById("lastName1Mal").innerHTML = "El director "+name+" "+lastName1+" ya existe";
		document.getElementById("lastName1Mal").style.display = "block";
		document.getElementById("lastName1").setAttribute("class","form-control border border-danger");
	}	
}//Fin de addNewDirector

//Elimina un director seleccionado
function deleteDirector(){
	var cat = document.forms["deleteActorDirector"]["person"].value;
	var eliminar = null;
	var encontrado = false;
	var directores = video.directors;
	var director = directores.next();
	while ((director.done !== true) && (!encontrado)){
		if (director.value.name == cat) {
			//Si lo encuentra asigna el objeto con ese nombre a la variable eliminar
			eliminar = director.value;
			encontrado = true;
		}//Fin del if que compara el nombre del director con el valor del select
		director = directores.next();
	}
	try {
		//Elimina el objeto que se ha encontrado
		video.removeDirector(eliminar);
		//Selecciona la zona debajo del menu horizontal de edicion y la muestra
		var contenidoCentral = document.getElementById("contenidoCentral");
		contenidoCentral.setAttribute("class","d-block");
		//Selecciona la zona para poner los formularios
		var contenidoFormularios = document.getElementById("contenidoFormularios");
		contenidoFormularios.setAttribute("class","d-none");
		showHomePage();
		categoriesMenuPopulate();
	} catch (error) {
		
	}
}//Fin de deleteDirector


