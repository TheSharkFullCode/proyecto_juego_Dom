// import { saludar,mensaje } from "./javascript.js";
// saludar('Oscar');

// console.log(mensaje);

let Sharks = ["Santiago", "Javier", "Otniel", "Morales", "Oscar"]
let fish = ["Ángel", "Marcos", "Pedro", "Daniel", "Millard"]
// console.log(fish);
let sharksHungry = {}
function sharkAverage(hp, defensa, fuerza) {
    const min = 0;
    const max = 5;

    let resultado = Math.random() * (max - min) + min;
    resultado = parseInt(resultado);
     console.log(resultado);

    let nombre = Sharks[resultado];
     console.log(nombre);

      sharksHungry = {
      nombre: nombre,
      defensa: defensa,
      salud: hp,
      fuerza: fuerza,
    };
     console.log(sharksHungry);
     return sharksHungry;
  }

    let hp = 50;
    let defensa = 8;
    let fuerza = 20;
    
  sharkAverage(hp,defensa,fuerza)
 console.log(sharkAverage(hp,defensa,fuerza));

// -----------------------------------------------------
// ---------------------------------------------------------
 
let tigerFish = {};
function fishesBad(hp2,strong3,defens2) {

  let randomIndex = Math.floor(Math.random() * 5);
  let nombre = fish[randomIndex];
  console.log(nombre);

  tigerFish = {
    name: nombre,
    defensa: defens2,
    salud: hp2,
    fuerza: strong3,
  };
  console.log(tigerFish);
  
  return tigerFish;
}

let hp2 = 50;
let defens2 = 15;
let strong3 = 10;
fishesBad(hp2,defens2,strong3);
console.log(fishesBad(hp2,strong3,defens2));

// -------------------------------------------------------------------------------
// ---------------------------------------------------------------


// ---------------------------------------------------------

function atackfullShark(sharksHungry, tigerFish){

  if (tigerFish.salud >= 0) {
    let attackDamage = sharksHungry.fuerza - tigerFish.defensa;
    tigerFish.salud -= attackDamage;
     console.log(attackDamage);
    return attackDamage;
  }
}
atackfullShark(sharksHungry,tigerFish)
console.log(atackfullShark(sharksHungry,tigerFish));


  function fishesBad(hp2,strong3,defens2) {
    
    const randomIndex = Math.floor(Math.random() *6)
    console.log(randomIndex);
    let nombre = fish[randomIndex];
    console.log(nombre);
      
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
  console.log(fishesBad(hp2,strong3,defens2));
  
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// function attackfulTigerFish(sharksHungry, tigerFish) {
  
//   if (sharksHungry.salud > 0) {

//     let liveShark = tigerFish.fuerza - sharksHungry.defensa;
//     sharksHungry.salud -= liveShark;

//     console.log(liveShark);
//     atackfullShark(sharksHungry, tigerFish);
//     return liveShark

//   }else{
//     console.log(`esta parte no esta hecha`);
//   }
// }

// attackfulTigerFish(sharksHungry, tigerFish);
// console.log(attackfulTigerFish(tigerFish, sharksHungry));
function restaDefensa(sharksHungry, tigerFish) {
  let liveShark = tigerFish.fuerza - sharksHungry.defensa;
  sharksHungry.salud -= liveShark;
  console.log(liveShark);

  return sharksHungry;
}

//  ejemplo para los objetos
hp2 = 50;
strong3 = 10;
defens2 = 5;

 sharksHungry = {
  salud: hp2,
  fuerza: strong3,
  defensa: defens2
};

 tigerFish = {
  name: "Tiger Fish",
  defensa: defens2,
  fuerza: strong3,
  salud: hp2
};

console.log(restaDefensa(sharksHungry, tigerFish));




// document.getElementById("miBoton").addEventListener("click", funcionPrincipal);

// html
{/* <button onclick="cambiarImagen()">Cambiar imagen de fondo</button> */}


// ----------------------------------------------------
function attackfulTigerFish(sharksHungry, tigerFish) {
  
  if (sharksHungry.salud > 0) {
    let liveShark = tigerFish.fuerza - sharksHungry.defensa;
    sharksHungry.salud -= liveShark;

    // console.log("Vida del tiburón después de la resta: " + sharksHungry.salud);
    // console.log("Vida del pez tigre después de la resta: " + tigerFish.salud);
    // console.log(liveShark);

    atackfullShark(sharksHungry, tigerFish);
    return liveShark

  }else if (sharksHungry.salud <= 0) {
      alert(`¡${sharksHungry.nombre}, has muerto!, pero entras en tu segunda fase`);
      sharksHungry.salud = SecondLive;
      console.log();

      console.log(sharksHungry.salud);

      
    } 
    if (sharksHungry.salud === 0) {
      sharksHungry.salud = 1;
    }

        habilitys = {
        health: 3,
        boost: 2,
        leech: 50,
        fireBall: 24,
        ironBody: 8
      }
      console.log(habilitys);
      habilitysSelected = "health"
      if(habilitysSelected == "health"){

      }
}

attackfulTigerFish(sharksHungry, tigerFish);
console.log(attackfulTigerFish(tigerFish, sharksHungry));
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// function attackfulTigerFish(sharksHungry, tigerFish) {

    
//   if (sharksHungry.salud > 0) {
//       let liveShark = tigerFish.fuerza - sharksHungry.defensa;
//       sharksHungry.salud -= liveShark;  
      
//   }
  
// }
// attackfulTigerFish(sharksHungry,tigerFish)

// console.log(attackfulTigerFish(sharksHungry,tigerFish));









// habilitys = {
//   health: 3,
//   boost: 2,
//   leech: 50,
//   fireBall: 24,
//   ironBody: 8
// }

// habilitysSelected = "health"
// if(habilitysSelected == "health"){

// }
// console.log(sharksHungry.salud);

//         for (let i = 0; i < liveShark*2; i++) {
  
//             liveShark.salud++;               
//             // console.log(tigerFish.salud);
            
//           } 


function cambiarImagen() {
  var imagen = document.getElementById("imagenFondo");
  imagen.style.backgroundImage = "url('nueva-imagen.jpg')";
}
function cambiarImagen() {
  var imagen = document.getElementById("imagenFondo");
  imagen.style.backgroundImage = "url('nueva-imagen.jpg')";
}
 function otraFuncion1() {
  // Código de la primera función
}
 function otraFuncion2() {
  // Código de la segunda función
}
 function funcionPrincipal() {
  cambiarImagen();
  otraFuncion1();
  otraFuncion2();
}


function cambiarImagen() {
  // seccion3.style.backgroundImage = 'url("imagenes/goliath_tiger_fish_vector.jpg")';
  // seccion3.style.backgroundImage = 'url("imagenes/sharkFavorite.jpg")';
  seccion3.style.backgroundImage = 'url("imagenes/goliath_tiger_fish_vector.jpg")';
}
    // cambiarImagen2()
                // seccion3.style.backgroundImage = 'url("imagenes/sharkFavorite.jpg")'
              // Desactivar el botón 2 y activar el botón 1

//   function cambiarImagen2() {
//     seccion3.style.backgroundImage = 'url("imagenes/sharkFavorite.jpg")';
//   }

















// prueba de entrevista para programadores
for (let i = 0; i < 101; i++) {
  i++;
  console.log(i);  
  if(i % 3 === 0 ){
    i = 'fizz'
    console.log(i);
  }else if(i % 5 !== 0){
    i ='buzz';
    console.log(i);
  }else if(i % 3 !== 0 && i % 5 != 0){
    i = 'fizzBuzz'
    console.log(i);
  }
}