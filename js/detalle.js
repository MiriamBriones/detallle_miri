// ============================
// Universo 3D + Animaciones románticas
// ============================

const starfield = document.getElementById("starfield");
const ctx = starfield.getContext("2d");
const cometCanvas = document.getElementById("comet-text");
const cometCtx = cometCanvas.getContext("2d");
const heartsContainer = document.getElementById("hearts");
const flotantes = document.getElementById("flotantes");
const countdown = document.getElementById("countdown");
const giftWrap = document.getElementById("gift-wrap");
const spaceChest = document.getElementById("space-chest");
const finalMessage = document.getElementById("final-message");
const signature = document.getElementById("signature");
const playBtn = document.getElementById("play-music");
const pauseBtn = document.getElementById("pause-music");
const bgMusic = document.getElementById("bg-music");
const secretBtn = document.getElementById('secret-btn');
const secretMsg = document.getElementById('secret-message');

// ============================
// Ajuste canvas
// ============================
function resizeCanvas() {
  starfield.width = window.innerWidth;
  starfield.height = window.innerHeight;
  cometCanvas.width = window.innerWidth;
  cometCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// ============================
// Estrellas
// ============================
const numStars = 400;
const stars = [];
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * starfield.width,
    y: Math.random() * starfield.height,
    size: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.5 + 0.2
  });
}
function drawStars() {
  ctx.clearRect(0, 0, starfield.width, starfield.height);
  ctx.fillStyle = "white";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
    s.x -= s.speed;
    if (s.x < 0) s.x = starfield.width;
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// ============================
// Corazones flotantes
// ============================
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heartsContainer.removeChild(heart), 6000);
}
setInterval(createHeart, 800);

// ============================
// Frases flotantes
// ============================
const frases = [
  "Un día cualquiera...",
  "Conocí a alguien especial...",
  "Y desde entonces, mi universo cambió 💫",
  "Tú eres mi universo💜",
  "Feliz 30 de septiembre guapo",
  "Nunca volveras hacer espectador",
  "Te quiero muchisimo",
  "Estoy muy orgullosa de ti",
  "Siempre estare para ti asi sea a la distancia",
];
function createFlotante() {
  const index = Math.floor(Math.random() * frases.length);
  const div = document.createElement("div");
  div.className = "flotante frase";
  div.textContent = frases[index];
  div.style.left = Math.random() * (window.innerWidth - 200) + "px";
  div.style.top = Math.random() * (window.innerHeight - 200) + "px";
  flotantes.appendChild(div);
  setTimeout(() => flotantes.removeChild(div), 7000);
}
setInterval(createFlotante, 2000);

// ============================
// Cuenta regresiva
// ============================
let count = 3;
countdown.textContent = count;
const countdownInterval = setInterval(() => {
  count--;
  if (count > 0) {
    countdown.textContent = count;
  } else {
    countdown.textContent = "";
    clearInterval(countdownInterval);
    setTimeout(() => countdown.style.display = "none", 1000);
    startUniverse();
  }
}, 1000);

function startUniverse() {
  giftWrap.style.opacity = 1;
  setTimeout(() => {
    giftWrap.style.opacity = 0;
    spaceChest.style.opacity = 1;
    finalMessage.style.opacity = 1;
    signature.style.opacity = 1;
  }, 3500);
}

// ============================
// Cofre interactivo
// ============================
spaceChest.addEventListener("click", () => alert("🌹 Eres mi persona favorita en este universo 🌹"));

// ============================
// Música
// ============================
playBtn.addEventListener("click", () => bgMusic.play());
pauseBtn.addEventListener("click", () => bgMusic.pause());

// ============================
// Botón secreto
// ============================
secretBtn.addEventListener('click', () => {
  secretMsg.classList.add('visible');
  setTimeout(() => secretMsg.classList.remove('visible'), 5000);
});

