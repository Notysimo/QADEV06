//ejercicios del dom
document.getElementById("parrafo").innerHTML = "Creando tablas";
//agregando p


var invoqueTable = function(fil,col){
var tabla = document.createElement("TABLE");
for (a = 0; a < fil; a++)
{
var tr = document.createElement("TR");
tabla.appendChild(tr);
	for (i = 0; i < col; i++)
	{
	var td = document.createElement("TD");
	tr.appendChild(td);

	var t = document.createTextNode("Esto es una Celda "+ i);
	td.appendChild(t);
	}
}
document.body.appendChild(tabla);
};