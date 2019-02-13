/* FUNCIONES AÑADIDAS EN LA PRACTICA 7 */
//Recoge los campos del formulario del boton de iniciar sesion y los compara
//con los del iterador de usuario, si coinciden crea la cookie
function validarUsuario(){
	//S recogen los valores del formulario
	var nombre = document.forms["inicioSesion"]["usuarioForm"].value;
	var pass = document.forms["inicioSesion"]["passForm"].value;
	var encontrado = false;
	//Usa el iterador de usuario
	var usuarios = video.users;
	var usuario = usuarios.next();
	while ((usuario.done !== true) || !encontrado){
		if(usuario.value.userName == nombre.trim() && usuario.value.password == pass.trim()){
			setCookie("userMail", usuario.value.email, 1);
			encontrado = true;
		}
		usuario = usuarios.next();
	}
	if (encontrado) {
		console.log("si");
		
	}else{
		console.log("no");
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
	var btnInicio = document.getElementById("btnInicio");
	var menuExtra = document.getElementById("menuEdicion");
	var saludo = document.getElementById("saludo");
	var user = getCookie("userMail");

	if (user != "") {
		//Si ha iniciado sesion y existe la cookie
		saludo.innerText = user;
		btnCuenta.style.display = "block";
		btnInicio.style.display = "none";
	} else {
		//Si no existe la cookie
		menuExtra.style.display = "none";
		btnCuenta.style.display = "none";
		btnInicio.style.display = "block";
	}
}//Fin de checkCookie

/* FUNCIONES PARA LAS VALIDACIONES DE CAMPOS */
//Funcion que se usa para los campos de textos que no pueden quedarse vacios
function validarCampoTexto(input){
	if(input.value == ""){
		input.setAttribute("class","form-control border border-danger");
	}else{
		input.setAttribute("class","form-control border border-success");
	}
}//FIn de validarCampoTexto

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
	var name = document.forms["addCategory"]["nombreCat"].value;
	var description = document.forms["addCategory"]["descripCat"].value;
	var malNombre = document.getElementById("nombreMal");
	var malDesc = document.getElementById("descMal");
	var nombreValido = false;
	var descripValida = false;
	if(name == ""){
		malNombre.innerHTML = "El nombre no puede estar vacio";
		document.getElementById("nombreCat").setAttribute("class","form-control border border-danger");
		nombreValido = false;
	}else{
		nombreValido = true;
	}
	if(description == ""){
		malDesc.innerHTML = "La descripcion no puede estar vacia";
		document.getElementById("descripCat").setAttribute("class","form-control border border-danger");
		descripValida = false;
	}else{
		descripValida = true;
	}
	if (nombreValido && descripValida) {
		addNewCategory(name,description);
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



function iterador(){
	console.log("-----------------------------------------------");
	//Mostramos las categorias que hay
	console.log("#### Mostramos las categorias ####");
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		console.log ("" + categoria.value);
		categoria = categorias.next();
	}
	console.log("-----------------------------------------------");
}