// ============================
// Carros flotantes con mini-card
// ============================
const carsData = [
  { name: "Nissan GT-R", desc: "Velocidad y elegancia 🚀", img: "https://static.vecteezy.com/system/resources/thumbnails/025/306/948/small_2x/white-sport-car-on-transparent-background-3d-rendering-illustration-free-png.png" },
  { name: "Toyota Supra", desc: "Potencia legendaria 💜", img: "https://www.pngall.com/wp-content/uploads/11/Hot-Wheels-Car.png" },
  { name: "Ferrari F8", desc: "Estilo y velocidad 🔥", img: "https://www.pngall.com/wp-content/uploads/11/Hot-Wheels-Car-PNG-HD-Image.png" },
  { name: "Lamborghini Aventador", desc: "Lujo extremo 🏎️", img: "https://static.vecteezy.com/system/resources/previews/045/913/254/non_2x/red-and-black-race-car-with-aggressive-decals-cut-out-stock-png.png" },
  { name: "Porsche 911", desc: "Clásico y potente 💨", img: "https://www.pngall.com/wp-content/uploads/11/Hot-Wheels-PNG-Pic.png" },
  { name: "McLaren 720S", desc: "Innovación y velocidad ⚡", img: "https://static.vecteezy.com/system/resources/thumbnails/029/914/990/small_2x/white-sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" },
  { name: "Audi R8", desc: "Diseño y performance 🔥", img: "https://static.vecteezy.com/system/resources/thumbnails/025/304/302/small_2x/white-sport-car-on-transparent-background-3d-rendering-illustration-free-png.png" },
  { name: "Bugatti Chiron", desc: "Máxima potencia 💎", img: "https://static.vecteezy.com/system/resources/thumbnails/025/304/049/small_2x/white-sport-car-on-transparent-background-3d-rendering-illustration-free-png.png" },

  // 7 autos adicionales
  { name: "Chevrolet Corvette", desc: "Clásico americano ⚡", img: "https://www.pngarts.com/files/18/Hot-Wheels-Car-PNG-Image-HQ.png" },
  { name: "Ford Mustang", desc: "Leyenda en movimiento 🐎", img: "https://i.pinimg.com/originals/48/9c/18/489c18ad892b61555763827eb70737b9.png" },
  { name: "Lexus LFA", desc: "Arte y velocidad 💎", img: "https://static.vecteezy.com/system/resources/thumbnails/024/702/747/small_2x/colorful-race-car-rainbow-smoke-ai-generated-free-png.png" },
  { name: "Maserati GranTurismo", desc: "Elegancia italiana 🇮🇹", img: "https://www.pngall.com/wp-content/uploads/11/Hot-Wheels-Car-PNG-Image.png" },
  { name: "Jaguar F-Type", desc: "Estilo felino 🐆", img: "https://www.pngarts.com/files/18/Hot-Wheels-Car-PNG-Picture.png" },
  { name: "BMW M8", desc: "Potencia y lujo 🔥", img: "https://www.pngall.com/wp-content/uploads/15/Hot-Wheels-Car-Transparent.png" },
  { name: "Aston Martin Vantage", desc: "Clase y velocidad 💫", img: "https://i.pinimg.com/originals/c2/c3/6b/c2c36b3eef8edc142604f9852285d2c1.png" }
];


// Aseguramos que el contenedor permita clicks
flotantes.style.position = "absolute";
flotantes.style.top = "0";
flotantes.style.left = "0";
flotantes.style.width = "100%";
flotantes.style.height = "100%";
flotantes.style.pointerEvents = "none"; // por defecto pasa clicks al carro
flotantes.style.zIndex = "25"; // encima de canvas

// Función para crear un carro flotante
function createFloatingCar(data) {
  const car = document.createElement('div');
  car.className = 'car';
  car.style.position = 'absolute';
  car.style.cursor = 'pointer';
  car.style.pointerEvents = 'auto'; // permitir clicks
  car.style.zIndex = 30; // encima de todo

  // Posición inicial aleatoria
  let x = Math.random() * (window.innerWidth - 90);
  let y = Math.random() * (window.innerHeight - 50);
  car.style.left = x + 'px';
  car.style.top = y + 'px';

  // Imagen del carro
  const img = document.createElement('img');
  img.src = data.img;
  img.alt = data.name;
  img.style.width = '90px';
  img.style.pointerEvents = 'none'; // click pasa al div padre
  car.appendChild(img);

  flotantes.appendChild(car);

  // Animación flotante
  let dx = (Math.random() - 0.5) * 0.8;
  let dy = (Math.random() - 0.5) * 0.8;

  function floatCar() {
    x += dx;
    y += dy;

    // Rebotar en los bordes
    if (x < 0 || x > window.innerWidth - 90) dx *= -1;
    if (y < 0 || y > window.innerHeight - 50) dy *= -1;

    car.style.left = x + 'px';
    car.style.top = y + 'px';
    requestAnimationFrame(floatCar);
  }
  floatCar();

  // Click en el carro
  car.addEventListener('click', (e) => {
    e.stopPropagation();
    showMiniCard(data, car);
  });
}

// Función para mostrar mini-card flotante
function showMiniCard(data, car) {
  const card = document.createElement('div');
  card.className = 'mini-card';
  card.innerHTML = `
    <img src="${data.img}" alt="${data.name}" />
    <div>${data.name}</div>
    <div style="font-size:14px;">${data.desc}</div>
  `;

  const carRect = car.getBoundingClientRect();
  card.style.position = 'absolute';
  card.style.left = carRect.left + carRect.width / 2 - 65 + 'px';
  card.style.top = carRect.top - 100 + 'px';
  card.style.opacity = 0;
  card.style.pointerEvents = 'auto'; // permitir interacción con la card
  card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  flotantes.appendChild(card);

  // Animación de aparición
  setTimeout(() => {
    card.style.opacity = 1;
    card.style.transform = 'translateY(-10px)';
  }, 10);

  // Desaparecer automáticamente
  setTimeout(() => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(0)';
    setTimeout(() => card.remove(), 300);
  }, 3000);
}

// ============================
// Crear todos los carros flotantes
// ============================
carsData.forEach(data => createFloatingCar(data));