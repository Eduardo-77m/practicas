

const telefono = "51999999999";

document.addEventListener('click', function (e) {

  const btn = e.target.closest('.hacer-pedido');
  if (!btn) return;

  e.preventDefault();

  const card = btn.closest('.producto-card, .producto-card-box');

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
    window.location.href = `/product/producto.html?id=${card.dataset.id}`;
  }
});





// CARGAR PRODUCTO EN producto.html
if (window.location.pathname.includes("/product/producto.html")) {

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
  // zoomBox.addEventListener('touchmove', e => {
  //   const touch = e.touches[0];
  //   const rect = zoomBox.getBoundingClientRect();
  //   const x = ((touch.clientX - rect.left) / rect.width) * 100;
  //   const y = ((touch.clientY - rect.top) / rect.height) * 100;
  //   zoomImg.style.transformOrigin = `${x}% ${y}%`;
  // });

}





if (window.matchMedia('(max-width: 768px)').matches) {

  let scale = 1;
  let lastScale = 1;
  let startDistance = 0;

  let posX = 0;
  let posY = 0;
  let lastX = 0;
  let lastY = 0;

  // ⛔ desactiva lupa PC en móvil
  zoomImg.style.transformOrigin = 'center center';

  zoomBox.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      startDistance = getDistance(e.touches[0], e.touches[1]);
      lastScale = scale;
    }

    if (e.touches.length === 1) {
      lastX = e.touches[0].clientX - posX;
      lastY = e.touches[0].clientY - posY;
    }
  }, { passive: false });

  zoomBox.addEventListener('touchmove', e => {
    e.preventDefault();

    // 🔍 Pinch (2 dedos)
    if (e.touches.length === 2) {
      const newDistance = getDistance(e.touches[0], e.touches[1]);
      scale = Math.min(Math.max(lastScale * (newDistance / startDistance), 1), 4);
    }

    // 🧭 Pan (1 dedo)
    if (e.touches.length === 1 && scale > 1) {
      posX = e.touches[0].clientX - lastX;
      posY = e.touches[0].clientY - lastY;
    }

    if (scale === 1) {
      posX = 0;
      posY = 0;
    }

    zoomImg.style.transform =
      `translate(${posX}px, ${posY}px) scale(${scale})`;

  }, { passive: false });

  function getDistance(t1, t2) {
    return Math.hypot(
      t2.clientX - t1.clientX,
      t2.clientY - t1.clientY
    );
  }
}







