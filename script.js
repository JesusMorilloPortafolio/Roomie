
let imgProducto = document.getElementById("imgProducto");
let miniaturas = document.querySelectorAll(".miniaturas img");

function setMini(pos) {
    const contenedor = document.querySelector(".img-producto");
    const slides = contenedor.querySelector(".slides");
    const miniaturas = document.querySelectorAll(".miniaturas img");

    const ancho = contenedor.clientWidth;

    // Mover carrusel a la imagen seleccionada
    slides.style.transform = `translateX(-${pos * ancho}px)`;

    // Marcar miniatura activa
    miniaturas.forEach(m => m.classList.remove("mini-selected"));
    miniaturas[pos].classList.add("mini-selected");
}

let sizes = document.querySelectorAll(".info-detalle button");

function setSize(pos){
    sizes[0].style.backgroundColor = "#fff1d9";
    sizes[1].style.backgroundColor = "#fff1d9";
    sizes[2].style.backgroundColor = "#fff1d9";
    sizes[pos].style.backgroundColor = "#fdc10e";
}

//MENU RESPONSIVE
let menu_responsive_visible = false;
let nav_responsive = document.getElementById("nav-responsive");
let nav = document.getElementById("nav");
let close_responsive = document.getElementById("close-responsive");

nav_responsive.onclick = function(){
    if(menu_responsive_visible==false){
        nav.className = "menu-responsive";
        menu_responsive_visible = true;
    }
}
close_responsive.onclick = function(){
    if(menu_responsive_visible==true){
        nav.className = "";
        menu_responsive_visible = false;
    }
}


const overlay = document.getElementById("chatOverlay");

contactButtons.forEach(button => {
    button.addEventListener("click", () => {
        chatContainer.classList.add("active");
        overlay.classList.add("active");
    });
});

closeChat.addEventListener("click", closeChatWindow);
overlay.addEventListener("click", closeChatWindow);

function closeChatWindow() {
    chatContainer.classList.remove("active");
    overlay.classList.remove("active");
}

contactButtons.forEach(button => {
    button.addEventListener("click", () => {
        chatContainer.style.display = "flex";

        // Limpiar mensajes anteriores si quieres que siempre inicie nuevo
        chatMessages.innerHTML = "";

        // 🔥 5 saludos diferentes
        const saludos = [
            "Hola 👋 Bienvenido. ¿Te interesa esta habitación?",
            "¡Hola! 😊 Estoy aquí para ayudarte con información sobre el alquiler.",
            "Bienvenido 🙌 ¿Quieres saber precio o disponibilidad?",
            "Hola ✨ Esta habitación está disponible. ¿Qué deseas consultar?",
            "¡Saludos! 📍 Puedo darte detalles sobre esta opción de alojamiento."
        ];

        const saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];

        setTimeout(() => {
            addMessage(saludoAleatorio, "bot-message");
        }, 400);
    });
});

        document.getElementById("chatStatus").textContent = "Escribiendo...";
        document.getElementById("chatStatus").style.color = "#f39c12";

        setTimeout(() => {
            document.getElementById("chatStatus").textContent = "En línea";
            document.getElementById("chatStatus").style.color = "#2ecc71";
        }, 1500);

        function addMessage(text, type) {

    const row = document.createElement("div");
    row.classList.add("message-row");

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");

    const message = document.createElement("div");
    message.classList.add("message", type);
    message.textContent = text;

    // 🔥 Crear hora actual
    const time = document.createElement("div");
    time.classList.add("message-time");

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    time.textContent = `${hours}:${minutes}`;

    messageContainer.appendChild(message);
    messageContainer.appendChild(time);

      if(type === "bot-message") {
        row.classList.add("bot-row");
        row.appendChild(messageContainer);
    } else {
        row.classList.add("user-row");
        row.appendChild(messageContainer);
    }

    chatMessages.appendChild(row);

    chatMessages.appendChild(row);

    // 🔥 Animación al aparecer
    setTimeout(() => {
        messageContainer.classList.add("show");
    }, 10);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}