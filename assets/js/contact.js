document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("TU_USER_ID"); // Reemplaza con tu User ID de EmailJS

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue

        let formMessage = document.getElementById("form-message");
        formMessage.style.display = "block";
        formMessage.style.color = "#0f206c";
        formMessage.textContent = "Enviando...";

        const formData = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", formData) // Reemplaza con tus datos de EmailJS
            .then(function () {
                setTimeout(() => {
                    formMessage.textContent = "Mensaje enviado correctamente.";
                    formMessage.style.color = "#0f206c";
                    
                    // Limpiar el formulario después de 2 segundos
                    setTimeout(() => {
                        formMessage.style.display = "none";
                        document.getElementById("contact-form").reset();
                    }, 2000);
                }, 2000);
            })
            .catch(function (error) {
                formMessage.textContent = "Error al enviar el mensaje. Inténtalo nuevamente.";
                formMessage.style.color = "#c23625";
                console.error("EmailJS error:", error);
            });
    });
});

