document.addEventListener("DOMContentLoaded", function(){

const cueva1= document.getElementById ('capa1')
const cueva2= document.getElementById ('capa2')
const cueva3= document.getElementById ('capa3')
const cueva4= document.getElementById ('capa4')
const cueva5= document.getElementById ('capa5')
const cueva6= document.getElementById ('capa6')
const cueva7= document.getElementById ('capa7')
const cueva8= document.getElementById ('capa8')

            const speed1 = 0.4; // El fondo se mueve más rápido
            const speed2 = 0.2;
            const speed3 = 0.1; // El frente se mueve más lento
            const speed4 = 0.1; // El frente se mueve más lento



window.addEventListener("scroll", funcionejemplo);
function funcionejemplo(){
console.log("scroll aplicado")
 const scrollOffset = window.scrollY;

 if (cueva1) cueva1.style.transform = `translateY(${scrollOffset * speed1}px) scale(${1 + scrollOffset * 0.0005})`;
 if (cueva2) cueva2.style.transform = `translateY(${scrollOffset * speed1}px) scale(${1 + scrollOffset * 0.0005})`;
 if (cueva3) cueva3.style.transform = `translateY(${scrollOffset * speed1}px) scale(${1 + scrollOffset * 0.0005})`;
 if (cueva4) cueva4.style.transform = `translateY(${scrollOffset * speed1}px) scale(${1 + scrollOffset * 0.0005})`;
 if (cueva5) cueva5.style.transform = `translateY(${scrollOffset * speed1}px) scale(${1 + scrollOffset * 0.0005})`;
 if (cueva6) cueva6.style.transform = `translateY(${scrollOffset * speed1}px) scale(${1 + scrollOffset * 0.0005})`;
 if (cueva7) cueva7.style.transform = `translateY(${scrollOffset * speed1}px) scale(${1 + scrollOffset * 0.0005})`;
 if (cueva8) cueva8.style.transform = `translateY(${scrollOffset * speed1}px) scale(${1 + scrollOffset * 0.0005})`;

}


})

