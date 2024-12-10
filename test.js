const specializations = [
  "Pediatrician",
  "Surgeon",
  "Cardiologist",
  "Neurologist",
  "Orthopedist",
  "Oncologist",
  "Dermatologist",
  "Psychiatrist",
  "Gynecologist",
  "Urologist",
  "Nephrologist",
  "Gastroenterologist",
  "Endocrinologist",
  "Ophthalmologist",
  "ENT Specialist",
  "Pulmonologist",
  "Rheumatologist",
  "General Practitioner",
  "Anesthesiologist",
  "Radiologist",
  "Allergist",
  "Immunologist",
  "Hematologist",
  "Plastic Surgeon",
  "Vascular Surgeon",
  "Thoracic Surgeon",
];

const languages = [
  "English",
  "Hindi",
  "Bengali",
  "Telugu",
  "Tamil",
  "Marathi",
  "Gujarati",
  "Punjabi",
  "Malayalam",
  "Kannada",
  "Urdu",
];

const hospitals = [
  "Apollo Hospital",
  "Fortis Healthcare",
  "Max Healthcare",
  "AIIMS",
  "Medanta",
  "Rainbow Children's Hospital",
  "Narayana Health",
  "Manipal Hospital",
  "BLK-Max Super Specialty Hospital",
  "Kokilaben Dhirubhai Ambani Hospital",
];

// Generate 50 random doctors
const doctors = Array.from({ length: 100 }, (_, index) => {
  const randomSpecializations = Array.from(
    { length: Math.floor(Math.random() * 3) + 1 }, // Each doctor can have 1-3 specializations
    () => specializations[Math.floor(Math.random() * specializations.length)]
  );

  const randomLanguages = Array.from(
    { length: Math.floor(Math.random() * 4) + 1 }, // Each doctor can know 1-4 languages
    () => languages[Math.floor(Math.random() * languages.length)]
  );

  const randomHospitals = Array.from(
    { length: Math.floor(Math.random() * 2) + 1 }, // Each doctor can work at 1-2 hospitals
    () => hospitals[Math.floor(Math.random() * hospitals.length)]
  );

  return {
    id: index + 1,
    name: `Dr. ${
      ["Amit", "Kavita", "Ravi", "Pooja", "Raj", "Anita", "Sunil", "Priya"][
        Math.floor(Math.random() * 8)
      ]
    } ${
      ["Sharma", "Gupta", "Roy", "Singh", "Kumar", "Reddy", "Das", "Verma"][
        Math.floor(Math.random() * 8)
      ]
    }`,
    specialization: [...new Set(randomSpecializations)].join(", "),
    appointmentDate: `2024-${Math.floor(Math.random() * 12 + 1)
      .toString()
      .padStart(2, "0")}-${Math.floor(Math.random() * 28 + 1)
      .toString()
      .padStart(2, "0")}`,
    experience: `${Math.floor(Math.random() * 30 + 1)} years`,
    languages: [...new Set(randomLanguages)],
    hospitals: [...new Set(randomHospitals)],
  };
});

console.log(doctors);
