// alert("hello world")
const mainPrincipal = document.createElement("div");
mainPrincipal.id = "mainPrincipal";

 const seccion1 = document.createElement("div");
seccion1.id = "seccion1";

 const form1 = document.createElement("form");
form1.action = "";
 const label1 = document.createElement("label");
label1.textContent = "Rey demonio";
form1.appendChild(label1);

form1.appendChild(document.createElement("br"));
form1.appendChild(document.createElement("br"));
 const label2 = document.createElement("label");
label2.setAttribute("for", "nombreUsuario");
label2.textContent = "Name";
form1.appendChild(label2);
 form1.appendChild(document.createElement("input"));
form1.lastChild.type = "text";
form1.lastChild.placeholder = "";
form1.appendChild(document.createElement("br"));
form1.appendChild(document.createElement("br"));
 const label3 = document.createElement("label");
label3.textContent = "hp";
form1.appendChild(label3);
 form1.appendChild(document.createElement("input"));
form1.lastChild.type = "text";
form1.lastChild.id = "salud";
form1.appendChild(document.createElement("br"));
form1.appendChild(document.createElement("br"));
 const label4 = document.createElement("label");
label4.textContent = "str";
form1.appendChild(label4);
 form1.appendChild(document.createElement("input"));
form1.lastChild.type = "text";
form1.lastChild.id = "ataque";
form1.appendChild(document.createElement("br"));
form1.appendChild(document.createElement("br"));
 const label5 = document.createElement("label");
label5.textContent = "Defen";
form1.appendChild(label5);
 form1.appendChild(document.createElement("input"));
form1.lastChild.type = "text";
form1.lastChild.id = "Defensa";
 seccion1.appendChild(form1);
//  ------------------------------------------------------------
 const seccion2 = document.createElement("div");
seccion2.id = "seccion2";
 const form2 = document.createElement("form");
form2.action = "";
 const label6 = document.createElement("label");
label6.textContent = "Heroe Favorito";
form2.appendChild(label6);
form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));
 const label7 = document.createElement("label");
label7.setAttribute("for", "nombreUsuario");
label7.textContent = "name";
form2.appendChild(label7);
 form2.appendChild(document.createElement("input"));
form2.lastChild.type = "text";
form2.lastChild.placeholder = "";
form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));
 const label8 = document.createElement("label");
label8.textContent = "hp";
form2.appendChild(label8);
 form2.appendChild(document.createElement("input"));
form2.lastChild.type = "text";
form2.lastChild.id = "salud";
form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));
 const label9 = document.createElement("label");
label9.textContent = "str";
form2.appendChild(label9);
 form2.appendChild(document.createElement("input"));
form2.lastChild.type = "text";
form2.lastChild.id = "ataque";
form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));
 const label10 = document.createElement("label");
label10.textContent = "Defen";
form2.appendChild(label10);
 form2.appendChild(document.createElement("input"));
form2.lastChild.type = "text";
form2.lastChild.id = "Defensa";
 seccion2.appendChild(form2);
 const seccion3 = document.createElement("div");
seccion3.id = "seccion3";
 const seccion4 = document.createElement("div");
seccion4.id = "seccion4";
 const textarea1 = document.createElement("textarea");
textarea1.name = "";
textarea1.id = "pizarra1";
textarea1.readOnly = true;
textarea1.textContent = "aqui va el valor de los inputs seccion1";
seccion4.appendChild(textarea1);
 const textarea2 = document.createElement("textarea");
textarea2.name = "";
textarea2.id = "pizarra2";
textarea2.readOnly = true;
textarea2.textContent = "aqui va el valor de pizarra 2";
seccion4.appendChild(textarea2);
 const seccionBotones = document.createElement("div");
seccionBotones.id = "seccionBotones";
 const button1 = document.createElement("button");
button1.textContent = "Atack";
seccionBotones.appendChild(button1);
 const button2 = document.createElement("button");
button2.textContent = "Atack Enemys";
seccionBotones.appendChild(button2);
 seccion4.appendChild(seccionBotones);
 mainPrincipal.appendChild(seccion1);
mainPrincipal.appendChild(seccion2);
mainPrincipal.appendChild(seccion3);
document.body.appendChild(mainPrincipal);
document.body.appendChild(seccion4);

// -----------------------------------------------

// const mainPrincipal = document.getElementById('#mainPrincipal');
mainPrincipal.style.display = 'flex';
mainPrincipal.style.border = 'solid firebrick';
mainPrincipal.style.height = '200px';
mainPrincipal.style.justifyContent = 'center';
mainPrincipal.style.gap = '1px';
mainPrincipal.style.backgroundColor = 'rgb(135, 206, 250)';


mainPrincipal.style.padding = '20px';
//  const seccion1 = document.getElementById('seccion1');
// ------[S e c c i o n  1]------------------------------------------------------
seccion1.style.display = 'flex';
seccion1.style.border = 'solid blue';
seccion1.style.height = '220px';
seccion1.style.width = '400px';
seccion1.style.borderRadius = '3px';
seccion1.style.backgroundColor = 'rgb(255, 213, 79)';



// --------------------------------------------------------
// ------[S e c c i o n  2]------------------------------------------
// const seccion2 = document.getElementById('seccion2');
seccion2.style.width = '400px';
seccion2.style.display = 'flex';
seccion2.style.height = '220px';
seccion2.style.border = 'solid red';
seccion2.style.backgroundColor = 'rgb(255, 213, 79)';

// --------------------------------------------
// ------[S e c c i o n  3]------------------------------------------
// const seccion3 = document.getElementById('seccion3');
seccion3.style.width = '380px';
seccion3.style.height = '200px';
seccion3.style.border = 'solid orange';
seccion3.style.backgroundImage = 'url("imagenes/sharkFavorite.jpg")';
seccion3.style.backgroundSize = 'cover';
seccion3.style.backgroundRepeat = 'no-repeat';
seccion3.style.backgroundPosition = 'center';
seccion3.style.imageRendering = '100px';
seccion3.style.imageRendering = '100px';


// ------[S e c c i o n  4]------------------------------------------

//  const seccion4 = document.getElementById('seccion4');
seccion4.style.width = '850px';
// seccion4.style.border = 'solid darkorchid';
seccion4.style.height = '200px';
seccion4.style.marginLeft = '15px';
// --------------------------------------------
// ------[ T e x t e r e a  4]------------------------------------------
const textarea = document.querySelector('textarea');
textarea.style.width = '410px';
textarea.style.height = '100px';
textarea.style.resize = 'none';

const textareaT2 = document.getElementById('pizarra2');
textareaT2.style.width = '410px';
textareaT2.style.height = '100px';
textareaT2.style.resize = 'none';

// -----------------------------------------------
//--------[S e c c i o n  B o t o n e s ]-----------****

seccionBotones.style.display = 'flex';
seccionBotones.style.justifyContent = 'space-evenly';

