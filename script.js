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

abrir();

});

});

function abrir(){

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

abrir();

}

anterior.onclick=()=>{

actual--;

if(actual<0){

actual=galeria.length-1;

}

abrir();

}

new Swiper(".galeriaSwiper",{

loop:true,

spaceBetween:20,

autoplay:{
delay:3500,
disableOnInteraction:false,
},

pagination:{
el:".swiper-pagination",
clickable:true,
},

breakpoints:{

0:{
slidesPerView:1,
},

768:{
slidesPerView:2,
},

1100:{
slidesPerView:3,
}

}

});