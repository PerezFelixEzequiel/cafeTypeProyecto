// Tomamos el formulario de filtros y todas las cards de la tienda
const formFiltros = document.getElementById("form-filtros");
const cardsTienda = document.querySelectorAll(".card-tienda");

// Esta función devuelve los valores de los filtros marcados
function obtenerFiltrosMarcados(nombreFiltro) {
  const filtrosMarcados = formFiltros.querySelectorAll(
    `input[name="${nombreFiltro}"]:checked`
  );

  const valores = [];

  filtrosMarcados.forEach(function (filtro) {
    valores.push(filtro.value);
  });

  return valores;
}

// Esta función revisa si una card coincide con un grupo de filtros
function coincideConFiltro(valorCard, filtrosMarcados) {
  // Si no hay filtros marcados, dejamos pasar la card
  if (filtrosMarcados.length === 0) {
    return true;
  }

  // Si la card no tiene ese dato, no coincide
  if (!valorCard) {
    return false;
  }

  // Convertimos los valores de la card en una lista
  const valoresCard = valorCard.split(" ");

  // Revisamos si algún filtro marcado coincide con la card
  return filtrosMarcados.some(function (filtro) {
    return valoresCard.includes(filtro);
  });
}

// Esta función aplica todos los filtros a las cards
function filtrarTienda() {
  // Tomamos el filtro general: todo, productos o promociones
  const tipoSeleccionado = formFiltros.querySelector(
    'input[name="tipo"]:checked'
  ).value;

  // Tomamos los filtros marcados por grupo
  const origenesMarcados = obtenerFiltrosMarcados("origen");
  const tuestesMarcados = obtenerFiltrosMarcados("tueste");
  

  // Recorremos cada card para decidir si se muestra o se oculta
  cardsTienda.forEach(function (card) {
    const tipoCard = card.dataset.tipo;
    const origenCard = card.dataset.origen;
    const tuesteCard = card.dataset.tueste;

    // Revisamos si coincide con el filtro general
    const coincideTipo =
      tipoSeleccionado === "todo" || tipoCard === tipoSeleccionado;

    // Revisamos si coincide con origen, tueste y perfil
    const coincideOrigen = coincideConFiltro(origenCard, origenesMarcados);
    const coincideTueste = coincideConFiltro(tuesteCard, tuestesMarcados);
    

    // Si coincide con todos los filtros, se muestra. Si no, se oculta
    if (coincideTipo && coincideOrigen && coincideTueste ) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Cada vez que cambia un filtro, volvemos a filtrar
formFiltros.addEventListener("change", function () {
  filtrarTienda();
});

// Ejecutamos el filtro al cargar la página
filtrarTienda();

// 1. Selecciono formulario y cards.
// 2. Leo qué filtros están marcados.
// 3. Comparo filtros contra los data-* de cada card.
// 4. Muestro las que coinciden.
// 5. Oculto las que no coinciden.