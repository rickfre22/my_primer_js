const titulo = document.querySelector('#titulo'); 
const boton = document.querySelector('#btnBoton'); 

// 1. Creas la variable para llevar la cuenta
let contador = 0; 

boton.addEventListener('click', () => { 
    // 2. Incrementas el valor en 1
    contador++; 
    
    // 3. Muestras el nuevo valor en el HTML
    titulo.textContent = `Clicks: ${contador}`; 
});