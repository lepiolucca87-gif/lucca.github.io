/*==============================
  LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});


/*==============================
  HEADER AL HACER SCROLL
==============================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.95)";
        header.style.height = "80px";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.60)";
        header.style.height = "90px";
        header.style.boxShadow = "none";

    }

});


/*==============================
  CONTADORES
==============================*/

const counters = document.querySelectorAll(".contador");

const iniciarContadores = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 120;

        const update = () => {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.textContent = target.toLocaleString();

            }

        };

        update();

    });

};

let contadorIniciado = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".estadisticas");

    if (!stats || contadorIniciado) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        iniciarContadores();

        contadorIniciado = true;

    }

});


/*==============================
  BOTÓN SUBIR
==============================*/

const subir = document.querySelector(".subir");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        subir.style.opacity = "1";
        subir.style.pointerEvents = "all";

    } else {

        subir.style.opacity = "0";
        subir.style.pointerEvents = "none";

    }

});
/*=========================================
    ANIMACIONES AL HACER SCROLL
=========================================*/

const elementos = document.querySelectorAll(
".titulo, .plato, .foto, .reseña, .estadistica, .item, .dato, .formulario"
);

const mostrarElementos = () => {

    elementos.forEach((elemento) => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }

    });

};

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(60px)";
    elemento.style.transition = ".8s ease";

});

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();


/*=========================================
    SCROLL SUAVE DEL MENÚ
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach((enlace) => {

    enlace.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================
    EFECTO HOVER EN TARJETAS
=========================================*/

const tarjetas = document.querySelectorAll(
".plato, .foto, .reseña"
);

tarjetas.forEach((tarjeta) => {

    tarjeta.addEventListener("mousemove", (e) => {

        const rect = tarjeta.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotY = (x - rect.width / 2) / 25;

        const rotX = -(y - rect.height / 2) / 25;

        tarjeta.style.transform =
            `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});


/*=========================================
    EFECTO BOTONES
=========================================*/

document.querySelectorAll(
".btn-principal, .btn-secundario, .btn-mini, .btn-header"
).forEach((boton) => {

    boton.addEventListener("mouseenter", () => {

        boton.style.transition = ".35s";

        boton.style.transform = "translateY(-5px) scale(1.03)";

    });

    boton.addEventListener("mouseleave", () => {

        boton.style.transform = "translateY(0) scale(1)";

    });

});


console.log("✅ Salitre Premium cargado correctamente.");
/*========== LIGHTBOX ==========*/

const imagenes=document.querySelectorAll(".galeria-img");

const lightbox=document.querySelector(".lightbox");

const imagenGrande=document.getElementById("imagenGrande");

const cerrar=document.querySelector(".cerrar");

imagenes.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        imagenGrande.src=img.src;

    });

});

cerrar.onclick=()=>{

    lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}