
// Mostrar más productos en móvil

const btn = document.getElementById("btnVerMas");
const extras = document.querySelectorAll(".extra-mobile");

btn.addEventListener("click", () => {

  const ocultos = [...extras].filter(e => e.classList.contains("d-none"));

  if (ocultos.length > 0) {
    // Mostrar todos
    extras.forEach(e => e.classList.remove("d-none"));
    btn.innerText = "Ver menos";
  } else {
    // Ocultar y volver a mostrar solo 4
    extras.forEach(e => e.classList.add("d-none"));
    btn.innerText = "Ver más";
    window.scrollTo({ top: btn.offsetTop - 200, behavior: "smooth" });
  }
});



// mostrar lista 2

const btn1 = document.getElementById("btnVerMass");
const extras1 = document.querySelectorAll(".modo-mobile");

btn1.addEventListener("click", () => {

  const ocultos = [...extras1].filter(e => e.classList.contains("d-none"));

  if (ocultos.length > 0) {
    // Mostrar todos
    extras1.forEach(e => e.classList.remove("d-none"));
    btn1.innerText = "Ver menos";
  } else {
    // Ocultar y volver a mostrar solo 4
    extras1.forEach(e => e.classList.add("d-none"));
    btn1.innerText = "Ver más";
    window.scrollTo({ top: btn1.offsetTop - 200, behavior: "smooth" });
  }
});





















