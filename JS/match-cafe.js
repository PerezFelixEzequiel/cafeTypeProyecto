// Elementos del test
const formTestCafe = document.getElementById("form-test-cafe");
const matchTitle = document.querySelector("[data-match-title]");
const matchImg = document.querySelector("[data-match-img]");
const btnVerCafe = document.querySelector(".btn-ver-cafe");

// Reglas de compatibilidad entre respuestas y cafés
const matchPorRespuesta = {
  intensidad: {
    suave: [
      { cafeId: "francia-elegant", puntos: 2 },
      { cafeId: "colombia-supremo", puntos: 1 },
    ],

    equilibrado: [
      { cafeId: "colombia-supremo", puntos: 2 },
      { cafeId: "francia-elegant", puntos: 1 },
    ],

    intenso: [
      { cafeId: "brasil-selvatico", puntos: 2 },
      { cafeId: "espana-reserva", puntos: 2 },
    ],
  },

  metodo: {
    "prensa-francesa": [
      { cafeId: "brasil-selvatico", puntos: 1 },
      { cafeId: "colombia-supremo", puntos: 1 },
      { cafeId: "francia-elegant", puntos: 1 },
    ],

    espresso: [
      { cafeId: "brasil-selvatico", puntos: 1 },
      { cafeId: "espana-reserva", puntos: 1 },
      { cafeId: "colombia-supremo", puntos: 1 },
    ],

    filtro: [
      { cafeId: "colombia-supremo", puntos: 1 },
      { cafeId: "francia-elegant", puntos: 1 },
    ],

    moka: [
      { cafeId: "espana-reserva", puntos: 2 },
      { cafeId: "brasil-selvatico", puntos: 1 },
    ],
  },

  notas: {
    Frutal: [
      { cafeId: "colombia-supremo", puntos: 3 },
    ],

    Achocolatado: [
      { cafeId: "brasil-selvatico", puntos: 3 },
      { cafeId: "espana-reserva", puntos: 1 },
    ],

    "Tostado y Especiado": [
      { cafeId: "espana-reserva", puntos: 3 },
    ],

    "Dulce y Suave": [
      { cafeId: "francia-elegant", puntos: 3 },
    ],
  },
};

// Lee las respuestas elegidas
function obtenerRespuestas() {
  const intensidad = formTestCafe.querySelector('input[name="intensidad"]:checked').value;
  const metodo = formTestCafe.querySelector('input[name="metodo"]:checked').value;
  const notas = formTestCafe.querySelector('input[name="notas"]:checked').value;

  return {
    intensidad: intensidad,
    metodo: metodo,
    notas: notas,
  };
}

function calcularMatch() {
  const respuestas = obtenerRespuestas();

  const puntajes = {
    "brasil-selvatico": 0,
    "colombia-supremo": 0,
    "espana-reserva": 0,
    "francia-elegant": 0,
  };

  // Sumamos puntos por intensidad
  matchPorRespuesta.intensidad[respuestas.intensidad].forEach(function (regla) {
    puntajes[regla.cafeId] += regla.puntos;
  });

  // Sumamos puntos por método
  matchPorRespuesta.metodo[respuestas.metodo].forEach(function (regla) {
    puntajes[regla.cafeId] += regla.puntos;
  });

  // Sumamos puntos por notas
  matchPorRespuesta.notas[respuestas.notas].forEach(function (regla) {
    puntajes[regla.cafeId] += regla.puntos;
  });

  let cafeGanador = "colombia-supremo";
  let mayorPuntaje = 0;

  for (const cafeId in puntajes) {
    if (puntajes[cafeId] > mayorPuntaje) {
      mayorPuntaje = puntajes[cafeId];
      cafeGanador = cafeId;
    }
  }

  console.log("Puntajes:", puntajes);

  return cafeGanador;
}

// Actualiza el módulo 3
function actualizarMatch() {
  const cafeId = calcularMatch();
  const cafe = productosCafe[cafeId];

  matchTitle.textContent = cafe.nombre;
  matchImg.src = cafe.imagenCard;
  matchImg.alt = "Paquete de café " + cafe.nombre;

  btnVerCafe.dataset.productId = cafeId;

  console.log("Café recomendado:", cafeId);
  console.log("Datos del café:", cafe);
}

// Cada vez que cambia una respuesta, actualizamos el match
formTestCafe.addEventListener("change", function () {
  actualizarMatch();
});

// Match inicial al cargar
actualizarMatch();