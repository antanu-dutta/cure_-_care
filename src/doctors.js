import { doctors } from "./data";
import { renderDoctors } from "./utilites";

const allDoctorsContainer = document.getElementById("allDoctorsContainer");
const filterBtns = document.querySelectorAll(".filterBtn");
const searchForm = document.getElementById("searchForm");
const searchInputField = document.querySelector("#searchForm input");

filterBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const filter = e.target.innerText.toLowerCase();
    const filteredDoctors =
      filter === "all"
        ? doctors
        : doctors.filter((doc) => doc.specialization.toLowerCase() === filter);
    renderDoctors(allDoctorsContainer, filteredDoctors);
  })
);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const filter = searchInputField.value.toLowerCase() || "all";
  const filteredDoctors =
    filter === "all"
      ? doctors
      : doctors.filter((doc) =>
          doc.specialization.toLowerCase().includes(filter)
        );
  renderDoctors(allDoctorsContainer, filteredDoctors);
});

searchInputField.addEventListener("input", (e) => {
  const filter = e.target.value.toLowerCase() || "all";
  const filteredDoctors =
    filter === "all"
      ? doctors
      : doctors.filter((doc) =>
          doc.specialization.toLowerCase().includes(filter)
        );
  renderDoctors(allDoctorsContainer, filteredDoctors);
});

window.addEventListener("load", () => {
  if (allDoctorsContainer) renderDoctors(allDoctorsContainer, doctors);
  else console.error("Element with ID 'allDoctorsContainer' not found.");
});
