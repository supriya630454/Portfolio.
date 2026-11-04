document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-item");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close mobile drawer when a nav link is clicked
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // 2. Client-side Form Validation
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      subjectError.textContent = "Please provide a subject.";
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageError.textContent = "Please write a message.";
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters long.";
      isValid = false;
    }

    // Success response
    if (isValid) {
      formSuccess.textContent = "Message sent successfully! Thank you.";
      form.reset();

      setTimeout(() => {
        formSuccess.textContent = "";
      }, 5000);
    }
  });
});
