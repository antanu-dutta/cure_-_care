const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const fullMenu = document.getElementById("fullMenu");

// Toggle Menu Open
menuToggle.addEventListener("click", () => {
  fullMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Disable scrolling
});

// Close Menu
menuClose.addEventListener("click", () => {
  fullMenu.classList.add("hidden");
  document.body.style.overflow = "auto"; // Enable scrolling
});

// Form Handling
const form = document.getElementById("appointmentForm");
const confirmationMessage = document.getElementById("confirmationMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Simulate form submission (replace with real backend API)
  setTimeout(function () {
    form.reset(); // Reset form fields
    confirmationMessage.classList.remove("hidden"); // Show confirmation message
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  }, 500);
});
