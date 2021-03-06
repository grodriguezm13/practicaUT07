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
		while ((usuario.done !== true) && !encontrado){
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
	var expresion = /^[a-z]\:\/\/(([a-z0-9]+)\/)+([a-z0-9]+)([a-z0-9_\.]+)*(\.[a-z]{1,4})/i;
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

//Funcion que se usa para los campos de ruta obligatorios
function validarCampoRutaObligatorio(input){
	var expresion = /^[a-z]\:\/\/(([a-z0-9]+)\/)+([a-z0-9]+)([a-z0-9_\.]+)*(\.[a-z]{1,4})/i;
	if(expresion.test(input.value)){
		input.setAttribute("class","form-control border border-success");
		input.nextSibling.style.display = "none";
		return true;
	}else{
		input.setAttribute("class","form-control border border-danger");
		input.nextSibling.style.display = "block";
		return false;
	}
}//FIn de validarCampoRuta

//Funcion que se usa para los campos de URL
function validarCampoURL(input){
	var expresion = /^(http|ftp)\:\/\/([\d\w]+\.)?[\d\w]+\.(com|net|es)(\:(\d){1,4})?$/i;
	if(expresion.test(input.value)){
		input.setAttribute("class","form-control border border-success");
		input.nextSibling.style.display = "none";
		return true;
	}else{
		input.setAttribute("class","form-control border border-danger");
		input.nextSibling.style.display = "block";
		return false;
	}
}//FIn de validarCampoRuta

//Funcion que se usa para los campos de numero
function validarCampoNumero(input){
	var expresion = /^[+-]?\d+$/;
	if(expresion.test(input.value)){
		input.setAttribute("class","form-control border border-success");
		input.nextSibling.style.display = "none";
		return true;
	}else{
		input.setAttribute("class","form-control border border-danger");
		input.nextSibling.style.display = "block";
		return false;
	}
}//FIn de validarCampoNumero

//Funcion que se usa para los campos de numeros opcionales 
function validarCampoNumeroOpcional(input){
	var expresion = /^[+-]?\d+$/;
	if(expresion.test(input.value) || input.value == ""){
		input.setAttribute("class","form-control border border-success");
		input.nextSibling.style.display = "none";
		return true;
	}else{
		input.setAttribute("class","form-control border border-danger");
		input.nextSibling.style.display = "block";
		return false;
	}
}//FIn de validarCampoNumeroOpcional

//Funcion que se usa para los campos array
function validarCampoArray(input){
	var expresion = /^[A-z]*,*[A-z].*$/;
	//Puede quedarse vacio por que es un parametro opcional
	if(expresion.test(input.value) || input.value == ""){
		//Separa los campos por , y crea el array
		var array = input.value.split(',');
		input.setAttribute("class","form-control border border-success");
		input.nextSibling.style.display = "none";
		return array;
	}else{
		input.setAttribute("class","form-control border border-danger");
		input.nextSibling.style.display = "block";
		return null;
	}
}//FIn de validarCampoRuta

//Funcion que se usa para los campos de fecha
function validarCampoFecha(input){
	var expresion = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
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

//Comprueba que el valor del select no sea 0
function validarCampoSelect(input){
	if(input.value == "0"){
		input.setAttribute("class","form-control border border-danger");
		return false;
	}else{
		input.setAttribute("class","form-control border border-success");
		return true;
	}
}//Fin del validarCampoSelect

/* FUNCIONES PARA LOS FORMULARIOS DE LAS CATEGORIAS */
//FALTA MODIFICAR
//Array que recoge las producciones para asignarlas a las nueva categoria
var arrayProducciones = new Array();
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
		//SE CREA EL BUSCADOR 
		var grupo3 = document.createElement("div");
		grupo3.setAttribute("class","form-group");
		var label3 = document.createElement("label");
		label3.setAttribute("for","produccionesCat");
		label3.appendChild(document.createTextNode("Asignar producciones a la nueva categoria"));
		var divInputBtn = document.createElement("div");
		divInputBtn.setAttribute("class","input-group");
		var divBtn = document.createElement("div");
		divBtn.setAttribute("class","input-group-prepend");
		var botonRemover = document.createElement("button");
		botonRemover.setAttribute("type","button");
		botonRemover.setAttribute("class","btn btn-sm btn-outline-secondary");
		botonRemover.appendChild(document.createTextNode("Remover"));
		//añade el evento al hacer click al boton de remover
		botonRemover.addEventListener("click",function(){
			var input = document.forms["addCategory"]["producciones"];
				//Quita el ultimo elemento del array
				arrayProducciones.pop();
				input.value = arrayProducciones.toString();

		});
		var produc = document.createElement("input");
		produc.setAttribute("class","form-control ");
		produc.setAttribute("type","text");
		produc.setAttribute("id","producciones");
		produc.readOnly = true;
		var malProduc = document.createElement("small");
		malProduc.setAttribute("class","form-text text-muted");
		malProduc.setAttribute("id","producMal");
		var buscador = document.createElement("input");
		buscador.setAttribute("class","form-control my-3");
		buscador.setAttribute("type","text");
		buscador.setAttribute("id","buscador");
		buscador.setAttribute("placeholder","Buscar...");
		//SE CREA LA TABLA DE LAS PRODUCCIONES
		var tabla = document.createElement("table");
		tabla.setAttribute("class","table table-bordered");
		tabla.setAttribute("name","produccion");
		tabla.setAttribute("id","produccion");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		var thVacio = document.createElement("th");
		var ocultar = document.createElement("button");
		ocultar.setAttribute("type","button");
		ocultar.setAttribute("class","btn btn-secondary");
		ocultar.appendChild(document.createTextNode("Mostrar/Ocultar"));
		ocultar.addEventListener("click", function(){
			var cont = document.getElementById("tablaProducciones");
			if(cont.style.display=="table-row-group"){
				cont.style.display = "none";
			}else{
				cont.style.display = "table-row-group";
			}
		});
		thVacio.appendChild(ocultar);
		var thNombre = document.createElement("th");
		thNombre.appendChild(document.createTextNode("Nombre"));
		var thDesc = document.createElement("th");
		thDesc.appendChild(document.createTextNode("Tipo"));
		var tbody = document.createElement("tbody");
		tbody.setAttribute("id","tablaProducciones");
		var producciones = video.productions;
		var produccion = producciones.next();
		while (produccion.done !== true){
			var trPro = document.createElement("tr");
			var tdAdd = document.createElement("td");
			var add = document.createElement("button");
			add.setAttribute("type","button");
			add.setAttribute("class","btn btn-danger");
			add.setAttribute("value",produccion.value.title);
			add.appendChild(document.createTextNode("Añadir"));
			var tdTitulo = document.createElement("td");
			tdTitulo.appendChild(document.createTextNode(produccion.value.title));
			var tdTipo = document.createElement("td");
			var nomTipo = "";
			if (produccion.value instanceof Movie) {
				nomTipo = "Pelicula";
			}else{
				nomTipo = "Serie";
			}
			tdTipo.appendChild(document.createTextNode(nomTipo));
			tdAdd.appendChild(add);
			trPro.appendChild(tdAdd);
			trPro.appendChild(tdTitulo);
			trPro.appendChild(tdTipo);
			tbody.appendChild(trPro);
			//Añade una funcion a cada boton de añadir
			add.addEventListener("click", function(){
				var input = document.forms["addCategory"]["producciones"];
				//Añade al array el nomnbre de boton
				arrayProducciones.push(this.value);
				input.value = arrayProducciones.toString();
			});
			produccion = producciones.next();
		}//Fin del while
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
		$(document).ready(function(){
			$("#buscador").on("keyup", function() {
			  var value = $(this).val().toLowerCase();
			  $("#tablaProducciones tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			  });
			});
		});

		cancelar.addEventListener("click", showHomePage);
		cancelar.addEventListener("click", function(){
													contenidoCentral.setAttribute("class","d-block");
													contenidoFormularios.setAttribute("class","d-none");
													//Se limpia el array
													while(arrayProducciones.length != 0){
														arrayProducciones.shift();
													}
													});
		//Crea el formulario
		grupo1.appendChild(label1);
		grupo1.appendChild(input1);
		grupo1.appendChild(mal1);
		grupo2.appendChild(label2);
		grupo2.appendChild(input2);
		grupo2.appendChild(mal2);
		grupo3.appendChild(label3);
		divInputBtn.appendChild(divBtn);
		divBtn.appendChild(botonRemover);
		divInputBtn.appendChild(produc);
		grupo3.appendChild(divInputBtn);
		grupo3.appendChild(malProduc);
		grupo3.appendChild(buscador);
		grupo3.appendChild(tabla);
		tabla.appendChild(thead);
		tabla.appendChild(tbody);
		thead.appendChild(tr);
		tr.appendChild(thVacio);
		tr.appendChild(thNombre);
		tr.appendChild(thDesc);
		grupoBtn.appendChild(aceptar);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(leyenda);
		formulario.appendChild(grupo1);
		formulario.appendChild(grupo2);
		formulario.appendChild(grupo3);
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
		//SE CREA EL BUSCADOR 
		var buscador = document.createElement("input");
		buscador.setAttribute("class","form-control mb-3");
		buscador.setAttribute("type","text");
		buscador.setAttribute("id","buscador");
		buscador.setAttribute("placeholder","Buscar...");
		//SE CREA LA TABLA DE LAS CATEGORIAS
		var tabla = document.createElement("table");
		tabla.setAttribute("class","table table-bordered");
		tabla.setAttribute("name","categoria");
		tabla.setAttribute("id","categoria");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		var thVacio = document.createElement("th");
		var ocultar = document.createElement("button");
		ocultar.setAttribute("type","button");
		ocultar.setAttribute("class","btn btn-secondary");
		ocultar.appendChild(document.createTextNode("Mostrar/Ocultar"));
		ocultar.addEventListener("click", function(){
			var cont = document.getElementById("tablaCategorias");
			if(cont.style.display=="table-row-group"){
				cont.style.display = "none";
			}else{
				cont.style.display = "table-row-group";
			}
		});
		thVacio.appendChild(ocultar);
		var thNombre = document.createElement("th");
		thNombre.appendChild(document.createTextNode("Nombre"));
		var thDesc = document.createElement("th");
		thDesc.appendChild(document.createTextNode("Descripcion"));
		var tbody = document.createElement("tbody");
		tbody.setAttribute("id","tablaCategorias");
		var categorias = video.categories;
		var categoria = categorias.next();
		while (categoria.done !== true){
			var trCat = document.createElement("tr");
			var tdEliminar = document.createElement("td");
			var eliminar = document.createElement("button");
			eliminar.setAttribute("type","button");
			eliminar.setAttribute("class","btn btn-danger");
			eliminar.setAttribute("value",categoria.value.name);
			eliminar.appendChild(document.createTextNode("Eliminar"));
			eliminar.addEventListener("click", deleteCategory);
			var tdCat = document.createElement("td");
			tdCat.appendChild(document.createTextNode(categoria.value.name));
			var tdDesc = document.createElement("td");
			tdDesc.appendChild(document.createTextNode(categoria.value.description));
			tdEliminar.appendChild(eliminar);
			trCat.appendChild(tdEliminar);
			trCat.appendChild(tdCat);
			trCat.appendChild(tdDesc);
			tbody.appendChild(trCat);
			categoria = categorias.next();
		}
		var grupoBtn = document.createElement("div");
		grupoBtn.setAttribute("class","form-group d-flex justify-content-around");
		var cancelar = document.createElement("button");
		cancelar.setAttribute("type","button");
		cancelar.setAttribute("class","btn btn-primary");
		cancelar.appendChild(document.createTextNode("Cancelar"));
		//Añade eventos al hacer click sobre los botones del formulario creado y el buscador
		$(document).ready(function(){
			$("#buscador").on("keyup", function() {
			  var value = $(this).val().toLowerCase();
			  $("#tablaCategorias tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			  });
			});
		});
		cancelar.addEventListener("click", showHomePage);
		cancelar.addEventListener("click", function(){
													contenidoCentral.setAttribute("class","d-block");
													contenidoFormularios.setAttribute("class","d-none");
													});

		//se crea el formulario de borrado
		formulario.appendChild(leyenda);
		grupo.appendChild(buscador);
		grupo.appendChild(tabla);
		formulario.appendChild(grupo);
		tabla.appendChild(thead);
		tabla.appendChild(tbody);
		thead.appendChild(tr);
		tr.appendChild(thVacio);
		tr.appendChild(thNombre);
		tr.appendChild(thDesc);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(grupoBtn);
		contenidoFormularios.appendChild(formulario);
	}else if (tipo == "update") {
		var formulario = document.createElement("form");
		formulario.setAttribute("name","modCategory");
		formulario.setAttribute("action","");
		formulario.setAttribute("onsubmit","return false");
		formulario.setAttribute("method","post");
		var leyenda = document.createElement("legend");
		leyenda.appendChild(document.createTextNode("Modificar categoria"));
		//SE CREA EL BUSCADOR 
		var divModificar = document.createElement("div");
		divModificar.setAttribute("id","divModificar");
		var grupo1 = document.createElement("div");
		grupo1.setAttribute("class","form-group mt-3");
		var label1 = document.createElement("label");
		label1.setAttribute("for","produccionesCat");
		label1.appendChild(document.createTextNode("Selecciona una categoria"));
		var divInputBtn = document.createElement("div");
		divInputBtn.setAttribute("class","input-group");
		var divBtn = document.createElement("div");
		divBtn.setAttribute("class","input-group-prepend");
		var botonRemover = document.createElement("button");
		botonRemover.setAttribute("type","button");
		botonRemover.setAttribute("class","btn btn-sm btn-outline-secondary");
		botonRemover.appendChild(document.createTextNode("Remover"));
		//añade el evento al hacer click al boton de remover
		botonRemover.addEventListener("click",function(){
			var input = document.forms["modCategory"]["categoria"];
				input.value = "";
				//muestra la tabla
				document.getElementById("divTabla").style.display = "block";
				//oculta los campos de la categoria para modificar
				divModificar.removeChild(divModificar.firstChild);
		});
		var inputCat = document.createElement("input");
		inputCat.setAttribute("class","form-control ");
		inputCat.setAttribute("type","text");
		inputCat.setAttribute("id","categoria");
		inputCat.readOnly = true;
		var divTabla = document.createElement("div");
		divTabla.setAttribute("id","divTabla");
		var buscador = document.createElement("input");
		buscador.setAttribute("class","form-control my-3");
		buscador.setAttribute("type","text");
		buscador.setAttribute("id","buscador");
		buscador.setAttribute("placeholder","Buscar...");
		//SE CREA LA TABLA DE LAS CATEGORIAS
		var tabla = document.createElement("table");
		tabla.setAttribute("class","table table-bordered");
		tabla.setAttribute("name","tablaCategorias");
		tabla.setAttribute("id","tablaCategorias");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		var thVacio = document.createElement("th");
		var ocultar = document.createElement("button");
		ocultar.setAttribute("type","button");
		ocultar.setAttribute("class","btn btn-secondary");
		ocultar.appendChild(document.createTextNode("Mostrar/Ocultar"));
		ocultar.addEventListener("click", function(){
			var cont = document.getElementById("tablaBody");
			if(cont.style.display=="table-row-group"){
				cont.style.display = "none";
			}else{
				cont.style.display = "table-row-group";
			}
		});
		thVacio.appendChild(ocultar);
		var thNombre = document.createElement("th");
		thNombre.appendChild(document.createTextNode("Nombre completo"));
		var tbody = document.createElement("tbody");
		tbody.setAttribute("id","tablaBody");
		var categorias = video.categories;
		var categoria = categorias.next();
		while (categoria.done !== true){
			var trCat = document.createElement("tr");
			var tdAdd = document.createElement("td");
			var add = document.createElement("button");
			add.setAttribute("type","button");
			add.setAttribute("class","btn btn-danger");
			add.setAttribute("value",categoria.value.name);
			add.appendChild(document.createTextNode("Modificar"));
			var tdNombre = document.createElement("td");
			tdNombre.appendChild(document.createTextNode(categoria.value.name));
			tdNombre.setAttribute("class","col-8");
			tdAdd.appendChild(add);
			trCat.appendChild(tdAdd);
			trCat.appendChild(tdNombre);
			tbody.appendChild(trCat);
			//Añade una funcion a cada boton de añadir
			add.addEventListener("click", function(){
				var input = document.forms["modCategory"]["categoria"];
				input.value = this.value;
				//oculta la tabla
				document.getElementById("divTabla").style.display = "none";
				//muestra los campos de la categoria para modificar
				modifyCategory(this.value);
			});
			categoria = categorias.next();
		}//Fin del while
		//Añade los eventos de la tabla
		$(document).ready(function(){
			$("#buscador").on("keyup", function() {
			  var value = $(this).val().toLowerCase();
			  $("#tablaCategorias tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			  });
			});
		});
		grupo1.appendChild(label1);
		divInputBtn.appendChild(divBtn);
		divBtn.appendChild(botonRemover);
		divInputBtn.appendChild(inputCat);
		grupo1.appendChild(divInputBtn);
		divTabla.appendChild(buscador);
		divTabla.appendChild(tabla);
		grupo1.appendChild(divTabla);
		tabla.appendChild(thead);
		tabla.appendChild(tbody);
		thead.appendChild(tr);
		tr.appendChild(thVacio);
		tr.appendChild(thNombre);
		formulario.appendChild(grupo1);
		formulario.appendChild(divModificar);
		contenidoFormularios.appendChild(formulario);
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
		//Añade la categoria al sistema
		var newCategory = new Category(name,description);
		video.addCategory(newCategory);
		//Si hay producciones en el array de producciones las asigna a esa categoria
		if (arrayProducciones.length != 0) {
			for (let index = 0; index < arrayProducciones.length; index++) {
				//recorrremos las producciones
				var encontrado = false;
				var producciones = video.productions;
				var produccion = producciones.next();
				while ((produccion.done !== true) && (!encontrado)){
					if (arrayProducciones[index] == produccion.value.title) {
						try {
							video.assignCategory(newCategory,produccion.value);
							encontrado = true;
						} catch (error) {
							document.getElementById("producMal").style.display = "block";
							document.getElementById("producMal").innerHTML = "No puedes añadir dos veces la produccion "+produccion.value.title+"";
						}//Fin del try
					}//Fin del if
					produccion = producciones.next();
				}//Fin del while
			}//Fin del for
		}//Fin del if
		//Se limpia el array
		while(arrayProducciones.length != 0){
			arrayProducciones.shift();
		}
		//Selecciona la zona debajo del menu horizontal de edicion y la muestra
		var contenidoCentral = document.getElementById("contenidoCentral");
		contenidoCentral.setAttribute("class","d-block");
		//Selecciona la zona para poner los formularios
		var contenidoFormularios = document.getElementById("contenidoFormularios");
		contenidoFormularios.setAttribute("class","d-none");
		categoriesMenuPopulate();
		showHomePage();
	} catch (error) {
		document.getElementById("nombreMal").style.display = "block";
		document.getElementById("nombreMal").innerHTML = "La categoria con el nombre "+name+" ya existe";
		document.getElementById("nombreCat").setAttribute("class","form-control border border-danger");
	}	
}//Fin de addNewCategory

//Elimina una categoria seleccionada
function deleteCategory(){
	//Recoge el valor del boton pulsado
	var btnValor = this.value;
	var eliminar = null;
	var encontrado = false;
	var categorias = video.categories;
	var categoria = categorias.next();
	while ((categoria.done !== true) && (!encontrado)){
		if (categoria.value.name == btnValor) {
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
		categoriesMenuPopulate();
		showHomePage();
	} catch (error) {
		alert(eliminar+" "+ button);
	}
}//Fin de deleteCategory

//Añade campos al formulario con los datos de la categoria
function modifyCategory(cat){
	var encontrado = false;
	//Variable para guardar el objeto categoria
	var objetoCategoria = null;
	var categorias = video.categories;
	var categoria = categorias.next();
	while ((categoria.done !== true) && (!encontrado)){
		if (categoria.value.name == cat) {
			objetoCategoria = categoria.value;
			encontrado = true;
		}
		categoria = categorias.next();
	}//Fin del while
	//Div en el que se va a añadir la estructura
	var divModificar = document.getElementById("divModificar");
	var divInputBtn = document.createElement("div");
	divInputBtn.setAttribute("id","camposModificar");
	var grupo1 = document.createElement("div");
	grupo1.setAttribute("class","form-group");
	var label1 = document.createElement("label");
	label1.setAttribute("for","nombreCat2");
	label1.appendChild(document.createTextNode("Nuevo nombre para la categoria"));
	var input1 = document.createElement("input");
	input1.setAttribute("type","text");
	input1.setAttribute("class","form-control");
	input1.setAttribute("id","nombreCat2");
	input1.setAttribute("onblur","validarCampoTexto(this)");
	input1.setAttribute("value",objetoCategoria.name);
	var mal1 = document.createElement("small");
	mal1.setAttribute("class","form-text text-muted");
	mal1.setAttribute("id","nombreMal");
	var grupo2 = document.createElement("div");
	grupo2.setAttribute("class","form-group");
	var label2 = document.createElement("label");
	label2.setAttribute("for","descripCat2");
	label2.appendChild(document.createTextNode("Nueva descripcion para la categoria"));
	var input2 = document.createElement("input");
	input2.setAttribute("type","text");
	input2.setAttribute("class","form-control");
	input2.setAttribute("id","descripCat2");
	input2.setAttribute("onblur","validarCampoTexto(this)");
	input2.setAttribute("value",objetoCategoria.description);
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
	//Se añaden los eventos de los botones
	aceptar.addEventListener("click", function(){
												return validarModificacionCategoria(objetoCategoria);
											});
	cancelar.addEventListener("click", showHomePage);
	cancelar.addEventListener("click", function(){
												contenidoCentral.setAttribute("class","d-block");
												contenidoFormularios.setAttribute("class","d-none");
											});
	//Se añade todo al formulario
	grupo1.appendChild(label1);
	grupo1.appendChild(input1);
	grupo1.appendChild(mal1);
	divInputBtn.appendChild(grupo1);
	grupo2.appendChild(label2);
	grupo2.appendChild(input2);
	grupo2.appendChild(mal2);
	divInputBtn.appendChild(grupo2);
	grupoBtn.appendChild(aceptar);
	grupoBtn.appendChild(cancelar);
	divInputBtn.appendChild(grupoBtn);
	//Se añade todo al divMOdificrr del formulario de cat3egorias
	divModificar.appendChild(divInputBtn);
}//Fin de addReparto

//Valida los campos del formulario de modifiacion
function validarModificacionCategoria(objetoCategoria){
	//Se usan los setter para modificar los valores
	var nombre = document.forms['modCategory']['nombreCat2'].value
	var descript = document.forms['modCategory']['descripCat2'].value;
	if (nombre == "") {
		document.getElementById("nombreMal").innerHTML = "El nombre no puede estar vacío";
	}
	if (descript == "") {
		document.getElementById("nombreMal").innerHTML = "La descripcion no puede estar vacía";
	}
	if(nombre != "" && descript != ""){
		objetoCategoria.name = nombre;
		objetoCategoria.description = descript;
		showHomePage();
		contenidoCentral.setAttribute("class","d-block");
		contenidoFormularios.setAttribute("class","d-none");
		return true;
	}else{
		return false;
	}
}//Fin de validarModificacionCategoria

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
		//NOMBRE DEL ACTOR/DIRECTOR
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
		//APELLIDO1 DEL ACTOR/DIRECTOR
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
		//APELLIDO2 DEL ACTOR/DIRECTOR
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
		//FECHA DE NACIMIENTO DEL ACTOR/DIRECTOR
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
		inputBorn.setAttribute("placeholder","DD/MM/AAAA");
		var malBorn = document.createElement("small");
		malBorn.setAttribute("class","form-text text-muted");
		malBorn.setAttribute("id","bornMal");
		//IMAGEN DEL ACTOR/DIRECTOR
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
		//SE CREA EL BUSCADOR 
		var buscador = document.createElement("input");
		buscador.setAttribute("class","form-control mb-3");
		buscador.setAttribute("type","text");
		buscador.setAttribute("id","buscador");
		buscador.setAttribute("placeholder","Buscar...");
		//SE CREA LA TABLA DE LOS ACTORES O DIRECTORES
		var tabla = document.createElement("table");
		tabla.setAttribute("class","table table-bordered");
		tabla.setAttribute("name","person");
		tabla.setAttribute("id","person");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		var thVacio = document.createElement("th");
		var ocultar = document.createElement("button");
		ocultar.setAttribute("type","button");
		ocultar.setAttribute("class","btn btn-secondary");
		ocultar.appendChild(document.createTextNode("Mostrar/Ocultar"));
		ocultar.addEventListener("click", function(){
			var cont = document.getElementById("tablaPersonas");
			if(cont.style.display=="table-row-group"){
				cont.style.display = "none";
			}else{
				cont.style.display = "table-row-group";
			}
		});
		thVacio.appendChild(ocultar);
		var thNombre = document.createElement("th");
		thNombre.appendChild(document.createTextNode("Nombre completo"));
		var tbody = document.createElement("tbody");
		tbody.setAttribute("id","tablaPersonas");
		if (rol == "Actor") {
			var actores = video.actors;
			var actor = actores.next();
			while (actor.done !== true){
				var trAct = document.createElement("tr");
				var tdEliminar = document.createElement("td");
				var eliminar = document.createElement("button");
				eliminar.setAttribute("type","button");
				eliminar.setAttribute("class","btn btn-danger");
				eliminar.setAttribute("value",actor.value.name);
				eliminar.appendChild(document.createTextNode("Eliminar"));
				//Se le añade el evento al boton
				eliminar.addEventListener("click", deleteActor);
				var tdAct = document.createElement("td");
				tdAct.setAttribute("class","col-8");
				//Evita que se muestren null los apellidos vacios
				if (actor.value.lastName2 == null) {
					actor.value.lastName2 = " ";
				}
				tdAct.appendChild(document.createTextNode(actor.value.name+" "+actor.value.lastName1+" "+actor.value.lastName2));
				tdEliminar.appendChild(eliminar);
				trAct.appendChild(tdEliminar);
				trAct.appendChild(tdAct);
				tbody.appendChild(trAct);
				actor = actores.next();
			}//Fin del while
		}else if(rol == "Director"){
			var directores = video.directors;
			var director = directores.next();
			while (director.done !== true){
				var trDir = document.createElement("tr");
				var tdEliminar = document.createElement("td");
				var eliminar = document.createElement("button");
				eliminar.setAttribute("type","button");
				eliminar.setAttribute("class","btn btn-danger");
				eliminar.setAttribute("value",director.value.name);
				eliminar.appendChild(document.createTextNode("Eliminar"));
				//Se le añade el evento al boton
				eliminar.addEventListener("click", deleteDirector);
				var tdDir = document.createElement("td");
				tdDir.setAttribute("class","col-8");
				//Evita que se muestren null los apellidos vacios
				if (director.value.lastName2 == null) {
					director.value.lastName2 = " ";
				}
				tdDir.appendChild(document.createTextNode(director.value.name+" "+director.value.lastName1+" "+director.value.lastName2));
				tdEliminar.appendChild(eliminar);
				trDir.appendChild(tdEliminar);
				trDir.appendChild(tdDir);
				tbody.appendChild(trDir);
				director = directores.next();
			}//Fin del while
		}//Fin del if
		var grupoBtn = document.createElement("div");
		grupoBtn.setAttribute("class","form-group d-flex justify-content-around");
		var cancelar = document.createElement("button");
		cancelar.setAttribute("type","button");
		cancelar.setAttribute("class","btn btn-primary");
		cancelar.appendChild(document.createTextNode("Cancelar"));
		//Añade eventos al hacer click sobre los botones del formulario creado y el buscador
		$(document).ready(function(){
			$("#buscador").on("keyup", function() {
			  var value = $(this).val().toLowerCase();
			  $("#tablaPersonas tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			  });
			});
		});
		cancelar.addEventListener("click", showHomePage);
		cancelar.addEventListener("click", function(){
													contenidoCentral.setAttribute("class","d-block");
													contenidoFormularios.setAttribute("class","d-none");
													});

		//se crea el formulario de borrado
		formulario.appendChild(leyenda);
		grupo.appendChild(buscador);
		grupo.appendChild(tabla);
		formulario.appendChild(grupo);
		tabla.appendChild(thead);
		tabla.appendChild(tbody);
		thead.appendChild(tr);
		tr.appendChild(thVacio);
		tr.appendChild(thNombre);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(grupoBtn);
		contenidoFormularios.appendChild(formulario);
		/* FIN DEL FORMULARIO DE ELIMINAR ACTOR/DIRECTOR */
	}else if (tipo == "update") {
		var formulario = document.createElement("form");
		formulario.setAttribute("name","modActorDirector");
		formulario.setAttribute("action","");
		formulario.setAttribute("onsubmit","return false");
		formulario.setAttribute("method","post");
		var leyenda = document.createElement("legend");
		leyenda.appendChild(document.createTextNode("Modificar "+rol+""));
		//SE CREA EL BUSCADOR 
		var divModificar = document.createElement("div");
		divModificar.setAttribute("id","divModificar");
		var grupo1 = document.createElement("div");
		grupo1.setAttribute("class","form-group mt-3");
		var label1 = document.createElement("label");
		label1.setAttribute("for","produccionesCat");
		label1.appendChild(document.createTextNode("Selecciona un "+rol+""));
		var divInputBtn = document.createElement("div");
		divInputBtn.setAttribute("class","input-group");
		var divBtn = document.createElement("div");
		divBtn.setAttribute("class","input-group-prepend");
		var botonRemover = document.createElement("button");
		botonRemover.setAttribute("type","button");
		botonRemover.setAttribute("class","btn btn-sm btn-outline-secondary");
		botonRemover.appendChild(document.createTextNode("Remover"));
		//añade el evento al hacer click al boton de remover
		botonRemover.addEventListener("click",function(){
			var input = document.forms["modActorDirector"]["Person"];
				input.value = "";
				//muestra la tabla
				document.getElementById("divTabla").style.display = "block";
				//oculta los campos de la categoria para modificar
				divModificar.removeChild(divModificar.firstChild);
		});
		var inputCat = document.createElement("input");
		inputCat.setAttribute("class","form-control ");
		inputCat.setAttribute("type","text");
		inputCat.setAttribute("id","Person");
		inputCat.readOnly = true;
		var divTabla = document.createElement("div");
		divTabla.setAttribute("id","divTabla");
		var buscador = document.createElement("input");
		buscador.setAttribute("class","form-control my-3");
		buscador.setAttribute("type","text");
		buscador.setAttribute("id","buscador");
		buscador.setAttribute("placeholder","Buscar...");
		//SE CREA LA TABLA DEL ROL
		var tabla = document.createElement("table");
		tabla.setAttribute("class","table table-bordered");
		tabla.setAttribute("name","tablaPerson");
		tabla.setAttribute("id","tablaPerson");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		var thVacio = document.createElement("th");
		var ocultar = document.createElement("button");
		ocultar.setAttribute("type","button");
		ocultar.setAttribute("class","btn btn-secondary");
		ocultar.appendChild(document.createTextNode("Mostrar/Ocultar"));
		ocultar.addEventListener("click", function(){
			var cont = document.getElementById("tablaBody");
			if(cont.style.display=="table-row-group"){
				cont.style.display = "none";
			}else{
				cont.style.display = "table-row-group";
			}
		});
		thVacio.appendChild(ocultar);
		var thNombre = document.createElement("th");
		thNombre.appendChild(document.createTextNode("Nombre completo"));
		var tbody = document.createElement("tbody");
		tbody.setAttribute("id","tablaBody");
		if (rol == "Actor") {
			var actores = video.actors;
			var actor = actores.next();
			while (actor.done !== true){
				var trAct = document.createElement("tr");
				var tdAdd = document.createElement("td");
				var add = document.createElement("button");
				add.setAttribute("type","button");
				add.setAttribute("class","btn btn-danger");
				if (actor.value.lastName2 == null) {
					actor.value.lastName2 = " ";
				}
				add.setAttribute("value",actor.value.name+" "+actor.value.lastName1+" "+actor.value.lastName2);
				add.appendChild(document.createTextNode("Modificar"));
				//Se le añade el evento al boton
				add.addEventListener("click", function(){
					var input = document.forms["modActorDirector"]["Person"];
					input.value = this.value;
					//oculta la tabla
					document.getElementById("divTabla").style.display = "none";
					//muestra los campos de la categoria para modificar
					modifyPerson(this.value,rol);
				});
				var tdAct = document.createElement("td");
				tdAct.setAttribute("class","col-8");
				tdAct.appendChild(document.createTextNode(actor.value.name+" "+actor.value.lastName1+" "+actor.value.lastName2));
				tdAdd.appendChild(add);
				trAct.appendChild(tdAdd);
				trAct.appendChild(tdAct);
				tbody.appendChild(trAct);
				actor = actores.next();
			}//Fin del while
		}else if(rol == "Director"){
			var directores = video.directors;
			var director = directores.next();
			while (director.done !== true){
				var trDir = document.createElement("tr");
				var tdAdd = document.createElement("td");
				var add = document.createElement("button");
				add.setAttribute("type","button");
				add.setAttribute("class","btn btn-danger");
				if (director.value.lastName2 == null) {
					director.value.lastName2 = " ";
				}
				add.setAttribute("value",director.value.name+" "+director.value.lastName1+" "+director.value.lastName2);
				add.appendChild(document.createTextNode("Modificar"));
				//Se le añade el evento al boton
				add.addEventListener("click", function(){
					var input = document.forms["modActorDirector"]["Person"];
					input.value = this.value;
					//oculta la tabla
					document.getElementById("divTabla").style.display = "none";
					//muestra los campos de la categoria para modificar
					modifyPerson(this.value,rol);
				});
				var tdDir = document.createElement("td");
				tdDir.setAttribute("class","col-8");
				tdDir.appendChild(document.createTextNode(director.value.name+" "+director.value.lastName1+" "+director.value.lastName2));
				tdAdd.appendChild(add);
				trDir.appendChild(tdAdd);
				trDir.appendChild(tdDir);
				tbody.appendChild(trDir);
				director = directores.next();
			}//Fin del while
		}//Fin del if
		//Añade los eventos de la tabla
		$(document).ready(function(){
			$("#buscador").on("keyup", function() {
			  var value = $(this).val().toLowerCase();
			  $("#tablaPerson tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			  });
			});
		});
		grupo1.appendChild(label1);
		divInputBtn.appendChild(divBtn);
		divBtn.appendChild(botonRemover);
		divInputBtn.appendChild(inputCat);
		grupo1.appendChild(divInputBtn);
		divTabla.appendChild(buscador);
		divTabla.appendChild(tabla);
		grupo1.appendChild(divTabla);
		tabla.appendChild(thead);
		tabla.appendChild(tbody);
		thead.appendChild(tr);
		tr.appendChild(thVacio);
		tr.appendChild(thNombre);
		formulario.appendChild(grupo1);
		formulario.appendChild(divModificar);
		contenidoFormularios.appendChild(formulario);
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
		
		var fecha = new Date(born.value.split("/")[1]+"/"+born.value.split("/")[0]+"/"+born.value.split("/")[2]);
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
	//Recoge el valor del boton pulsado
	var act = this.value;
	var eliminar = null;
	var encontrado = false;
	var actores = video.actors;
	var actor = actores.next();
	while ((actor.done !== true) && (!encontrado)){
		if (actor.value.name == act) {
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
	//Recoge el value del boton pulsado
	var dir = this.value;
	var eliminar = null;
	var encontrado = false;
	var directores = video.directors;
	var director = directores.next();
	while ((director.done !== true) && (!encontrado)){
		if (director.value.name == dir) {
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

//Añade campos al formulario con los datos del actor
function modifyPerson(person, rol){
	var encontrado = false;
	//Variable para guardar el objeto categoria
	var objetoPerson = null;
	if (rol == "Actor") {
		var actores = video.actors;
		var actor = actores.next();
		while ((actor.done !== true) && (!encontrado)){
			if(actor.value.lastName2 == null){
				actor.value.lastName2 = "";
			}
			if (actor.value.name+" "+actor.value.lastName1+" "+actor.value.lastName2 == person) {
				objetoPerson = actor.value;
				encontrado = true;
			}
			actor = actores.next();
		}//Fin del while
	}else if(rol == "Director"){
		var directores = video.directors;
		var director = directores.next();
		while ((director.done !== true) && (!encontrado)){
			if(director.value.lastName2 == null){
				director.value.lastName2 = "";
			}
			if (director.value.name+" "+director.value.lastName1+" "+director.value.lastName2 == person) {
				objetoPerson = director.value;
				encontrado = true;
			}
			director = directores.next();
		}//Fin del while
	}//Fin del if
	//Div en el que se va a añadir la estructura
	var divModificar = document.getElementById("divModificar");
	var divInputBtn = document.createElement("div");
	divInputBtn.setAttribute("id","camposModificar");
	//NOMBRE DEL ACTOR/DIRECTOR
	var grupo1 = document.createElement("div");
	grupo1.setAttribute("class","form-group");
	var labelName = document.createElement("label");
	labelName.setAttribute("for","nombrePerson");
	labelName.appendChild(document.createTextNode("Nombre*"));
	var inputName = document.createElement("input");
	inputName.setAttribute("type","text");
	inputName.setAttribute("class","form-control");
	inputName.setAttribute("id","nombrePerson");
	inputName.setAttribute("onblur","validarCampoTexto(this)");
	inputName.setAttribute("value",objetoPerson.name);
	var malName = document.createElement("small");
	malName.setAttribute("class","form-text text-muted");
	malName.setAttribute("id","nombreMal");
	//APELLIDO1 DEL ACTOR/DIRECTOR
	var grupo2 = document.createElement("div");
	grupo2.setAttribute("class","form-group");
	var labelLastName1 = document.createElement("label");
	labelLastName1.setAttribute("for","lastName12");
	labelLastName1.appendChild(document.createTextNode("Primer apellido*"));
	var inputLastName1 = document.createElement("input");
	inputLastName1.setAttribute("type","text");
	inputLastName1.setAttribute("class","form-control");
	inputLastName1.setAttribute("id","lastName12");
	inputLastName1.setAttribute("onblur","validarCampoTexto(this)");
	inputLastName1.setAttribute("value",objetoPerson.lastName1);
	var malLastName1 = document.createElement("small");
	malLastName1.setAttribute("class","form-text text-muted");
	malLastName1.setAttribute("id","lastName1Mal");
	//APELLIDO2 DEL ACTOR/DIRECTOR
	var grupo3 = document.createElement("div");
	grupo3.setAttribute("class","form-group");
	var labelLastName2 = document.createElement("label");
	labelLastName2.setAttribute("for","lastName22");
	labelLastName2.appendChild(document.createTextNode("Segundo apellido"));
	var inputLastName2 = document.createElement("input");
	inputLastName2.setAttribute("type","text");
	inputLastName2.setAttribute("class","form-control");
	inputLastName2.setAttribute("id","lastName22");
	inputLastName2.setAttribute("onblur","validarCampoTexto(this)");
	inputLastName2.setAttribute("value",objetoPerson.lastName2);
	var malLastName2 = document.createElement("small");
	malLastName2.setAttribute("class","form-text text-muted");
	malLastName2.setAttribute("id","lastName2Mal");
	//FECHA DE NACIMIENTO DEL ACTOR/DIRECTOR
	var grupo4 = document.createElement("div");
	grupo4.setAttribute("class","form-group");
	var labelBorn = document.createElement("label");
	labelBorn.setAttribute("for","born");
	labelBorn.appendChild(document.createTextNode("Fecha de nacimiento*"));
	var inputBorn = document.createElement("input");
	inputBorn.setAttribute("type","text");
	inputBorn.setAttribute("class","form-control");
	inputBorn.setAttribute("id","born2");
	inputBorn.setAttribute("onblur","validarCampoFecha(this)");
	inputBorn.setAttribute("value",objetoPerson.born.toLocaleDateString());
	var malBorn = document.createElement("small");
	malBorn.setAttribute("class","form-text text-muted");
	malBorn.setAttribute("id","bornMal");
	//IMAGEN DEL ACTOR/DIRECTOR
	var grupo5 = document.createElement("div");
	grupo5.setAttribute("class","form-group");
	var labelPicture = document.createElement("label");
	labelPicture.setAttribute("for","picture");
	labelPicture.appendChild(document.createTextNode("Ruta de la imagen"));
	var inputPicture = document.createElement("input");
	inputPicture.setAttribute("type","text");
	inputPicture.setAttribute("class","form-control");
	inputPicture.setAttribute("id","picture2");
	inputPicture.setAttribute("onblur","validarCampoRutaObligatorio(this)");
	inputPicture.setAttribute("value",objetoPerson.picture);
	var malPicture = document.createElement("small");
	malPicture.setAttribute("class","form-text text-muted");
	malPicture.setAttribute("id","pictureMal");
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
	//Se añaden los eventos de los botones
	aceptar.addEventListener("click", function(){
												return validarModificacionPerson(objetoPerson);
											});
	cancelar.addEventListener("click", showHomePage);
	cancelar.addEventListener("click", function(){
												contenidoCentral.setAttribute("class","d-block");
												contenidoFormularios.setAttribute("class","d-none");
											});
	//Se añade todo al formulario
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
	divInputBtn.appendChild(grupo1);
	divInputBtn.appendChild(grupo2);
	divInputBtn.appendChild(grupo3);
	divInputBtn.appendChild(grupo4);
	divInputBtn.appendChild(grupo5);
	grupoBtn.appendChild(aceptar);
	grupoBtn.appendChild(cancelar);
	divInputBtn.appendChild(grupoBtn);
	//Se añade todo al divMOdificar del formulario de personas
	divModificar.appendChild(divInputBtn);
}//Fin de modifyPerson

//Valida los campos del formulario de modifiacion
function validarModificacionPerson(objetoPerson){
	//Se usan los setter para modificar los valores
	var nombre = document.forms['modActorDirector']['nombrePerson'].value
	var lastName1 = document.forms['modActorDirector']['lastName12'].value;
	var lastName2 = document.forms['modActorDirector']['lastName22'].value;
	var born = document.forms['modActorDirector']['born2'].value;
	var picture = document.forms['modActorDirector']['picture2'].value;

	if (nombre == "") {
		document.getElementById("nombreMal").innerHTML = "El nombre no puede estar vacío";
	}
	if (lastName1 == "") {
		document.getElementById("lastName1Mal").innerHTML = "El apellido 1 no puede estar vacío";
	}
	if (lastName2 == "") {
		document.getElementById("lastName2Mal").innerHTML = "El apellido 2 no puede estar vacío";
	}
	if (born == "") {
		document.getElementById("bornMal").innerHTML = "La fecha no puede estar vacía";
	}
	if (picture == "") {
		document.getElementById("pictureMal").innerHTML = "La ruta de la imagen no puede estar vacía";
	}
	if(nombre != "" && lastName1 != "" && lastName2 != "" && born != "" && picture != ""){
		objetoPerson.name = nombre;
		objetoPerson.lastName1 = lastName1;
		objetoPerson.lastName2 = lastName2;
		var fecha = new Date(born.split("/")[1]+"/"+born.split("/")[0]+"/"+born.split("/")[2]);
		objetoPerson.born = fecha;
		objetoPerson.picture = picture;
		showHomePage();
		contenidoCentral.setAttribute("class","d-block");
		contenidoFormularios.setAttribute("class","d-none");
		return true;
	}else{
		return false;
	}
}//Fin de validarModificacionPerson

/* FUNCIONES PARA LOS FORMULARIOS DE LAS PRODUCCIONES */
var arrayDir = new Array();
var arrayReparto = new Array();
var arrayCategorias = new Array();
//Muestra el formulario de las producciones
function formProducciones(tipo){
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
		formulario.setAttribute("name","addProduction");
		formulario.setAttribute("action","");
		formulario.setAttribute("onsubmit","validarProducciones(); return false");
		formulario.setAttribute("method","post");
		var leyenda = document.createElement("legend");
		leyenda.appendChild(document.createTextNode("Añadir produccion"));
		//Se añade al contenido
		formulario.appendChild(leyenda);
		contenidoFormularios.appendChild(formulario);
		//TITULO DE LA PRODUCCION
		var grupo1 = document.createElement("div");
		grupo1.setAttribute("class","form-group");
		var labelTitle = document.createElement("label");
		labelTitle.setAttribute("for","titulo");
		labelTitle.appendChild(document.createTextNode("Titulo de la produccion*"));
		var inputTitle = document.createElement("input");
		inputTitle.setAttribute("type","text");
		inputTitle.setAttribute("class","form-control");
		inputTitle.setAttribute("id","titulo");
		inputTitle.setAttribute("onblur","validarCampoTexto(this)");
		inputTitle.setAttribute("placeholder","Titulo");
		var malTitle = document.createElement("small");
		malTitle.setAttribute("class","form-text text-muted");
		malTitle.setAttribute("id","titleMal");
		//Se añade al formulario como hijos
		grupo1.appendChild(labelTitle);
		grupo1.appendChild(inputTitle);
		grupo1.appendChild(malTitle);
		formulario.appendChild(grupo1);
		//FECHA DE LA PUBLICACION DE LA PRODUCCION
		var grupo2 = document.createElement("div");
		grupo2.setAttribute("class","form-group");
		var labelDate = document.createElement("label");
		labelDate.setAttribute("for","publication");
		labelDate.appendChild(document.createTextNode("Fecha de publicacion*"));
		var inputDate = document.createElement("input");
		inputDate.setAttribute("type","text");
		inputDate.setAttribute("class","form-control");
		inputDate.setAttribute("id","publication");
		inputDate.setAttribute("onblur","validarCampoFecha(this)");
		inputDate.setAttribute("placeholder","DD/MM/AAAA");
		var malDate = document.createElement("small");
		malDate.setAttribute("class","form-text text-muted");
		malDate.setAttribute("id","dateMal");
		//Se añade al formulario como hijos
		grupo2.appendChild(labelDate);
		grupo2.appendChild(inputDate);
		grupo2.appendChild(malDate);
		formulario.appendChild(grupo2);
		//NACIONALIDAD DE LA PRODUCCION
		var grupo3 = document.createElement("div");
		grupo3.setAttribute("class","form-group");
		var labelNationality = document.createElement("label");
		labelNationality.setAttribute("for","nationality");
		labelNationality.appendChild(document.createTextNode("Nacionalidad*"));
		var inputNationality = document.createElement("input");
		inputNationality.setAttribute("type","text");
		inputNationality.setAttribute("class","form-control");
		inputNationality.setAttribute("onblur","validarCampoTexto(this)");
		inputNationality.setAttribute("id","nationality");
		inputNationality.setAttribute("placeholder","Nacionalidad");
		var malNationality = document.createElement("small");
		malNationality.setAttribute("class","form-text text-muted");
		malNationality.setAttribute("id","nationalityMal");
		//Se añade al formulario como hijos
		grupo3.appendChild(labelNationality);
		grupo3.appendChild(inputNationality);
		grupo3.appendChild(malNationality);
		formulario.appendChild(grupo3);
		//SIPNOSIS DE LA PRODUCCION
		var grupo4 = document.createElement("div");
		grupo4.setAttribute("class","form-group");
		var labelSypnosis = document.createElement("label");
		labelSypnosis.setAttribute("for","synopsis");
		labelSypnosis.appendChild(document.createTextNode("Sipnosis*"));
		var inputSypnosis = document.createElement("input");
		inputSypnosis.setAttribute("type","text");
		inputSypnosis.setAttribute("class","form-control");
		inputSypnosis.setAttribute("onblur","validarCampoTexto(this)");
		inputSypnosis.setAttribute("id","synopsis");
		inputSypnosis.setAttribute("placeholder","Sipnosis");
		var malSypnosis = document.createElement("small");
		malSypnosis.setAttribute("class","form-text text-muted");
		malSypnosis.setAttribute("id","synopsisMal");
		//Se añade al formulario como hijos
		grupo4.appendChild(labelSypnosis);
		grupo4.appendChild(inputSypnosis);
		grupo4.appendChild(malSypnosis);
		formulario.appendChild(grupo4);
		//IMAGEN DE LA PRODUCCION
		var grupo5 = document.createElement("div");
		grupo5.setAttribute("class","form-group");
		var labelPicture = document.createElement("label");
		labelPicture.setAttribute("for","picture");
		labelPicture.appendChild(document.createTextNode("Ruta de la imagen*"));
		var inputPicture = document.createElement("input");
		inputPicture.setAttribute("type","text");
		inputPicture.setAttribute("class","form-control");
		inputPicture.setAttribute("id","picture");
		inputPicture.setAttribute("onblur","validarCampoRutaObligatorio(this)");
		inputPicture.setAttribute("placeholder","X://xxxxxx/xxxx");
		var malPicture = document.createElement("small");
		malPicture.setAttribute("class","form-text text-muted");
		malPicture.setAttribute("id","pictureMal");
		//Se añade al formulario como hijos
		grupo5.appendChild(labelPicture);
		grupo5.appendChild(inputPicture);
		grupo5.appendChild(malPicture);
		formulario.appendChild(grupo5);
		//SELECT PARA EL TIPO DE PRODUCCION
		var grupo6 = document.createElement("div");
		grupo6.setAttribute("class","form-group");
		var labelTipo = document.createElement("label");
		labelTipo.setAttribute("for","tipo");
		labelTipo.appendChild(document.createTextNode("Tipo de produccion*"));
		var selectTipo = document.createElement("select");
		selectTipo.setAttribute("class","form-control");
		selectTipo.setAttribute("name","tipo");
		selectTipo.setAttribute("id","tipo");
		selectTipo.setAttribute("onblur","validarCampoSelect(this)");
		selectTipo.setAttribute("onchange","mostrarDIVS()");
		var optionNull = document.createElement("option");
		optionNull.setAttribute("value","0");
		optionNull.appendChild(document.createTextNode("-- Selecciona tipo --"));
		var optionMovie = document.createElement("option");
		optionMovie.setAttribute("value","Movie");
		optionMovie.appendChild(document.createTextNode("Pelicula"));
		var optionSerie = document.createElement("option");
		optionSerie.setAttribute("value","Serie");
		optionSerie.appendChild(document.createTextNode("Serie"));
		selectTipo.appendChild(optionNull);
		selectTipo.appendChild(optionMovie);
		selectTipo.appendChild(optionSerie);
		//Se añaden como hijos al formulario
		grupo6.appendChild(labelTipo);
		grupo6.appendChild(selectTipo);
		formulario.appendChild(grupo6);
		//DIV QUE APARECE SI EN EL SELECT SE PONE MOVIE
		var divMovie = document.createElement("div");
		divMovie.setAttribute("class","form-group");
		divMovie.setAttribute("id","divMovie");
		//RECURSO DE LA PRODUCCION MOVIE
		var labelResource = document.createElement("label");
		labelResource.setAttribute("for","recurso");
		labelResource.appendChild(document.createTextNode("Recurso de la produccion"));
		var selectResource = document.createElement("select");
		selectResource.setAttribute("class","form-control mb-2");
		selectResource.setAttribute("id","recurso");
		var optionResource = document.createElement("option");
		optionResource.setAttribute("value","0");
		optionResource.appendChild(document.createTextNode("-- SIN RECURSO --"));
		selectResource.appendChild(optionResource);	
		for (let index = 0; index < arrayRecursos.length; index++) {
			optionResource = document.createElement("option");
			optionResource.setAttribute("value",arrayRecursos[index].link);
			optionResource.appendChild(document.createTextNode(arrayRecursos[index].link));
			selectResource.appendChild(optionResource);	
		}//Fin del for	
		divMovie.appendChild(labelResource);
		divMovie.appendChild(selectResource);
		//LONGITUD DE LA PRODUCCION MOVIE
		var labelCoor = document.createElement("label");
		labelCoor.setAttribute("for","titulo");
		labelCoor.appendChild(document.createTextNode("Coordenadas de la produccion"));
		var inputCoor1 = document.createElement("input");
		inputCoor1.setAttribute("type","text");
		inputCoor1.setAttribute("class","form-control");
		inputCoor1.setAttribute("id","longitud");
		inputCoor1.setAttribute("onblur","validarCampoNumeroOpcional(this)");
		inputCoor1.setAttribute("placeholder","Longitud");
		var malCoor1 = document.createElement("small");
		malCoor1.setAttribute("class","form-text text-muted");
		malCoor1.setAttribute("id","longitudMal");
		var inputCoor2 = document.createElement("input");
		inputCoor2.setAttribute("type","text");
		inputCoor2.setAttribute("class","form-control");
		inputCoor2.setAttribute("id","latitud");
		inputCoor2.setAttribute("onblur","validarCampoNumeroOpcional(this)");
		inputCoor2.setAttribute("placeholder","Latitud");
		var malCoor2 = document.createElement("small");
		malCoor2.setAttribute("class","form-text text-muted");
		malCoor2.setAttribute("id","latitudMal");
		divMovie.appendChild(labelCoor);
		divMovie.appendChild(inputCoor1);
		divMovie.appendChild(malCoor1);
		divMovie.appendChild(inputCoor2);
		divMovie.appendChild(malCoor2);
		//DIRECTOR DE LA PRODUCCION MOVIE
		//SE CREA EL BUSCADOR 
		var grupo6 = document.createElement("div");
		grupo6.setAttribute("class","form-group mt-3");
		var label6 = document.createElement("label");
		label6.setAttribute("for","produccionesCat");
		label6.appendChild(document.createTextNode("Asignar director a la nueva produccion*"));
		var divInputBtn = document.createElement("div");
		divInputBtn.setAttribute("class","input-group");
		var divBtn = document.createElement("div");
		divBtn.setAttribute("class","input-group-prepend");
		var botonRemover = document.createElement("button");
		botonRemover.setAttribute("type","button");
		botonRemover.setAttribute("class","btn btn-sm btn-outline-secondary");
		botonRemover.appendChild(document.createTextNode("Remover"));
		//añade el evento al hacer click al boton de remover
		botonRemover.addEventListener("click",function(){
			var input = document.forms["addProduction"]["director"];
				//Quita el ultimo elemento del array
				arrayDir.pop();
				input.value = arrayDir.toString();
				//muestra la tabla
				document.getElementById("divTabla").style.display = "block";

		});
		var inputDirector = document.createElement("input");
		inputDirector.setAttribute("class","form-control ");
		inputDirector.setAttribute("type","text");
		inputDirector.setAttribute("id","director");
		inputDirector.readOnly = true;
		var malDirector = document.createElement("small");
		malDirector.setAttribute("class","form-text text-muted");
		malDirector.setAttribute("id","directorMal");
		var divTabla = document.createElement("div");
		divTabla.setAttribute("id","divTabla");
		var buscador = document.createElement("input");
		buscador.setAttribute("class","form-control my-3");
		buscador.setAttribute("type","text");
		buscador.setAttribute("id","buscador");
		buscador.setAttribute("placeholder","Buscar...");
		//SE CREA LA TABLA DE LOS DIRECTORES
		var tabla = document.createElement("table");
		tabla.setAttribute("class","table table-bordered");
		tabla.setAttribute("name","tablaDirector");
		tabla.setAttribute("id","tablaDirector");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		var thVacio = document.createElement("th");
		var ocultar = document.createElement("button");
		ocultar.setAttribute("type","button");
		ocultar.setAttribute("class","btn btn-secondary");
		ocultar.appendChild(document.createTextNode("Mostrar/Ocultar"));
		ocultar.addEventListener("click", function(){
			var cont = document.getElementById("tablaDirectores");
			if(cont.style.display=="table-row-group"){
				cont.style.display = "none";
			}else{
				cont.style.display = "table-row-group";
			}
		});
		thVacio.appendChild(ocultar);
		var thNombre = document.createElement("th");
		thNombre.appendChild(document.createTextNode("Nombre completo"));
		var tbody = document.createElement("tbody");
		tbody.setAttribute("id","tablaDirectores");
		var directores = video.directors;
		var director = directores.next();
		while (director.done !== true){
			var trDir = document.createElement("tr");
			var tdAdd = document.createElement("td");
			var add = document.createElement("button");
			add.setAttribute("type","button");
			add.setAttribute("class","btn btn-danger");
			if (director.value.lastName2 == null) {
				director.value.lastName2 = " ";
			}
			add.setAttribute("value",director.value.name+" "+director.value.lastName1+" "+director.value.lastName2);
			add.appendChild(document.createTextNode("Añadir"));
			var tdNombre = document.createElement("td");
			tdNombre.appendChild(document.createTextNode(director.value.name+" "+director.value.lastName1+" "+director.value.lastName2));
			tdNombre.setAttribute("class","col-8");
			tdAdd.appendChild(add);
			trDir.appendChild(tdAdd);
			trDir.appendChild(tdNombre);
			tbody.appendChild(trDir);
			//Añade una funcion a cada boton de añadir
			add.addEventListener("click", function(){
				var input = document.forms["addProduction"]["director"];
				//Añade al array el nomnbre de boton
				arrayDir.push(this.value);
				input.value = arrayDir.toString();
				//oculta la tabla
				document.getElementById("divTabla").style.display = "none";
			});
			director = directores.next();
		}//Fin del while
		//Añade los eventos de la tabla
		$(document).ready(function(){
			$("#buscador").on("keyup", function() {
			  var value = $(this).val().toLowerCase();
			  $("#tablaDirectores tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			  });
			});
		});
		grupo6.appendChild(label6);
		divInputBtn.appendChild(divBtn);
		divBtn.appendChild(botonRemover);
		divInputBtn.appendChild(inputDirector);
		divInputBtn.appendChild(malDirector);
		grupo6.appendChild(divInputBtn);
		divTabla.appendChild(buscador);
		divTabla.appendChild(tabla);
		grupo6.appendChild(divTabla);
		tabla.appendChild(thead);
		tabla.appendChild(tbody);
		thead.appendChild(tr);
		tr.appendChild(thVacio);
		tr.appendChild(thNombre);
		divMovie.appendChild(grupo6);
		formulario.appendChild(divMovie);
		//DIV QUE APARECE SI EN EL SELECT SE PONE SERIE
		var divSerie = document.createElement("div");
		divSerie.setAttribute("class","form-group");
		divSerie.setAttribute("id","divSerie");
		//TEMPORADA DE LA PRODUCCION SERIE
		var labelSeason = document.createElement("label");
		labelSeason.setAttribute("for","recurso");
		labelSeason.appendChild(document.createTextNode("Temporada de la produccion"));
		var selectSeason = document.createElement("select");
		selectSeason.setAttribute("class","form-control");
		selectSeason.setAttribute("id","temporada");
		var optionSeason = document.createElement("option");
		optionSeason.setAttribute("value","0");
		optionSeason.appendChild(document.createTextNode("-- SIN TEMPORADA --"));
		selectSeason.appendChild(optionSeason);	
		for (let index = 0; index < arraySeason.length; index++) {
			optionSeason = document.createElement("option");
			optionSeason.setAttribute("value",arraySeason[index].title);
			optionSeason.appendChild(document.createTextNode(arraySeason[index].title));
			selectSeason.appendChild(optionSeason);	
		}//Fin del for	
		//Se añaden como hijos al formulario
		divSerie.appendChild(labelSeason);
		divSerie.appendChild(selectSeason);
		formulario.appendChild(divSerie);
		//REPARTO DE LA PRODUCCION
		//SE CREA EL BUSCADOR 
		var grupo7 = document.createElement("div");
		grupo7.setAttribute("class","form-group");
		var label7 = document.createElement("label");
		label7.setAttribute("for","reparto");
		label7.appendChild(document.createTextNode("Reparto de la produccion"));
		//Div vacio en el que se añaden los actores en los que se pulsa
		var divReparto = document.createElement("div");
		divReparto.setAttribute("class","form-group");
		divReparto.setAttribute("id","divReparto");
		var buscadorReparto = document.createElement("input");
		buscadorReparto.setAttribute("class","form-control my-3");
		buscadorReparto.setAttribute("type","text");
		buscadorReparto.setAttribute("id","buscadorReparto");
		buscadorReparto.setAttribute("placeholder","Buscar...");
		//SE CREA LA TABLA DE LOS ACTORES
		var tabla = document.createElement("table");
		tabla.setAttribute("class","table table-bordered");
		tabla.setAttribute("name","reparto");
		tabla.setAttribute("id","reparto");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		var thVacio = document.createElement("th");
		var ocultar = document.createElement("button");
		ocultar.setAttribute("type","button");
		ocultar.setAttribute("class","btn btn-secondary");
		ocultar.appendChild(document.createTextNode("Mostrar/Ocultar"));
		ocultar.addEventListener("click", function(){
			var cont = document.getElementById("tablaReparto");
			if(cont.style.display=="table-row-group"){
				cont.style.display = "none";
			}else{
				cont.style.display = "table-row-group";
			}
		});
		thVacio.appendChild(ocultar);
		var thNombre = document.createElement("th");
		thNombre.appendChild(document.createTextNode("Nombre"));
		var tbody = document.createElement("tbody");
		tbody.setAttribute("id","tablaReparto");
		//Contador para llevar la cuenta de los divs creados
		var contador = 0;
		var actores = video.actors;
		var actor = actores.next();
		while (actor.done !== true){
			var trCat = document.createElement("tr");
			var tdAdd = document.createElement("td");
			var add = document.createElement("button");
			add.setAttribute("type","button");
			add.setAttribute("class","btn btn-danger");
			if (actor.value.lastName2 == null) {
				actor.value.lastName2 = " ";
			}
			add.setAttribute("value",actor.value.name+" "+actor.value.lastName1+" "+actor.value.lastName2);
			add.appendChild(document.createTextNode("Añadir"));
			var tdActor = document.createElement("td");
			tdActor.appendChild(document.createTextNode(actor.value.name+" "+actor.value.lastName1+" "+actor.value.lastName2));
			tdActor.setAttribute("class","col-8");
			tdAdd.appendChild(add);
			trCat.appendChild(tdAdd);
			trCat.appendChild(tdActor);
			tbody.appendChild(trCat);
			//Añade una funcion a cada boton de añadir
			add.addEventListener("click", function(){
				//Añade al array el nombre de boton
				arrayReparto.push(this.value);
				//llama a la funcion de añadir divActor
				addReparto(this.value,contador);
				contador++;
			});
			actor = actores.next();
		}//Fin del while		
		//Añade eventos al hacer click sobre los botones del formulario creado
		$(document).ready(function(){
			$("#buscadorReparto").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$("#tablaReparto tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
			});
		});
		grupo7.appendChild(label7);
		grupo7.appendChild(divReparto);
		grupo7.appendChild(buscadorReparto);
		grupo7.appendChild(tabla);
		tabla.appendChild(thead);
		tabla.appendChild(tbody);
		thead.appendChild(tr);
		tr.appendChild(thVacio);
		tr.appendChild(thNombre);
		formulario.appendChild(grupo7);
		//CATEGORIAS DE LA PRODUCCION
		//SE CREA EL BUSCADOR 
		var grupo8 = document.createElement("div");
		grupo8.setAttribute("class","form-group");
		var label8 = document.createElement("label");
		label8.setAttribute("for","categorias");
		label8.appendChild(document.createTextNode("Asignar categorias a la produccion"));
		var divInputBtn = document.createElement("div");
		divInputBtn.setAttribute("class","input-group");
		var divBtn = document.createElement("div");
		divBtn.setAttribute("class","input-group-prepend");
		var botonRemover = document.createElement("button");
		botonRemover.setAttribute("type","button");
		botonRemover.setAttribute("class","btn btn-sm btn-outline-secondary");
		botonRemover.appendChild(document.createTextNode("Remover"));
		//añade el evento al hacer click al boton de remover
		botonRemover.addEventListener("click",function(){
			var input = document.forms["addProduction"]["categorias"];
				//Quita el ultimo elemento del array
				arrayCategorias.pop();
				input.value = arrayCategorias.toString();

		});
		var cat = document.createElement("input");
		cat.setAttribute("class","form-control ");
		cat.setAttribute("type","text");
		cat.setAttribute("id","categorias");
		cat.readOnly = true;
		var malCat = document.createElement("small");
		malCat.setAttribute("class","form-text text-muted");
		malCat.setAttribute("id","catMal");
		var buscador = document.createElement("input");
		buscador.setAttribute("class","form-control my-3");
		buscador.setAttribute("type","text");
		buscador.setAttribute("id","buscadorCategorias");
		buscador.setAttribute("placeholder","Buscar...");
		//SE CREA LA TABLA DE LAS CATEGORIAS
		var tabla = document.createElement("table");
		tabla.setAttribute("class","table table-bordered");
		tabla.setAttribute("name","categoria");
		tabla.setAttribute("id","categoria");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		var thVacio = document.createElement("th");
		var ocultar = document.createElement("button");
		ocultar.setAttribute("type","button");
		ocultar.setAttribute("class","btn btn-secondary");
		ocultar.appendChild(document.createTextNode("Mostrar/Ocultar"));
		ocultar.addEventListener("click", function(){
			var cont = document.getElementById("tablaCategorias");
			if(cont.style.display=="table-row-group"){
				cont.style.display = "none";
			}else{
				cont.style.display = "table-row-group";
			}
		});
		thVacio.appendChild(ocultar);
		var thNombre = document.createElement("th");
		thNombre.appendChild(document.createTextNode("Nombre"));
		var tbody = document.createElement("tbody");
		tbody.setAttribute("id","tablaCategorias");
		var categorias = video.categories;
		var categoria = categorias.next();
		while (categoria.done !== true){
			var trCat = document.createElement("tr");
			var tdAdd = document.createElement("td");
			var add = document.createElement("button");
			add.setAttribute("type","button");
			add.setAttribute("class","btn btn-danger");
			add.setAttribute("value",categoria.value.name);
			add.appendChild(document.createTextNode("Añadir"));
			var tdTitulo = document.createElement("td");
			tdTitulo.appendChild(document.createTextNode(categoria.value.name));
			tdTitulo.setAttribute("class","col-8");
			tdAdd.appendChild(add);
			trCat.appendChild(tdAdd);
			trCat.appendChild(tdTitulo);
			tbody.appendChild(trCat);
			//Añade una funcion a cada boton de añadir
			add.addEventListener("click", function(){
				var input = document.forms["addProduction"]["categorias"];
				//Añade al array el nomnbre de boton
				arrayCategorias.push(this.value);
				input.value = arrayCategorias.toString();
			});
			categoria = categorias.next();
		}//Fin del while		
		//Añade eventos al hacer click sobre los botones del formulario creado
		$(document).ready(function(){
			$("#buscadorCategorias").on("keyup", function() {
			  var value = $(this).val().toLowerCase();
			  $("#tablaCategorias tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			  });
			});
		});
		grupo8.appendChild(label8);
		divInputBtn.appendChild(divBtn);
		divBtn.appendChild(botonRemover);
		divInputBtn.appendChild(cat);
		divInputBtn.appendChild(malCat);
		grupo8.appendChild(divInputBtn);
		grupo8.appendChild(buscador);
		grupo8.appendChild(tabla);
		tabla.appendChild(thead);
		tabla.appendChild(tbody);
		thead.appendChild(tr);
		tr.appendChild(thVacio);
		tr.appendChild(thNombre);
		formulario.appendChild(grupo8);
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
													//Se limpia los arrays array
													while(arrayProducciones.length != 0){
														arrayProducciones.shift();
													}
													while(arrayDir.length != 0){
														arrayDir.shift();
													}
													while(arrayCategorias.length != 0){
														arrayCategorias.shift();
													}
													while(arrayReparto.length != 0){
														arrayReparto.shift();
													}
													});
		//Se añade al formulario como hijos
		grupoBtn.appendChild(aceptar);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(grupoBtn);
		/* FIN DEL FORMULARIO DE AÑADIR PRODUCCION */
	}else if (tipo == "delete") {
		var formulario = document.createElement("form");
		formulario.setAttribute("name","deleteProduction");
		formulario.setAttribute("action","");
		formulario.setAttribute("onsubmit","return false");
		formulario.setAttribute("method","post");
		var leyenda = document.createElement("legend");
		var grupo = document.createElement("div");
		grupo.setAttribute("class","form-group");
		leyenda.appendChild(document.createTextNode("Eliminar produccion"));
		//SE CREA EL BUSCADOR 
		var buscador = document.createElement("input");
		buscador.setAttribute("class","form-control mb-3");
		buscador.setAttribute("type","text");
		buscador.setAttribute("id","buscador");
		buscador.setAttribute("placeholder","Buscar...");
		//SE CREA LA TABLA DE LAS PRODUCCIONES
		var tabla = document.createElement("table");
		tabla.setAttribute("class","table table-bordered");
		tabla.setAttribute("name","produccion");
		tabla.setAttribute("id","produccion");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		var thVacio = document.createElement("th");
		var ocultar = document.createElement("button");
		ocultar.setAttribute("type","button");
		ocultar.setAttribute("class","btn btn-secondary");
		ocultar.appendChild(document.createTextNode("Mostrar/Ocultar"));
		ocultar.addEventListener("click", function(){
			var cont = document.getElementById("tablaProducciones");
			if(cont.style.display=="table-row-group"){
				cont.style.display = "none";
			}else{
				cont.style.display = "table-row-group";
			}
		});
		thVacio.appendChild(ocultar);
		var thTitulo = document.createElement("th");
		thTitulo.appendChild(document.createTextNode("Titulo"));
		var thTipo = document.createElement("th");
		thTipo.appendChild(document.createTextNode("Tipo"));
		var tbody = document.createElement("tbody");
		tbody.setAttribute("id","tablaProducciones");
		var producciones = video.productions;
		var produccion = producciones.next();
		while (produccion.done !== true){
			var trPro = document.createElement("tr");
			var tdEliminar = document.createElement("td");
			var eliminar = document.createElement("button");
			eliminar.setAttribute("type","button");
			eliminar.setAttribute("class","btn btn-danger");
			eliminar.setAttribute("value",produccion.value.title);
			eliminar.appendChild(document.createTextNode("Eliminar"));
			eliminar.addEventListener("click", deleteProduction);
			var tdTitulo = document.createElement("td");
			tdTitulo.appendChild(document.createTextNode(produccion.value.title));
			var tdTipo = document.createElement("td");
			var nomTipo = "";
			if (produccion.value instanceof Movie) {
				nomTipo = "Pelicula";
			}else{
				nomTipo = "Serie";
			}
			tdTipo.appendChild(document.createTextNode(nomTipo));
			tdEliminar.appendChild(eliminar);
			trPro.appendChild(tdEliminar);
			trPro.appendChild(tdTitulo);
			trPro.appendChild(tdTipo);
			tbody.appendChild(trPro);
			produccion = producciones.next();
		}
		var grupoBtn = document.createElement("div");
		grupoBtn.setAttribute("class","form-group d-flex justify-content-around");
		var cancelar = document.createElement("button");
		cancelar.setAttribute("type","button");
		cancelar.setAttribute("class","btn btn-primary");
		cancelar.appendChild(document.createTextNode("Cancelar"));
		//Añade eventos al hacer click sobre los botones del formulario creado y el buscador
		$(document).ready(function(){
			$("#buscador").on("keyup", function() {
			  var value = $(this).val().toLowerCase();
			  $("#tablaProducciones tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			  });
			});
		});
		cancelar.addEventListener("click", showHomePage);
		cancelar.addEventListener("click", function(){
													contenidoCentral.setAttribute("class","d-block");
													contenidoFormularios.setAttribute("class","d-none");
													});

		//se crea el formulario de borrado
		formulario.appendChild(leyenda);
		grupo.appendChild(buscador);
		grupo.appendChild(tabla);
		formulario.appendChild(grupo);
		tabla.appendChild(thead);
		tabla.appendChild(tbody);
		thead.appendChild(tr);
		tr.appendChild(thVacio);
		tr.appendChild(thTitulo);
		tr.appendChild(thTipo);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(grupoBtn);
		contenidoFormularios.appendChild(formulario);
		/* FIN DEL FORMULARIO DE ELIMINAR PRODUCCION */
	}//Fin de los if
}//Fin de formProducciones

//Oculta o muestra los div de movie o serie segun la opcion del formulario de producciones
function mostrarDIVS(){
	var opcioDiv = document.forms["addProduction"]["tipo"];
	var divM = document.getElementById("divMovie");
	var divS = document.getElementById("divSerie");
	if (opcioDiv.value == "0") {
		divM.style.display = "none";
		divS.style.display = "none";
	}else if(opcioDiv.value == "Movie"){
		divM.style.display = "block";
		divS.style.display = "none";
	}else{
		divM.style.display = "none";
		divS.style.display = "block";
	}//Fin del if
}//Fin de mostrarDIVS

//Añade campos al formulario con los datos del actor
function addReparto(nombre,contador){
	//Div en el que se va a añadir la estructura
	var divReparto = document.getElementById("divReparto");
	var divInputBtn = document.createElement("div");
	divInputBtn.setAttribute("class","input-group");
	divInputBtn.setAttribute("id","divActor"+contador+"");
	var divBtn = document.createElement("div");
	divBtn.setAttribute("class","input-group-prepend");
	var botonRemover = document.createElement("button");
	botonRemover.setAttribute("type","button");
	botonRemover.setAttribute("class","btn btn-sm btn-outline-secondary");
	botonRemover.appendChild(document.createTextNode("Remover"));
	//añade el evento al hacer click al boton de remover
	botonRemover.addEventListener("click",function(){
		var input = document.getElementById("divActor"+contador+"");
		//Quita el ultimo elemento del array
		arrayReparto.pop();
		divReparto.removeChild(input);
	});
	//INput readonly con el nombre del actor
	var act = document.createElement("input");
	act.setAttribute("class","form-control col-5");
	act.setAttribute("type","text");
	act.setAttribute("id","actor"+contador);
	act.setAttribute("value",nombre);
	act.readOnly = true;
	//Input para meter el papel del actor en la produccion
	var papel = document.createElement("input");
	papel.setAttribute("class","form-control col-3");
	papel.setAttribute("type","text");
	papel.setAttribute("id","papel"+contador);
	papel.setAttribute("placeholder","Papel en la produccion...");
	//Checkbox para saber si ese papel es principal o no
	var divCheckBtn = document.createElement("div");
	divCheckBtn.setAttribute("class","form-group-prepend col pl-5 pt-2");
	var check = document.createElement("input");
	check.setAttribute("class","form-check-input");
	check.setAttribute("type","checkbox");
	check.setAttribute("value","principal");
	check.setAttribute("id","principal"+contador);
	var labelCheck = document.createElement("label");
	labelCheck.setAttribute("class","form-check-label");
	labelCheck.setAttribute("for","principal"+contador);
	labelCheck.appendChild(document.createTextNode("¿Principal?"));
	//Se añade todo al formulario
	divInputBtn.appendChild(divBtn);
	divBtn.appendChild(botonRemover);
	divInputBtn.appendChild(act);
	divInputBtn.appendChild(papel);
	divInputBtn.appendChild(divCheckBtn);
	divCheckBtn.appendChild(check);
	divCheckBtn.appendChild(labelCheck);
	//Se añade todo al divReparto del formulario de producciones
	divReparto.appendChild(divInputBtn);
}//Fin de addReparto

//Valida los campos al enviar el formulario de añadir produccion
function validarProducciones(){
	//VALIDACION DE VARIABLES COMUNES A LOS TIPOS DE PRODUCCION
	//VARIABLES PARA EL TITULO Y SU VALIDACION
	var titulo = document.forms["addProduction"]["titulo"];
	var malTitulo = document.getElementById("titleMal");
	var tituloValido = validarCampoTexto(titulo);
	if(tituloValido == false){
		malTitulo.innerHTML = "El título no puede estar vacío";
	}
	//VARIABLES PARA LA FECHA Y SU VALIDACION
	var publicacion = document.forms["addProduction"]["publication"];
	var malPublicacion = document.getElementById("dateMal");
	var publicacionValida = validarCampoFecha(publicacion);
	if(publicacionValida == false){
		malPublicacion.innerHTML = "La fecha está mal introducida";
	}

	var fecha = new Date(publicacion.value.split("/")[1]+"/"+publicacion.value.split("/")[0]+"/"+publicacion.value.split("/")[2]);
	//VARIABLES PARA LA NACIONALIDAD Y SU VALIDACION
	var nacionalidad = document.forms["addProduction"]["nationality"];
	var malNacionalidad = document.getElementById("nationalityMal");
	var nacionalidadValida = validarCampoTexto(nacionalidad);
	if(nacionalidadValida == false){
		malNacionalidad.innerHTML = "La nacionalidad no puede estar vacía";
	}
	//VARIABLES PARA LA SIPNOSIS Y SU VALIDACION
	var sipnosis = document.forms["addProduction"]["synopsis"];
	var malSipnosis = document.getElementById("synopsisMal");
	var sipnosisValida = validarCampoTexto(sipnosis);
	if(sipnosisValida == false){
		malSipnosis.innerHTML = "La sipnosis no puede estar vacía";
	}
	//VARIABLES PARA LA IMAGEN Y SU VALIDACION
	var imagen = document.forms["addProduction"]["picture"];
	var malImagen = document.getElementById("pictureMal");
	var imagenValida = validarCampoRutaObligatorio(imagen);
	if(imagenValida == false){
		malImagen.innerHTML = "La ruta de la imagen no puede estar vacía";
	}
	//VARIABLES PARA LAS CATEGORIAS Y SU VALIDACION
	var malCategorias = document.getElementById("catMal");
	var categoriasValida = false;
	if(arrayCategorias.length == 0){
		malCategorias.innerHTML = "La producción necesita al menos una categoria";
		categoriasValida = false;
	}else{
		categoriasValida = true;
	}
	//VARIABLE PARA EL TIPO DE PRODUCCION
	var tipo = document.forms["addProduction"]["tipo"].value;
	if (tipo == "0") {
		//Si no se ha seleccionado ningun tipo no hace nada
		return false;
	} else if(tipo == "Movie"){
		//Si el tipo es movie
		//VARIABLES SOLO PARA LA MOVIE
		//VARIABLES PARA EL DIRECTOR Y SU VALIDACION
		var malDirector = document.getElementById("directorMal");
		var directorValido = false;
		if(arrayDir.length == 0){
			malDirector.innerHTML = "El director no puede estar vacío";
			directorValido = false;
		}else{
			directorValido = true;
		}
		//VARIABLES PARA LA LONGITUD Y SU VALIDACION
		var longitud = document.forms["addProduction"]["longitud"];
		var malLongitud = document.getElementById("longitudMal");
		var longitudValida = validarCampoNumeroOpcional(longitud);
		if(longitudValida == false){
			malLongitud.innerHTML = "La longitud debe ser un número";
		}
		//VARIABLES PARA LA LATITUD Y SU VALIDACION
		var latitud = document.forms["addProduction"]["latitud"];
		var malLatitud = document.getElementById("latitudMal");
		var latitudValida = validarCampoNumeroOpcional(latitud);
		if(latitudValida == false){
			malLatitud.innerHTML = "La latitud debe ser un número";
		}
		if (tituloValido && publicacionValida && nacionalidadValida && sipnosisValida && imagenValida && longitudValida && latitudValida && directorValido && categoriasValida) {
			//Se recogen y cran los ultimos parametros para la funcion
			var selectRecurso = document.forms["addProduction"]["recurso"].value;
			if (selectRecurso != "0") {
				//Se busca el recurso y se crea
				for (let index = 0; index < arrayRecursos.length; index++) {
					if (arrayRecursos[index].link == selectRecurso) {
						var recurso = new Resource(arrayRecursos[index].duration, arrayRecursos[index].link, arrayRecursos[index].audios, arrayRecursos[index].subtitles);
					}
				}
			}//Fin del if de recursos
			var coor = null;
			if(latitud.value != "" && longitud.value != ""){
				var coor = new Coordinate(latitud.value,longitud.value);
			}
			//Llama a la funcion con los parametros recogidos, los demas son nulos
			addNewProduction(tipo, titulo.value, fecha, nacionalidad.value, sipnosis.value, imagen.value, recurso || null, coor, null);
		}else{
			return false;
		}//Fin del if
	}else if(tipo == "Serie"){
		//Si el tipo es serie, tiene que recoger las temporadas
		var selectTemporada = document.forms["addProduction"]["temporada"].value;
		if (selectTemporada != "0") {
			//Se busca el recurso y se crea
			for (let index = 0; index < arraySeason.length; index++) {
				if (arraySeason[index].title == selectTemporada) {
					var temporada = new Season(arraySeason[index].title, arraySeason[index].episodes);
				}
			}
		}//Fin del if de recursos
		if (tituloValido && publicacionValida && nacionalidadValida && sipnosisValida && imagenValida && categoriasValida) {
			addNewProduction(tipo, titulo.value, fecha, nacionalidad.value, sipnosis.value, imagen.value, null, null, temporada || null);
		}else{
			return false;
		}
	}//FIn del if de los tipos
}//FIn de validarProducciones

//Añade al video system la produccion nueva y la añade, si existe no deja añadir
function addNewProduction(tipo, titulo, publicacion, nacionalidad, sipnosis, imagen, recurso, coor, temporada){
	//Si es movie tiene que recoger el director, el reparto
	//Si es serie tiene que recoger el reparto y las categorias
	if(tipo == "Movie"){
		try {
			//Se crea el objeto Movie
			var movie = new Movie(titulo, publicacion, nacionalidad, sipnosis, imagen, recurso, coor);
			try {
				//Se añade la produccion al video system
				video.addProduction(movie);
				try {
					//Se asignan las categorias a la produccion
					for (let index = 0; index < arrayCategorias.length; index++) {
						//Recorremos las categorias del sistema, si coincide alguna con la del array la añade
						var categorias = video.categories;
						var categoria = categorias.next();
						while (categoria.done !== true){
							if (arrayCategorias[index] == categoria.value.name) {
								video.assignCategory(categoria.value,movie);
							}
							categoria = categorias.next();
						}
					}//Fin del for de asignar categorias
					try {
						//Se asigna el director a la produccion
						for (let index = 0; index < arrayDir.length; index++) {
							var directores = video.directors;
							var director = directores.next();
							while (director.done !== true){
								//Recorremos los directores del sistema, si coincide alguna con la del array la añade
								if(director.value.lastName2 == null){
									director.value.lastName2 = " ";
								}
								if (arrayDir[index] == director.value.name+" "+director.value.lastName1+" "+director.value.lastName2) {
									//Si coincide lo añade a la produccion
									video.assignDirector(director.value,movie);
								}
								director = directores.next();
							}//Fin del while iterador
						}//Fin del for de asignar categorias
						//Se asignan el reparto a la produccion si hay
						if (arrayReparto.length > 0) {
							try {
								for (let index = 0; index < arrayReparto.length; index++) {
									//Recoge el nombre del actor, el papel y si es principal o no
									var nombre = document.forms["addProduction"]["actor"+index+""].value;
									var papel = document.forms["addProduction"]["papel"+index+""].value;
									var principal = document.forms["addProduction"]["principal"+index+""].checked;
									//Recorre los actores del sistema
									var actores = video.actors;
									var actor = actores.next();
									while (actor.done !== true){
										//Comprueba si coincide el input del formulario con el del iterador
										if(actor.value.lastName2 == null){
											actor.value.lastName2 = " ";
										}
										if (nombre == actor.value.name+" "+actor.value.lastName1+" "+actor.value.lastName2) {
											//Si coincide lo añade a la produccion
											video.assignActor(actor.value,movie,papel,principal);
										}
										actor = actores.next();
									}//Fin del while iterador
								}//Fin del for de asignar actor
							} catch (error) {
								alert("Error al asignar actores");
							}//Fin del try de assignActor
						}//FIn de if que comprueba el array de reparto
						//Si no ha ocurrido ningun error
						//Selecciona la zona debajo del menu horizontal de edicion y la muestra
						var contenidoCentral = document.getElementById("contenidoCentral");
						contenidoCentral.setAttribute("class","d-block");
						//Selecciona la zona para poner los formularios
						var contenidoFormularios = document.getElementById("contenidoFormularios");
						contenidoFormularios.setAttribute("class","d-none");
						showHomePage();
						categoriesMenuPopulate();
					} catch (error) {
						document.getElementById("directorMal").innerHTML = "El director ya tiene asignada esa producción";
						document.getElementById("directorMal").style.display = "block";
					}//Fin del try de assignDirector	
				} catch (error) {
					document.getElementById("catMal").innerHTML = "Ha ocurrido un problema al añadir categorias a la producción";
					document.getElementById("catMal").style.display = "block";
				}//Fin del try de assignCategory
			} catch (error) {
				document.getElementById("titleMal").innerHTML = "La producción '"+name+"' ya existe";
				document.getElementById("titleMal").style.display = "block";
			}//Fin del trye de addproduction
		} catch (error) {
			alert("Error al crear movie "+titulo+" "+nacionalidad+" "+publicacion+" "+sipnosis+" "+imagen+" "+recurso+" "+coor);
		}//Fin del try principal
	}else{
		try {
			//Se crea el objeto Serie
			var serie = new Serie(titulo, publicacion, nacionalidad, sipnosis, imagen, temporada);
			try {
				//Se añade la produccion al video system
				video.addProduction(serie);
				try {
					//Se asignan las categorias a la produccion
					for (let index = 0; index < arrayCategorias.length; index++) {
						//Recorremos las categorias del sistema, si coincide alguna con la del array la añade
						var categorias = video.categories;
						var categoria = categorias.next();
						while (categoria.done !== true){
							if (arrayCategorias[index] == categoria.value.name) {
								video.assignCategory(categoria.value,serie);
							}
							categoria = categorias.next();
						}
					}//Fin del for de asignar categorias
					//Se asignan el reparto a la produccion si hay
					if (arrayReparto.length > 0) {
						try {
							for (let index = 0; index < arrayReparto.length; index++) {
								//Recoge el nombre del actor, el papel y si es principal o no
								var nombre = document.forms["addProduction"]["actor"+index+""].value;
								var papel = document.forms["addProduction"]["papel"+index+""].value;
								var principal = document.forms["addProduction"]["principal"+index+""].checked;
								//Recorre los actores del sistema
								var actores = video.actors;
								var actor = actores.next();
								while (actor.done !== true){
									//Comprueba si coincide el input del formulario con el del iterador
									if(actor.value.lastName2 == null){
										actor.value.lastName2 = " ";
									}
									if (nombre == actor.value.name+" "+actor.value.lastName1+" "+actor.value.lastName2) {
										//Si coincide lo añade a la produccion
										video.assignActor(actor.value,serie,papel,principal);
									}
									actor = actores.next();
								}//Fin del while iterador
							}//Fin del for de asignar actor
						} catch (error) {
							alert("Error al asignar actores");
						}//Fin del try de assignActor
					}//FIn de if que comprueba el array de reparto
					//Si no ha ocurrido ningun error
					//Selecciona la zona debajo del menu horizontal de edicion y la muestra
					var contenidoCentral = document.getElementById("contenidoCentral");
					contenidoCentral.setAttribute("class","d-block");
					//Selecciona la zona para poner los formularios
					var contenidoFormularios = document.getElementById("contenidoFormularios");
					contenidoFormularios.setAttribute("class","d-none");
					showHomePage();
					categoriesMenuPopulate();
				} catch (error) {
					document.getElementById("catMal").innerHTML = "Ha ocurrido un problema al añadir categorias a la producción";
					document.getElementById("catMal").style.display = "block";
				}//Fin del try de assignCategory
			} catch (error) {
				document.getElementById("titleMal").innerHTML = "La producción '"+name+"' ya existe";
				document.getElementById("titleMal").style.display = "block";
			}//Fin del trye de addproduction
		} catch (error) {
			//Error al crear serie
		}//Fin del try principal
	}//Fin del if principal
	//Se limpia los arrays array
	while(arrayProducciones.length != 0){
		arrayProducciones.shift();
	}
	while(arrayDir.length != 0){
		arrayDir.shift();
	}
	while(arrayCategorias.length != 0){
		arrayCategorias.shift();
	}
	while(arrayReparto.length != 0){
		arrayReparto.shift();
	}
}//Fin de addNewProduction

//Desasigna la produccion de las categorias, actores y director y la elimina del sistema
function deleteProduction(){
	var pro = this.value;
	var eliminar = null;
	var encontrado = false;
	var producciones = video.productions;
	var produccion = producciones.next();
	while ((produccion.done !== true) && (!encontrado)){
		if (produccion.value.title == pro) {
			//Si la encuentra asigna el objeto con ese nombre a la variable eliminar
			eliminar = produccion.value;
			encontrado = true;
		}//Fin del if que compara el nombre
		produccion = producciones.next();
	}
	try {
		/* DESASIGNA LA PRODUCCION DE LAS CATEGORIAS EN LAS QUE ESTA */
		//Se recorre todas las categorias para quitar la produccion 
		var categorias = video.categories;
		var categoria = categorias.next();
		while (categoria.done !== true){
			//Se recorren las producciones de esa categoria
			var productions = video.getProductionsCategory(categoria.value);
			var production = productions.next();
			while (production.done !== true){
				//Si la produccion de esa categoria coincide con el titulo de la producion que vamos a eliminar
				//las desasigna de todas las categorias en las que este
				if(production.value.title == eliminar.title){
					video.deassignCategory(categoria.value,production.value);
				}
				production = productions.next();
			}//Fin del while de las producciones
			categoria = categorias.next();
		}//FIn del while de las categorias
		/* DESASIGNA LA PRODUCCION DEL DIRECTOR */
		//Se recorren los directores para quitar la produccion que vamos a eliminar
		//Muestra las producciones en las que esta asignado el actor
		var directores = video.directors;
		var director = directores.next();
		//Recorre todos los directores del sistema
		while (director.done !== true){
			//Para cada director hace un iterador con sus producciones
			var productions = video.getProductionsDirector(director.value);
			var production = productions.next();
			while (production.done !== true){
				//Si la produccion de ese director coincide con el titulo de la producion que vamos a eliminar
				if(production.value.title == eliminar.title){
					video.deassignDirector(director.value,production.value);
				}
				//Pasa a la siguiente produccion del director
				production = productions.next();
			}//Fin del while de las producciones del director
			//Pasa al siguiente director
			director = directores.next();
		}//Fin del while de los directores
		/* DESASIGNA LA PRODUCCION DE LOS ACTORES */
		//Obtiene todo el reparto de la produccion
		var elenco = video.getCast(eliminar);
		var actor = elenco.next();
		while (actor.done !== true){
			//Quitamos al actor de la produccion
			video.deassignActor(actor.value,eliminar);		
			actor = elenco.next();
		}//Fin del while
		/* ELIMINA EL OBJETO Y MUESTRA DE NUEVO EL CONTENIDO PRINCIPAL */
		//Elimina el objeto que se ha encontrado
		video.removeProduction(eliminar);
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
}//Fin de deleteProduction

/* FUNCIONES PARA LOS FORMULARIOS DE LOS RECURSOS */
//Muestra el formulario de las producciones
function formRecursos(tipo){
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
		formulario.setAttribute("name","addResource");
		formulario.setAttribute("action","");
		formulario.setAttribute("onsubmit","validarRecursos(); return false");
		formulario.setAttribute("method","post");
		var leyenda = document.createElement("legend");
		leyenda.appendChild(document.createTextNode("Añadir recurso"));
		//DURACION DEL RECURSO
		var grupo1 = document.createElement("div");
		grupo1.setAttribute("class","form-group");
		var labelDuration = document.createElement("label");
		labelDuration.setAttribute("for","duracion");
		labelDuration.appendChild(document.createTextNode("Duración*"));
		var inputDuration = document.createElement("input");
		inputDuration.setAttribute("type","text");
		inputDuration.setAttribute("class","form-control");
		inputDuration.setAttribute("id","duracion");
		inputDuration.setAttribute("onblur","validarCampoNumero(this)");
		inputDuration.setAttribute("placeholder","Introducir numeros en segundos");
		var malDuration = document.createElement("small");
		malDuration.setAttribute("class","form-text text-muted");
		malDuration.setAttribute("id","duracionMal");
		//ENLACE DEL RECURSO
		var grupo2 = document.createElement("div");
		grupo2.setAttribute("class","form-group");
		var labelLink = document.createElement("label");
		labelLink.setAttribute("for","link");
		labelLink.appendChild(document.createTextNode("Link del recurso*"));
		var inputLink = document.createElement("input");
		inputLink.setAttribute("type","text");
		inputLink.setAttribute("class","form-control");
		inputLink.setAttribute("id","link");
		inputLink.setAttribute("onblur","validarCampoURL(this)");
		inputLink.setAttribute("placeholder","http://www.yyyyyyyyy.yyy");
		var malLink = document.createElement("small");
		malLink.setAttribute("class","form-text text-muted");
		malLink.setAttribute("id","linkMal");
		//AUDIOS DEL RECURSO
		var grupo3 = document.createElement("div");
		grupo3.setAttribute("class","form-group");
		var labelAudios = document.createElement("label");
		labelAudios.setAttribute("for","audios");
		labelAudios.appendChild(document.createTextNode("Audios"));
		var inputAudios = document.createElement("input");
		inputAudios.setAttribute("type","text");
		inputAudios.setAttribute("class","form-control");
		inputAudios.setAttribute("id","audios");
		inputAudios.setAttribute("onblur","validarCampoArray(this)");
		inputAudios.setAttribute("placeholder","Español,Ingles,...");
		var malAudios = document.createElement("small");
		malAudios.setAttribute("class","form-text text-muted");
		malAudios.setAttribute("id","audiosMal");
		//SUBTITULOS DEL RECURSO
		var grupo4 = document.createElement("div");
		grupo4.setAttribute("class","form-group");
		var labelSubtitles = document.createElement("label");
		labelSubtitles.setAttribute("for","subtitles");
		labelSubtitles.appendChild(document.createTextNode("Subtitulos del recurso"));
		var inputSubtitles = document.createElement("input");
		inputSubtitles.setAttribute("type","text");
		inputSubtitles.setAttribute("class","form-control");
		inputSubtitles.setAttribute("id","subtitles");
		inputSubtitles.setAttribute("onblur","validarCampoArray(this)");
		inputSubtitles.setAttribute("placeholder","Español,Ingles,...");
		var malSubtitles = document.createElement("small");
		malSubtitles.setAttribute("class","form-text text-muted");
		malSubtitles.setAttribute("id","subtitlesMal");
		//BOTONES DEL FORMULARIO
		var grupoBtn = document.createElement("div");
		grupoBtn.setAttribute("class","form-group d-flex justify-content-around");
		var aceptar = document.createElement("button");
		aceptar.setAttribute("type","submit");
		aceptar.setAttribute("class","btn btn-primary");
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
		grupo1.appendChild(labelDuration);
		grupo1.appendChild(inputDuration);
		grupo1.appendChild(malDuration);
		grupo2.appendChild(labelLink);
		grupo2.appendChild(inputLink);
		grupo2.appendChild(malLink);
		grupo3.appendChild(labelAudios);
		grupo3.appendChild(inputAudios);
		grupo3.appendChild(malAudios);
		grupo4.appendChild(labelSubtitles);
		grupo4.appendChild(inputSubtitles);
		grupo4.appendChild(malSubtitles);
		grupoBtn.appendChild(aceptar);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(leyenda);
		formulario.appendChild(grupo1);
		formulario.appendChild(grupo2);
		formulario.appendChild(grupo3);
		formulario.appendChild(grupo4);
		formulario.appendChild(grupoBtn);
		contenidoFormularios.appendChild(formulario);
		/* FIN DEL FORMULARIO DE AÑADIR RECURSO */
	}else if (tipo == "delete") {
		var formulario = document.createElement("form");
		formulario.setAttribute("name","deleteResource");
		formulario.setAttribute("action","");
		formulario.setAttribute("onsubmit","return false");
		formulario.setAttribute("method","post");
		var leyenda = document.createElement("legend");
		var grupo = document.createElement("div");
		grupo.setAttribute("class","form-group");
		leyenda.appendChild(document.createTextNode("Eliminar recurso"));
		//SE CREA EL BUSCADOR 
		var buscador = document.createElement("input");
		buscador.setAttribute("class","form-control mb-3");
		buscador.setAttribute("type","text");
		buscador.setAttribute("id","buscador");
		buscador.setAttribute("placeholder","Buscar...");
		//SE CREA LA TABLA DE LOS RECURSOS
		var tabla = document.createElement("table");
		tabla.setAttribute("class","table table-bordered");
		tabla.setAttribute("name","recurso");
		tabla.setAttribute("id","recurso");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		var thVacio = document.createElement("th");
		var ocultar = document.createElement("button");
		ocultar.setAttribute("type","button");
		ocultar.setAttribute("class","btn btn-secondary");
		ocultar.appendChild(document.createTextNode("Mostrar/Ocultar"));
		ocultar.addEventListener("click", function(){
			var cont = document.getElementById("tablaRecursos");
			if(cont.style.display=="table-row-group"){
				cont.style.display = "none";
			}else{
				cont.style.display = "table-row-group";
			}
		});
		thVacio.appendChild(ocultar);
		var thLink = document.createElement("th");
		thLink.setAttribute("class","col-4");
		thLink.appendChild(document.createTextNode("Enlace"));
		var thDuration = document.createElement("th");
		thDuration.setAttribute("class","col-1");
		thDuration.appendChild(document.createTextNode("Duracion"));
		var thAudio = document.createElement("th");
		thAudio.setAttribute("class","col-3");
		thAudio.appendChild(document.createTextNode("Audios"));
		var thSub = document.createElement("th");
		thSub.setAttribute("class","col-3");
		thSub.appendChild(document.createTextNode("Subtitulos"));
		var tbody = document.createElement("tbody");
		tbody.setAttribute("id","tablaRecursos");
		for (let index = 0; index < arrayRecursos.length; index++) {
			var trLink = document.createElement("tr");
			var tdEliminar = document.createElement("td");
			tdEliminar.setAttribute("class","text-center");
			var eliminar = document.createElement("button");
			eliminar.setAttribute("type","button");
			eliminar.setAttribute("class","btn btn-danger");
			eliminar.setAttribute("value",arrayRecursos[index].link);
			eliminar.appendChild(document.createTextNode("Eliminar"));
			eliminar.addEventListener("click", deleteResource);
			var tdLink = document.createElement("td");
			tdLink.appendChild(document.createTextNode(arrayRecursos[index].link));
			var tdDuration = document.createElement("td");
			tdDuration.appendChild(document.createTextNode(arrayRecursos[index].duration));
			var tdAudio = document.createElement("td");
			tdAudio.appendChild(document.createTextNode(arrayRecursos[index].audios));
			var tdSub = document.createElement("td");
			tdSub.appendChild(document.createTextNode(arrayRecursos[index].subtitles));
			tdEliminar.appendChild(eliminar);
			trLink.appendChild(tdEliminar);
			trLink.appendChild(tdLink);
			trLink.appendChild(tdDuration);
			trLink.appendChild(tdAudio);
			trLink.appendChild(tdSub);
			tbody.appendChild(trLink);
		}
		var grupoBtn = document.createElement("div");
		grupoBtn.setAttribute("class","form-group d-flex justify-content-around");
		var cancelar = document.createElement("button");
		cancelar.setAttribute("type","button");
		cancelar.setAttribute("class","btn btn-primary");
		cancelar.appendChild(document.createTextNode("Cancelar"));
		//Añade eventos al hacer click sobre los botones del formulario creado y el buscador
		$(document).ready(function(){
			$("#buscador").on("keyup", function() {
			  var value = $(this).val().toLowerCase();
			  $("#tablaRecursos tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			  });
			});
		});
		cancelar.addEventListener("click", showHomePage);
		cancelar.addEventListener("click", function(){
													contenidoCentral.setAttribute("class","d-block");
													contenidoFormularios.setAttribute("class","d-none");
													});

		//se crea el formulario de borrado
		formulario.appendChild(leyenda);
		grupo.appendChild(buscador);
		grupo.appendChild(tabla);
		formulario.appendChild(grupo);
		tabla.appendChild(thead);
		tabla.appendChild(tbody);
		thead.appendChild(tr);
		tr.appendChild(thVacio);
		tr.appendChild(thLink);
		tr.appendChild(thDuration);
		tr.appendChild(thAudio);
		tr.appendChild(thSub);
		grupoBtn.appendChild(cancelar);
		formulario.appendChild(grupoBtn);
		contenidoFormularios.appendChild(formulario);
		/* FIN DEL FORMULARIO DE ELIMINAR RECURSO */
	}//FIN del if general
}//Fin de formRecursos

//Valida los campos al enviar el formulario de añadir produccion
function validarRecursos(){
	var duracion = document.forms["addResource"]["duracion"];
	var malDuracion = document.getElementById("duracionMal");
	var enlace = document.forms["addResource"]["link"];
	var malenlace = document.getElementById("linkMal");
	var audios = document.forms["addResource"]["audios"];
	var malAudios = document.getElementById("audiosMal");
	var subtitulos = document.forms["addResource"]["subtitles"];
	var malSubtitulos = document.getElementById("subtitlesMal");
	//Llama a las funciones de validar
	var duracionValida = validarCampoNumero(duracion);
	var enlaceValido = validarCampoURL(enlace);
	//Retorna un array
	var audiosValido = validarCampoArray(audios);
	var subtitulosValido = validarCampoArray(subtitulos); 

	if(duracionValida == false){
		malDuracion.innerHTML = "El duración debe ser un numero";
	}
	if(enlaceValido == false){
		malenlace.innerHTML = "La URL del enlace no es valida";	
	}
	if(audiosValido == null){
		malAudios.innerHTML = "Los audios se han introducido mal";	
	}
	if(subtitulosValido == null){
		malSubtitulos.innerHTML = "Los subtitulos se han introducido mal";	
	}
	if (duracionValida && enlaceValido && audiosValido && subtitulosValido) {
		var arrayAudios = null;
		var arraySubtitulos = null;
		if (audios.value != "") {
			arrayAudios = audios.value;
		}
		if (subtitulos.value != "") {
			arraySubtitulos = subtitulos.value;
		}
		addNewResource(duracion.value, enlace.value, arrayAudios, arraySubtitulos);
	}//Fin del if
}//FIn de validarProducciones

//Añade al video system la produccion nueva y la añade, si existe no deja añadir
function addNewResource(duration, link, audios, subtitles){
	try {
		var newResource = new Resource(duration, link, audios, subtitles);
		//EL ARRAY A LA QUE SE AÑADEN LOS RECURSOS ESTA EN js/vs.js AL COMIENZO DEL FICHERO
		arrayRecursos.push(newResource);
		//Muestra la pagina principal
		var contenidoFormularios = document.getElementById("contenidoFormularios");
		var contenidoCentral = document.getElementById("contenidoCentral");
		contenidoCentral.setAttribute("class","d-block");
		contenidoFormularios.setAttribute("class","d-none");
		showHomePage();
		categoriesMenuPopulate();
	} catch (error) {
		//IMPLEMENTAR
	}
}//Fin de addNewProduction

//Elimina una produccion seleccionada
function deleteResource(){
	//Recoge el value del boton pulsado
	var recurso = this.value;
	let index = 0;
	var encontrado = false;

	while ((index < arrayRecursos.length) && (!encontrado)){
		if (arrayRecursos[index].link == recurso) {
			//Si la encuentra asigna el objeto con ese nombre a la variable eliminar
			arrayRecursos.splice(index,1);
			encontrado = true;
			//Muestra la pagina principal
			var contenidoFormularios = document.getElementById("contenidoFormularios");
			var contenidoCentral = document.getElementById("contenidoCentral");
			contenidoCentral.setAttribute("class","d-block");
			contenidoFormularios.setAttribute("class","d-none");
			showHomePage();
			categoriesMenuPopulate();
		}//Fin del if que compara el nombre de la categoria con el valor del select
		index++;
	}//Fin del while
}//Fin de deleteProduction