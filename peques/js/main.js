// CLICK EN CARD
document.querySelectorAll('.producto-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    window.location.href = `producto.html?id=${id}`;
  });
});

// CARGAR DETALLE
if (window.location.pathname.includes("producto.html")) {
  const id = new URLSearchParams(window.location.search).get("id");
  const p = productos[id];

  if (p) {
    document.getElementById("nombre").textContent = p.nombre;
    document.getElementById("precio").textContent = p.precio;
    document.getElementById("descripcion").textContent = p.descripcion;
    document.getElementById("imgProducto").src = p.img;
    document.getElementById("btnWhatsapp").href = p.whatsapp;
  }
}
