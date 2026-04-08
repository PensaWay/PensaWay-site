const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Sending...";

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        status.textContent = "Message sent successfully. We will get back to you shortly.";
        form.reset();
    } else {
        status.textContent = "There was an issue sending your message. Please try again.";
    }
});