export const renderDoctors = (element, doctorList) => {
  element.innerHTML = doctorList
    .map(
      (doctor) => `
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
  <div class="flex flex-col md:flex-row items-center">
    <!-- Image Section -->
    <img
      src="${doctor.image}"
      alt="${doctor.name}"
      class="w-full md:w-48 h-48 object-cover"
    />
    <!-- Content Section -->
    <div class="p-4 md:p-6 flex-1">
      <div>
        <h2 class="text-lg md:text-xl font-bold text-gray-800">${
          doctor.name
        }</h2>
        <p
          class="w-fit text-sm bg-orange-500 px-4 text-white rounded my-4"
        >
          ${doctor.specialization}
        </p>
        <p class="text-sm text-gray-500">
          <b>Languages:</b> ${doctor.languages.join(", ")}
        </p>
        <p class="text-sm text-gray-500">
          <b>Experience:</b> ${doctor.experience} years
        </p>
        <p class="text-sm text-gray-500">
          <b>Location:</b> ${doctor.hospitals.join(", ")}
        </p>
      </div>
    </div>
    <!-- Availability Section -->
    <div class="p-4 md:p-6 border-t md:border-t-0 md:border-l">
      <p class="text-sm text-gray-600 font-medium">
        <b>Availability:</b>
      </p>
      <p class="text-sm text-gray-700">
        MON, WED, THU, SAT<br />
        <span class="text-gray-500">(02:00 PM - 04:00 PM)</span>
      </p>
      <button
        class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        BOOK AN APPOINTMENT
      </button>
    </div>
  </div>
</div>

      `
    )
    .join("");
};

export const renderHospitals = (element, hispitalsList) => {
  element.innerHTML = hispitalsList
    .map((curHostpital) => {
      return `<div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src="${curHostpital.image}"
              alt="${curHostpital.name}"
              class="rounded-t-lg w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold text-blue-700">
                ${curHostpital.name}
              </h3>
              <p class="text-sm text-gray-600 mt-2">
                ${curHostpital.description}
              </p>
            </div>
          </div></div>`;
    })
    .join("");
};
