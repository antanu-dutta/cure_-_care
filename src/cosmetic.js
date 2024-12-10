import { renderDoctors } from "./utilites";
import { doctors } from "./data";
window.addEventListener("load", () => {
  const doctorContainer = document.getElementById("doctorContainer");
  renderDoctors(doctorContainer, doctors.slice(0, 3));
});
