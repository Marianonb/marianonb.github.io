$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      const obj = JSON.parse(data)
      console.log(data);
      document.getElementById('demo');
    }
  });


    // // Obtiene una referencia al botón
    // var miBoton = document.getElementById("miBoton");
    // var miBoton2 = document.getElementById("miBoton2");
    // var miBoton3 = document.getElementById("miBoton3");

    // // Asigna una función al evento "click" del botón
    // if(miBoton || miBoton2 || miBoton3){
    // miBoton.addEventListener("click", function() {
    //     this.innerHTML = '<p>Mi verdadera pasión es mi faceta como aprendiz autodidacta. Me encanta crear pequeños proyectos que me permitan explorar y aprender nuevos métodos y técnicas. No me limito a un solo campo de estudio, siempre estoy en busca de nuevos desafíos que me permitan crecer en diferentes áreas y así poder enfrentar cualquier situación con confianza y habilidad. Mi objetivo es ser especialista en cada sector en el que me involucre y estar en constante mejora para poder ofrecer lo mejor de mí en cualquier situación. </p>' 
    // });
    // miBoton2.addEventListener("click", function() {
    //   this.innerHTML = '<p>Tambien disfruto de la lectura de libros de autoconocimiento y autosuperación, así como de temas relacionados con la informática en general. Me encanta aprender cosas nuevas y encontrar maneras de crecer como persona y profesional. La lectura es una forma maravillosa de expandir mi conocimiento y ampliar mi perspectiva del mundo.</p>'
    //   });
    //   miBoton3.addEventListener("click", function() {
    //     this.innerHTML = '<p>Una de mis actividades favoritas es salir a comer con mis amigos cercanos. No tenemos un lugar en particular al que siempre vayamos, nos gusta explorar nuevos restaurantes y probar diferentes tipos de comida en distintos lugares. La espontaneidad es parte de lo que hace que estas salidas sean tan divertidas y emocionantes. Disfrutamos de la oportunidad de experimentar con diferentes comidas y lugares, mientras compartimos momentos agradables juntos.</p>'
    //   });
    // }

    // Obtiene una referencia al botón
var miBoton = document.getElementById("miBoton");
var miBoton2 = document.getElementById("miBoton2");
var miBoton3 = document.getElementById("miBoton3");

// Agrega una variable para controlar si el contenido está abierto o cerrado
var abierto = false;

// Asigna una función al evento "click" del botón
if(miBoton || miBoton2 || miBoton3){
  miBoton.addEventListener("click", function() {
    if (!abierto) {
      this.innerHTML = '<p>Mi verdadera pasión es mi faceta como aprendiz autodidacta. Me encanta crear pequeños proyectos que me permitan explorar y aprender nuevos métodos y técnicas. No me limito a un solo campo de estudio, siempre estoy en busca de nuevos desafíos que me permitan crecer en diferentes áreas y así poder enfrentar cualquier situación con confianza y habilidad. Mi objetivo es ser especialista en cada sector en el que me involucre y estar en constante mejora para poder ofrecer lo mejor de mí en cualquier situación. </p>';
      abierto = true;
    } else {
      this.innerHTML = 'Obtener mas informacion sobre mi Descripcion';
      abierto = false;
    }
  });
  
  miBoton2.addEventListener("click", function() {
    if (!abierto) {
      this.innerHTML = '<p>Tambien disfruto de la lectura de libros de autoconocimiento y autosuperación, así como de temas relacionados con la informática en general. Me encanta aprender cosas nuevas y encontrar maneras de crecer como persona y profesional. La lectura es una forma maravillosa de expandir mi conocimiento y ampliar mi perspectiva del mundo.</p>';
      abierto = true;
    } else {
      this.innerHTML = 'Obtener mas informacion sobre mi Hobbies';
      abierto = false;
    }
  });
  
  miBoton3.addEventListener("click", function() {
    if (!abierto) {
      this.innerHTML = '<p>Una de mis actividades favoritas es salir a comer con mis amigos cercanos. No tenemos un lugar en particular al que siempre vayamos, nos gusta explorar nuevos restaurantes y probar diferentes tipos de comida en distintos lugares. La espontaneidad es parte de lo que hace que estas salidas sean tan divertidas y emocionantes. Disfrutamos de la oportunidad de experimentar con diferentes comidas y lugares, mientras compartimos momentos agradables juntos.</p>';
      abierto = true;
    } else {
      this.innerHTML = 'Obtener mas informacion sobre mi Extras';
      abierto = false;
    }
  });
}
