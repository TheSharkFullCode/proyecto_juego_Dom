// alert("hello world")
export function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
export const mensaje = 'Bienvenido al modulo';


// -----------------------------------------------------
// aplicando estylos 
// -----------------------------------------------------
const mainPrincipal = document.createElement("div");
mainPrincipal.id = "mainPrincipal";

 const seccion1 = document.createElement("div");
seccion1.id = "seccion1";

 const form1 = document.createElement("form");
form1.action = "";
 const label1 = document.createElement("label");
label1.textContent = "Heroe Favorito";
form1.appendChild(label1);

form1.appendChild(document.createElement("br"));
form1.appendChild(document.createElement("br"));
 const label2 = document.createElement("label");
label2.setAttribute("for", "nombreUsuario");
label2.textContent = "Name";
form1.appendChild(label2);

const inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.value = ''

inputNombre.placeholder = "name";
inputNombre.id = "miInput";
form1.appendChild(inputNombre);

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
 console.log("🚀 ~ file: javascript.js:48 ~ seccion1:", seccion1)
//  ------------------------------------------------------------
 const seccion2 = document.createElement("div");
seccion2.id = "seccion2";
 const form2 = document.createElement("form");
form2.action = "";
 const label6 = document.createElement("label");
label6.textContent = "Rey demonio";
form2.appendChild(label6);
form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));
 const label7 = document.createElement("label");
label7.setAttribute("for", "nombreUsuario");
label7.textContent = "name";
form2.appendChild(label7);
 form2.appendChild(document.createElement("input"));
form2.lastChild.type = "text";
form2.lastChild.placeholder = "enemys Name";
form2.lastChild.id = "enemyName";

form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));
 const label8 = document.createElement("label");
label8.textContent = "hp";
form2.appendChild(label8);
 form2.appendChild(document.createElement("input"));
form2.lastChild.type = "text";
form2.lastChild.id = "enemyhp";
form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));
 const label9 = document.createElement("label");
label9.textContent = "str";
form2.appendChild(label9);
 form2.appendChild(document.createElement("input"));
form2.lastChild.type = "text";
form2.lastChild.id = "enemyStr";
form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));
 const label10 = document.createElement("label");
label10.textContent = "Defen";
form2.appendChild(label10);
 form2.appendChild(document.createElement("input"));
form2.lastChild.type = "text";
form2.lastChild.id = "enemyDefens";
 seccion2.appendChild(form2);
 const seccion3 = document.createElement("div");
seccion3.id = "seccion3";
 const seccion4 = document.createElement("div");
seccion4.id = "seccion4";
 const textarea1 = document.createElement("textarea");
textarea1.name = "";
textarea1.id = "pizarra1";
textarea1.readOnly = true;
textarea1.textContent = "";
textarea1.style.fontSize = "12px"
seccion4.appendChild(textarea1);
 console.log("🚀 ~ file: javascript.js:101 ~ textarea1:", textarea1)
 const textarea2 = document.createElement("textarea");
textarea2.name = "";
textarea2.id = "pizarra2";
textarea2.readOnly = true;
textarea2.textContent = "   ";
seccion4.appendChild(textarea2);
 const seccionBotones = document.createElement("div");
seccionBotones.id = "seccionBotones";
 const button1 = document.createElement("button");
button1.textContent = "Atack";
button1.id = 'botonAtaque';
console.log("🚀 ~ file: javascript.js:135 ~ button1:", button1)
seccionBotones.appendChild(button1);

 const button2 = document.createElement("button");
button2.textContent = "AtackEnemys";
button2.id = 'AtackEnemys'
// console.log("🚀 ~ file: javascript.js:141 ~ button2:", button2)
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
seccionBotones.style.justifyContent = 'space-around';

// Obtener el elemento select
const selectElement = document.createElement('select');
 // Crear las opciones
const options = [
  { value: 'health', label: 'Health: 3' },
  { value: 'boost', label: 'Boost: 2' },
  { value: 'leech', label: 'Leech: 50' },
  { value: 'fireBall', label: 'Fire Ball: 24' },
  { value: 'ironBody', label: 'Iron Body: 8' }
];
 // Recorrer las opciones y agregarlas al select
