function showMessage() {
    alert("Сәлем! Батырма жұмыс істеп тұр!");
}

const form = document.getElementById("registerForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message");

        message.textContent = name + ", тіркелу сәтті орындалды!";
    });
}