document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.toggle("dark-mode", savedTheme === "dark");
        themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const newTheme = body.classList.contains("dark-mode") ? "dark" : "light";

        // Save theme preference to localStorage
        localStorage.setItem("theme", newTheme);

        // Change button icon accordingly
        themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const revealOnScroll = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on load
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


// contact form
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("success-message");

    function showError(input, message) {
        const errorDisplay = input.nextElementSibling;
        errorDisplay.textContent = message;
        errorDisplay.style.display = "block";
        input.style.borderColor = "red";
    }

    function clearError(input) {
        const errorDisplay = input.nextElementSibling;
        errorDisplay.textContent = "";
        errorDisplay.style.display = "none";
        input.style.borderColor = "";
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;
        successMessage.style.display = "none"; // Hide success message on revalidation

        // Validate Name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validate Email
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required");
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Enter a valid email address");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Message cannot be empty");
            isValid = false;
        } else {
            clearError(messageInput);
        }

        // If form is valid, show success message
        if (isValid) {
            successMessage.textContent = "Message sent successfully!";
            successMessage.style.display = "block";

            // Reset form fields after submission
            contactForm.reset();
        }
    });
});

function sendMail(){

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_e0636ff","template_row20aq",params).then(alert("Email has been sent."))
}


//TXwclUd67QEHQPuCn