options.forEach(option => {
  const optionElement = document.createElement('option');
  optionElement.value = option.value;
  optionElement.textContent = option.label;
  selectElement.appendChild(optionElement);
});
let button3 = document.createElement("button");
button3.id = "startButton";
button3.textContent = "starGame";
document.body.appendChild(button3)
 // Agregar el select al documento
 seccion4.appendChild(selectElement);
//  document.getElementById("startButton").addEventListener("click", startGame);
// -----**[F u n c i o n e s]***-------------------------------------------------
// -----**[F u n c i o n e s]***-------------------------------------------------

let Sharks = ["Santiago", "Javier", "Otniel", "Morales", "Oscar"]
let fish = ["Ángel", "Marcos", "Pedro", "Daniel", "Millard"]
console.log(fish);

function StarGame() {

      
let sharksHungry = {};
function sharkAverage(hp, defensa, fuerza) {
    const min = 0;
    const max = 5;

    let resultado = Math.random() * (max - min) + min;
    resultado = parseInt(resultado);

    let nombre = Sharks[resultado];
     console.log(nombre);

     const inputNombre = document.getElementById('miInput')
     inputNombre.value = nombre;

    sharksHungry = {
      nombre: nombre,
      defensa: defensa,
      salud: hp,
      fuerza: fuerza,
    };
    console.log(sharksHungry);
    return sharksHungry;
  }

    // let hp = prompt("introduce el valor de vida que desa darle a tu personaje");
    // let strong = prompt("introduce el valor de ataque que desa darle a tu personaje");
    // let defens = prompt("introduce el valor defensa que desa darle a tu personaje");
    let hp = 50;
    let strong = 20;
    let defens = 8;
   
    const inputHP = document.getElementById('salud')
    inputHP.value = hp
    console.log(inputHP);
    
    const inputStr = document.getElementById('ataque')
    console.log(inputStr);
    inputStr.value = strong
    const inputDefens = document.getElementById('Defensa')
    console.log(inputDefens);
    inputDefens.value = defens  
   

    sharkAverage(hp,defens,strong)
    console.log(sharkAverage(hp,defens,strong));


const botonAtaque = document.getElementById("botonAtaque");

botonAtaque.addEventListener('click',function(){
    // alert(`Has atacado a: con un ataque de fuego`)
    const valorName = document.getElementById('miInput').value
    const valorAtaque = document.getElementById("ataque").value;
    console.log(valorAtaque);
    const valorDefensa = document.getElementById("Defensa").value;
    console.log(valorDefensa);
    const valorSalud = document.getElementById("salud").value;
    console.log(valorSalud);
    const textarea = document.getElementById("pizarra2");
    atackfullShark(sharksHungry,tigerFish);
    textarea.value += `Al parecer te ha atacado: ${valorName}, tienes: ${tigerSalud} de vida\n`;

        
})



// ---------[S e l e c c i o n a r   p e r s o n a j e s  a  mi  e n e m i g o]----------------------------------------------------------------------
// ----[S e l e c c i o n a r   p e r s o n a j e s  a  mi  e n e m i g o]----------------------------------------------------------------------
const buttonEnemy = document.getElementById('AtackEnemys')
buttonEnemy.addEventListener('click', ()=> {
    // alert("hello")
    const nameEnemy = document.getElementById('enemyName').value;
    const hpEnemy = document.getElementById('enemyhp').value;
    console.log(hpEnemy);
    const StrongEnemy = document.getElementById('enemyStr').value;
    console.log(StrongEnemy);
    const EnemysDefens = document.getElementById('enemyDefens').value;
    console.log(EnemysDefens);
    const textwo = document.getElementById("pizarra1");

    attackfulTigerFish(sharksHungry,tigerFish)
    textwo.value += `Te ha atacado el rey demonio: ${nameEnemy}, tines ${sharkSalud} de vida\n `



})



//-----------[Seleccion del p e r s o n a j e   E n e m i g  o] -----------------
//-----------[S e l e c c i o n    d e l p e r s o n a j e     E n e m i g  o] -----------------
let tigerSalud ="";  
let tigerFish = {};
let hp2 = 50;
let strong3 = 20;
let defens2 = 15;

function fishesBad(hp2,strong3,defens2) {
    const min = 0;
    const max = 5;
  const randomIndex = Math.floor(Math.random()* (max - min)) + min;
  console.log(randomIndex);

  let nombre = fish[randomIndex];
  const nameEnemy = document.getElementById('enemyName')
  nameEnemy.value = nombre;
  //   inputNombre.value = nombre;
  tigerFish = {
      name: nombre,
      defensa: defens2,
      fuerza: strong3,
      salud: hp2,
    };

  return tigerFish;
}

fishesBad(hp2,strong3,defens2); 

const enemyHP = document.getElementById('enemyhp')
enemyHP.value = hp2
console.log("🚀 ~ file: javascript.js:307 ~ enemyHP:", enemyHP)

const enemyStrong = document.getElementById('enemyStr')
enemyStrong.value = strong3
console.log("🚀 ~ file: javascript.js:308 ~ enemyStrong:", enemyStrong)

const enemyDefens = document.getElementById('enemyDefens')
enemyDefens.value = defens2
console.log("🚀 ~ file: javascript.js:309 ~ enemyDefens:", enemyDefens)


// ------------------------------------------------------
// ------------------------Ataque del Enemigo ---------Tiger Fish-------------------------------------
// --------Ataque del Enemigo ---------Tiger Fish-------------------------------------

let sharkSalud = enemyHP.value;
function attackfulTigerFish(sharksHungry, tigerFish) {

    let liveShark = tigerFish.fuerza - sharksHungry.defensa;
    sharksHungry.salud -= liveShark;         
    
    sharkSalud = sharksHungry.salud;        
    if (sharksHungry.salud > 0 ){
        
        console.log("🚀 ~ file: javascript.js:389 ~ attackfulTigerFish ~ sharkSalud:", sharkSalud)
        
        // console.log(sharkSalud);   
        
        

    }else if(sharksHungry.salud <= 0){
        alert('¡Has muerto!,pero puedes seleccionar una habilidad extra y volver al ataque')
        sharksHungry.salud = 1;

        for (let i = 0; i < hp*2; i++) {
  
            sharksHungry.salud++;               
            console.log(sharksHungry.salud);
            
          } 

    }
    
    return {sharksHungry, tigerFish}    
    
}


  // -----------------------------Atack Shark---------------------------------------------
 // ------------Atack Shark---------------------------------------------
  
  function atackfullShark(sharksHungry, tigerFish){

    if (tigerFish.salud >= 0) {

      let attackDamage = sharksHungry.fuerza - tigerFish.defensa;
      tigerFish.salud -= attackDamage;

      tigerSalud = tigerFish.salud;
      console.log("🚀 ~ file: javascript.js:404 ~ atackfullShark ~ tigerSalud:", tigerSalud)

    //   attackfulTigerFish(sharksHungry,tigerFish)
       
      return {sharksHungry,tigerFish}

    }

  }

  let habilitys = {
    health: 3,
    boost: 2,
    leech: 50,
    fireBall: 24,
    ironBody: 8
  }
  console.log(habilitys);
//   atackfullShark(sharksHungry,tigerFish)
//   console.log(atackfullShark(sharksHungry,tigerFish));//5

//   ------[f u n c i o n    botton  a t a c a r     enemys]----------------------------------------


}
StarGame()

// document.getElementById("startButton").addEventListener("click", ()=>{

//     function InitGame() {
//         // Código del juego
//         StarGame()
    
//         document.getElementById("startButton").addEventListener("click", () => {
            
//             button1.addEventListener("click", function() {
//                 // Desactivar el botón 1 y activar el botón 2
//                 button1.disabled = true;
//                 button2.disabled = false;
                
//                 StarGame();
//             });
          
//             button2.addEventListener("click", function() {
            
//               button2.disabled = true;
//               button1.disabled = false;
//             });
//           });

    




//       }
//       InitGame()

// })









