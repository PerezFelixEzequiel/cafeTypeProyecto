// Elementos del test
const formTestCafe = document.getElementById("form-test-cafe");
const matchTitle = document.querySelector("[data-match-title]");
const matchImg = document.querySelector("[data-match-img]");
const btnVerCafe = document.querySelector(".btn-ver-cafe");

// Relación simple entre respuestas y cafés
const matchPorRespuesta = {
  intensidad: {
    suave: "francia-elegant",
    equilibrado: "colombia-supremo",
    intenso: "brasil-selvatico",
  },

  metodo: {
    "prensa-francesa": "brasil-selvatico",
    espresso: "brasil-selvatico",
    filtro: "colombia-supremo",
    moka: "espana-reserva",
  },

  notas: {
    chocolate: "brasil-selvatico",
    frutales: "colombia-supremo",
    nuez: "espana-reserva",
    caramelo: "francia-elegant",
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

// Calcula el café recomendado
function calcularMatch() {
  const respuestas = obtenerRespuestas();

  const puntajes = {
    "brasil-selvatico": 0,
    "colombia-supremo": 0,
    "espana-reserva": 0,
    "francia-elegant": 0,
  };

  const cafePorIntensidad = matchPorRespuesta.intensidad[respuestas.intensidad];
  const cafePorMetodo = matchPorRespuesta.metodo[respuestas.metodo];
  const cafePorNotas = matchPorRespuesta.notas[respuestas.notas];

  puntajes[cafePorIntensidad]++;
  puntajes[cafePorMetodo]++;
  puntajes[cafePorNotas]++;

  let cafeGanador = "colombia-supremo";
  let mayorPuntaje = 0;

  for (const cafeId in puntajes) {
    if (puntajes[cafeId] > mayorPuntaje) {
      mayorPuntaje = puntajes[cafeId];
      cafeGanador = cafeId;
    }
  }

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