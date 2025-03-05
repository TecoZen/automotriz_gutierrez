document.addEventListener("DOMContentLoaded", function () {
    // Ocultar pantalla de carga cuando la página ya esté cargada
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
        }, 300);
    }, 500);

    // Función para insertar el Header (topbar)
    function renderHeader() {
        document.getElementById("header-container").innerHTML = `
            <header class="topbar">
                <div class="logo">
                    <a href="index.html">
                        <img src="assets/automotriz_logo.jpeg" alt="Logo Automotriz Gutierrez">
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a href="nosotros.html" class="nav-link">NOSOTROS</a></li>
                        <li><a href="marcas.html" class="nav-link">VENTA/MARCAS</a></li>
                        <li><a href="servicios.html" class="nav-link">SERVICIOS</a></li>
                        <li><a href="contacto.html" class="nav-link">CONTACTO</a></li>
                    </ul>
                </nav>
            </header>
        `;

        // Agregar animación de carga antes de cambiar de página
        document.querySelectorAll(".nav-link, .logo a").forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                const href = this.getAttribute("href");

                document.getElementById("loading-screen").style.display = "flex";
                document.getElementById("loading-screen").style.opacity = "1";

                setTimeout(() => {
                    window.location.href = href;
                }, 5);
            });
        });
    }

    // Función para insertar el Footer
    function renderFooter() {
        document.getElementById("contact-container").innerHTML = `
            <section>
            <article class="contact_columns">
                <p class="contact_left">Servicio Automotriz Gutierrez</p>
            </article>
            <article class="contact_columns">
                <p class="contact_left">Dirección Taller: El Tanque #5D, Col.Barranca Seca, C.P 10580, Magdalena Contreras, CDMX</p>
            </article>
            <article class="contact_columns">
                <p class="contact_left">Número Telefonico: 55-1520-6187</p>
            </article>
            <article class="contact_columns">
                <p class="contact_left">Horario: 9:00-19:00</p>
            </article>
        
            <article class="contact_columns">
                <p class="contact_right">Matriz: Papaloteca #8, Col. El Rosal, C.P. 10600, Magdalena Contreras, CDMX </p>
            </article>
            
            <article class="contact_columns">
                <p class="contact_right">Correo Electrónico</p>
            </article>
             </section>
            <footer class="footer">
                <p>&copy; 2024 Automotriz Gutiérrez - Todos los derechos reservados.</p>
            </footer>
        `;
    }

    // Slideshow
    let slideIndex = 0;

    
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 5000); // Cambia la imagen cada 5 segundos
}

// Cambio manual de diapositivas
function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

// Ir a un slide específico
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}


    // Insertar header y footer dinámicamente
    
    renderHeader();
    
    
    renderFooter();
    showSlides();

    document.getElementById("catalogoForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Tu solicitud ha sido enviada. Te enviaremos el catálogo a tu correo.");
        this.reset();
    });
    
});
