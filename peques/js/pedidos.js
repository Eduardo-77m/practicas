
// boton wtsap


document.querySelectorAll(".hacer-pedido").forEach(btn => {
  btn.addEventListener("click", function () {

    const card = btn.closest(".producto-card");

    const producto = card.querySelector(".fw-bold").innerText;
    const precio = card.querySelector(".price").innerText;
    const imagen = card.querySelector("img").src;

    // Si quieres cantidad fija:
    let cantidad = btn.dataset.cantidad || 1;

    const mensaje =
`Hola, quiero hacer un pedido:
📦 *Producto:* ${producto}
🔢 *Cantidad:* ${cantidad}
💵 *Precio:* ${precio}
🖼️ *Imagen:* ${imagen}

¿Está disponible?`;

    const numero = "51904435145"; // <-- CAMBIA AQUÍ TU NÚMERO

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
});







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




