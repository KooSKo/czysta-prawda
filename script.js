document.addEventListener('DOMContentLoaded', function() {
    console.log("Strona została załadowana!");


    // Przycisk przewijania do góry
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");


    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });


    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // Aktualizacja zegara na żywo
    function updateClock() {
        const clock = document.getElementById("liveClock");
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();


    // Formularz kontaktowy walidacja
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const formMessage = document.getElementById("formMessage");


        if (name && email && message) {
            formMessage.textContent = "Dziękujemy za wiadomość!";
            formMessage.style.color = "green";
        } else {
            formMessage.textContent = "Wypełnij wszystkie pola!";
            formMessage.style.color = "red";
        }
    });


    // Obrót strony
    const rotateBtn = document.getElementById("rotateBtn");
    const pageBody = document.getElementById("pageBody");


    rotateBtn.addEventListener('click', function() {
        pageBody.style.transform = "rotate(360deg)";
    });
});