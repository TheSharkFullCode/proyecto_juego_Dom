// alert("hello world");

// Los valores con los que funciona son los siguientes:


// console.log(`-------------------------------------------------`);
// Crear una función para comenzar el juego.
// Tened en cuenta que a lo mejor es posible que quizás podáis llegar a necesitar en un caso muy muy extremo alguna otra variable.
// Haz una función para crear a tu personaje y dentro de ella crea un objeto con la siguiente estructura:

// · Hacer un random para coger una de las posiciones del array de nombres.
// · Filtrar el array de nombres a otro para que solo contenga el de la posición aleatoria.
// · Ese será el nombre que deberá aparecer.

// Podéis probar vuestros propios valores si queréis.


let habilitys = {
    health: 3,
    boost: 2,
    leech: 50,
    fireBall: 24,
    ironBody: 8
  }
  
  // Crear un array con los nombres de tus compañeros (strings).
  let Sharks = ["Santiago", "Javier", "Otniel", "Morales", "Oscar"]
  // Crear un array con los nombres de los profesores (strings).
  let fish = ["Ángel", "Marcos", "Pedro", "Daniel", "Millard"]
  console.log(Sharks,fish);
  
  
  
  function assasinSharkInit() {

    let sharksHungry = {};

    let SecondLive = 1;
    // let endGame = "";/*------------------------------------------->*/
    
    let liveTiger2 = 0;

    function sharkAverage(hp, defens, strong) {
      min = 0;
      max = 5;

      let result = Math.random() * (max - min) + min;
      result = parseInt(result);
      
      console.log(result);

      let nombre = Sharks[result];

      console.log(nombre);


      sharksHungry = {
        name: nombre,
        defensa: defens,
        salud: hp,
        strong: strong,
      }
      console.log(sharksHungry);
  
      return sharksHungry
    }
  
    let hp = 50;
    let defens = 8;
    let strong = 20;
    // let hp = prompt("introduce el valor de vida que desa darle a tu personaje");
    // let strong = prompt("introduce el valor de ataque que desa darle a tu personaje");
    // let defens = prompt("introduce el valor defensa que desa darle a tu personaje");
    // let Jugador ="";
    
    sharkAverage(hp, defens, strong);
    console.log(sharkAverage(hp,defens,strong));
    // console.log(sharkAverage(hp,defens,strong));
    /*
    *
    */
    let tigerFish = {};
    function fishesBad() {
      min = 0;
      max = 5;
      let result = Math.random() * (max - min) + min;
      result = parseInt(result);
      let nombre = fish[result];
      console.log(nombre);
  
      // let hp2 = prompt("introduce el valor de salud que desa darle a tu Enemigo");
      // let strong3 = prompt("introduce el valor de fuerza que desa darle a tu Enemigo");
      // let defens4 = prompt("introduce el valor defensa que desa darle a tu Enemigo");
      let hp2 = 50;
      let defens2 = 15;
      let strong3 = 10;
      
      tigerFish = {
        name: nombre,
        defensa: defens2,
        salud: hp2,
        fuerza: strong3,
      }
  
      liveTiger2 = tigerFish.salud; //
  
      return tigerFish
    }
    fishesBad();
    console.log(fishesBad());
  
    /*--------Ataque del Enemy------TigerFish---------------------->*/
    function attackfulTigerFish(sharksHungry, tigerFish) {
      
      //100             tiburon: 8   
      if( sharksHungry.salud > 0){
  
        let liveShark =  tigerFish.fuerza - sharksHungry.defensa 
        sharksHungry.salud = sharksHungry.salud - liveShark;
        atackfullShark(sharksHungry,tigerFish)
  
      // console.log(tigerFish); /*----aqui tengo un bucle--esto lo estoy mandando a cero----->*/
  
      }else if(SecondLive <= 1){
  
        console.log('te han derrotado');
        
      }else{
        // sharkAverage = false;
        // console.log('entras en tu segunda fase');
      }
      console.log(sharksHungry,tigerFish);
  
  
    }
  
    attackfulTigerFish(sharksHungry, tigerFish)
    /*
    *
    * 
    * */
  
    /*---------Entrando en el ataque de mi enemigo------------------>*/
    function atackfullShark(sharksHungry, tigerFish) {
  
      if (tigerFish.salud > 0) {
        
        let livetigerFishes = sharksHungry.strong - tigerFish.defensa
        tigerFish.salud = tigerFish.salud - livetigerFishes 
  
        attackfulTigerFish(sharksHungry, tigerFish);
        
    } else if (SecondLive === 1) {
        
        for (let i = 0; i < liveTiger2*2; i++) {
  
          tigerFish.salud++;               
          // console.log(tigerFish.salud);
          
        }      
          // alert("the player to be in second live y tienes la opción de elegir entre obtener el triple de vida o un boost de fuerza y defensa")
          // habilitysSelected = prompt("introduce una habilidad");
  
        let habilitys = {
          health: 3,
          boost: 2,
          leech: 50,
          fireBall: 24,
          ironBody: 8
        }
  
        habilitysSelected = "health"
  
        //console.log(habilitys[habilitysSelected]);
          //aqui para acceder a mi objeto tuve que poner el nombre de mi objeto mas en corchete su valor .. porque es un string
          if(habilitysSelected == "health" ){
              
            console.log(`has seleccionado`+""+habilitys[habilitysSelected]);
            dupliValor = habilitys[habilitysSelected];
  
                  tigerFish.salud *= habilitys[habilitysSelected]
  
                  
                  // tigerFish.fuerza *= habilitys[habilitysSelected]
                  
                  // console.log();
                  // console.log("Estas usando mal tu habilidad");
                  
                }else if(habilitysSelected == boost){
                  tigerFish.defensa *= habilitys[habilitysSelected]
               }
  
  
  
        // Object.hasOwn(habilitys);
        
        
        tigerFish.fuerza *=1.75    
          SecondLive=2;
  
          console.log(`The player to be in seconLive`);   
          console.log(tigerFish);
  
        
        attackfulTigerFish(sharksHungry, tigerFish);
  
      }
   
  
  
  
    }
  
    atackfullShark(sharksHungry, tigerFish);
  
  
  }

  assasinSharkInit();
  console.log("🚀 ~ file: main.js:230 ~ assasinSharkInit:", assasinSharkInit)
  
  
  
  
  
  
  // console.log(`----------------------------------------------`);
  
  //(1) Crea una función para el ataque del enemigo.
  //(2) Dentro de la función haz que a la vida de tu personaje se le reste el ataque del enemigo menos la defensa del personaje.
  // (3) Repite los pasos anteriores para crear la función de ataque de tu personaje, pero esta vez debe bajarle la vida al enemigo.
  
  // console.log(`----------------------------------------------`);
  // Haz que en la función del ataque de tu personaje compruebe si el enemigo todavía tiene vida (hp).
  
  // Si aún le queda vida, poner la lógica de la resta de la vida y llamar a la función de ataque.
  
  // Si no tiene vida (hp), comprobar si está en la segunda fase o no, y si no está en la segunda fase entonces:
  // duplica la vida del enemigo, debes mostrar por consola como aumenta su vida de 1 en 1.
  // multiplica su ataque por 1.75
  // saca un alert para advertir al jugador de que el enemigo ha empezado su segunda fase, y que tendrá la opción de elegir entre obtener el triple de vida o un boost de fuerza y defensa
  
  // Haz el código necesario para que el jugador escriba una de las opciones health o boost.
  // Comprueba si el string que ha puesto el jugador está dentro del objeto habilidades y si no es ninguna de las palabras anteriores, que salga un mensaje diciendole que lo ha usado mal.
  
  
  // la lógica de estas habilidades será seleccionar la key del objeto de habilidades y multiplicar su valor por la propiedad del personaje hp o str y def.
  
  
  // Al tener el enemigo toda la vida recuperada, vuelve a atacar (llamar a la función de ataque del enemigo).
  
  // Si yas está en la segunda fase, entonces poned un alet que diga que has derrotado a las fuerzas del mal.
  
  // La función de ataque del enemigo deberá comprobar si al jugador le queda vida:
  // Si le queda vida, poned la resta de su vida y llamad a la función de ataque del jugador.
  // Si no le queda vida y el enemigo no está en segunda fase, mostrar por consola ("Has perdido").
  // Si no le queda vida y el enemigo está en segunda fase, mostrar un alert que diga que te han derrotado pero que aún puedes usar una última habilidad.
  
  // Poner un prompt para recoger el nombre de la habilidad.
  
  // Comprobar que lo que ha escrito existe dentro del objeto de habilidades.
  
  // Si está, reducirle la vida al enemigo el porcentaje del número que haya en el valor de la habilidad y sumarle eso mismo a la vida de vuestro personaje.
  
  // Si no está, hacer un alert que diga que no existe es habilidad.
  // Llamar a la función de ataque del jugador.
  
  
  
  
  
  