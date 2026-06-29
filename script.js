const fechaBoda = new Date("September 5, 2026 17:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fechaBoda - ahora;

  if (distancia <= 0) {
    document.getElementById("dias").innerText = "0";
    document.getElementById("horas").innerText = "0";
    document.getElementById("minutos").innerText = "0";
    document.getElementById("segundos").innerText = "0";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((distancia / (1000 * 60)) % 60);
  const segundos = Math.floor((distancia / 1000) % 60);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}, 1000);

const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

function copiarCuenta(id) {
  const texto = document.getElementById(id).innerText;

  navigator.clipboard.writeText(texto).then(() => {
    alert("Cuenta copiada: " + texto);
  });
}

/*=========================
GALERIA
=========================*/

const galeria=document.querySelectorAll(".gallery-item");

const modal=document.getElementById("galleryModal");

const imagen=document.getElementById("galleryImage");

const cerrar=document.querySelector(".gallery-close");

const siguiente=document.querySelector(".gallery-next");

const anterior=document.querySelector(".gallery-prev");

let actual=0;

galeria.forEach((foto,index)=>{

foto.addEventListener("click",()=>{

actual=index;

abrirGaleria();

});

});

function abrirGaleria(){

modal.style.display="flex";

imagen.src=galeria[actual].src;

}

cerrar.onclick=()=>{

modal.style.display="none";

}

modal.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

}

siguiente.onclick=()=>{

actual++;

if(actual>=galeria.length){

actual=0;

}

abrirGaleria();

}

anterior.onclick=()=>{

actual--;

if(actual<0){

actual=galeria.length-1;

}

abrirGaleria();

}



new Swiper(".miGaleria",{

loop:true,

autoplay:{
delay:3000,
},

spaceBetween:20,

pagination:{
el:".swiper-pagination",
clickable:true,
},

breakpoints:{

0:{
slidesPerView:1
},

768:{
slidesPerView:2
},

1200:{
slidesPerView:3
}

}

});

/*==========================
MÚSICA
==========================*/

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let musicStarted = false;



// Botón de reproducir / pausar

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';

    } else {

        music.pause();
        musicButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';

    }

});

const hero = document.getElementById("hero");

const contenido = document.getElementById("contenido");

const btnAbrir = document.getElementById("abrirInvitacion");

btnAbrir.addEventListener("click",()=>{

    music.play();

    hero.style.opacity="0";

    setTimeout(()=>{

        hero.style.display="none";

        contenido.classList.remove("hidden");

        musicButton.style.display="flex";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },700);

});



const rsvpForm = document.getElementById("rsvpForm");

rsvpForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(rsvpForm);

  fetch("https://script.google.com/macros/s/AKfycbxddFz2zk93l6KgXouXRs6IlfXY6pQ0JhDjpASETd-ID07fO2T_ZUHKmjnaqSIEdA/exec", {
    method: "POST",
    mode: "no-cors",
    body: formData
  })
  .then(() => {
    alert("Gracias, tu confirmación fue registrada.");
    rsvpForm.reset();
  })
  .catch(() => {
    alert("Hubo un error. Intenta nuevamente.");
  });
});