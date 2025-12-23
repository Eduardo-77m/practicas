const telefono = "51915177144";

document.addEventListener('click', function (e) {

  const btn = e.target.closest('.hacer-pedido');
  if (!btn) return;

  e.preventDefault();

  const card = btn.closest('.producto-card');

  const nombre = card.dataset.nombre;
  const precio = card.dataset.precio;

  let imgSrc = "";

  // 👉 CASO 1: catálogo (imagen dentro de la card)
  const imgCard = card.querySelector('img');
  if (imgCard) {
    imgSrc = imgCard.getAttribute('src');
  }

  // 👉 CASO 2: producto.html (imagen grande)
  if (!imgSrc) {
    const imgDetalle = document.getElementById('imgProducto');
    if (imgDetalle) {
      imgSrc = imgDetalle.getAttribute('src');
    }
  }

  // convertir a URL pública
  const imgUrl = imgSrc
    ? window.location.origin + '/' + imgSrc
    : '';

  const mensaje =
    `Hola, quiero hacer un pedido:%0A%0A` +
    `📦 Producto: ${nombre}%0A` +
    `💰 Precio: ${precio}%0A` +
    (imgUrl ? `%0A🖼️ Imagen:%0A${imgUrl}` : '');

  window.open(
    `https://wa.me/${telefono}?text=${mensaje}`,
    '_blank'
  );
});


// CLICK GENERAL
document.addEventListener('click', function (e) {

  
  // 👉 CLICK EN CARD (CATÁLOGO)
  const card = e.target.closest('.producto-card');
  if (card && card.dataset.id) {
    window.location.href = `producto.html?id=${card.dataset.id}`;
  }
});





// CARGAR PRODUCTO EN producto.html
if (window.location.pathname.includes("producto.html")) {

  const id = new URLSearchParams(window.location.search).get("id");
  const p = productos[id];

  if (p) {
    document.getElementById("nombre").textContent = p.nombre;
    document.getElementById("precio").textContent = p.precio;
    document.getElementById("descripcion").textContent = p.descripcion;
    document.getElementById("imgProducto").src = p.img;

    const card = document.querySelector('.producto-card');
    card.dataset.nombre = p.nombre;
    card.dataset.precio = p.precio;
  }
}







const zoomBox = document.querySelector('.zoom-lupa');
const zoomImg = document.getElementById('imgProducto');

if (zoomBox && zoomImg) {

  // PC - mouse
  zoomBox.addEventListener('mousemove', e => {
    const rect = zoomBox.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    zoomImg.style.transformOrigin = `${x}% ${y}%`;
  });

  // MÓVIL - dedo
  zoomBox.addEventListener('touchmove', e => {
    const touch = e.touches[0];
    const rect = zoomBox.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    zoomImg.style.transformOrigin = `${x}% ${y}%`;
  });

}



// modal zoom productos

function abrirZoom(img) {
  if (window.innerWidth > 768) return; // solo móvil

  document.getElementById("zoomImg").src = img.src;
  document.getElementById("modalZoom").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function cerrarZoom() {
  document.getElementById("modalZoom").style.display = "none";
  document.body.style.overflow = "";
}