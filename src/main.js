import { doctors, hospitals } from "./data";
import { renderDoctors, renderHospitals } from "./utilites";

const filteredDoctor = doctors.slice(0, 4);

window.addEventListener("load", () => {
  const doctorContainer = document.getElementById("doctorContainer");
  const hospitalsContainer = document.getElementById("hospitalsContainer");
  renderDoctors(doctorContainer, filteredDoctor);
  renderHospitals(hospitalsContainer, hospitals);
});
