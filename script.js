// Buscamos los pedacitos de nuestra página web que vamos a usar
let inputName = document.getElementById("name"); // Este es el cuadro donde escribes tu nombre
let inputAge = document.getElementById("age");   // Este es el cuadro donde pones tu edad
let btnForm = document.getElementById("btnForm"); // Este es el botón de "Enviar"
let alertBox = document.getElementById("alertBox"); // Esta es la caja donde aparecerán los mensajes

// Esta es una pequeña frase de ejemplo, aunque no la usamos directamente aquí
let message = (name, age) => `${name} tienes ${age} años`;

// Cuando alguien haga clic en el botón "Enviar", pasa esto:
btnForm.addEventListener("click", ()=>{
    // Guardamos el nombre que escribieron
    let userName = inputName.value;
    // Guardamos la edad que escribieron y nos aseguramos que sea un número
    let userAge = +inputAge.value;

    // Si la edad es menor de 18...
    if(userAge < 18){
        // Mostramos un mensaje especial para los más jóvenes
        alertBox.innerHTML= `<p>¡Hola ${userName}!, continúa aprendiendo y fortaleciendo tus habilidades a tus ${userAge} tienes mucho por aprender.</p>`
    }
    // Si la edad es 18 o más...
    else if (userAge >= 18){
        // Mostramos un mensaje diferente para los adultos
        alertBox.innerHTML= `<p>¡Hola ${userName}!, continúa explorando y fortaleciendo tus habilidades, sigue tu camino para aprender cosas nuevas.</p>`
    }
    // Si lo que escribieron no es una edad válida...
    else{
        // Mostramos un mensaje de error
        alertBox.innerHTML= `<p>Dato ingresado no válido.</p>`
    }
    
    // Hacemos que la caja del mensaje se vea
    alertBox.style.display= 'block'
    
    // Y después de 4 segundos, la caja del mensaje se esconde sola
    setTimeout( () => alertBox.style.display= 'none', 4000)
})