import { initBackToTop } from "./exportModules.js";

//functions
document.addEventListener("DOMContentLoaded", () => {
  initBackToTop("backToTop");
});

const pakistanCities = [
  { name: "All of Pakistan", icon: "fa-globe" },
  { name: "Islamabad", icon: "fa-location-dot" },
  { name: "Karachi", icon: "fa-location-dot" },
  { name: "Lahore", icon: "fa-location-dot" },
  { name: "Rawalpindi", icon: "fa-location-dot" },
  { name: "Faisalabad", icon: "fa-location-dot" },
  { name: "Multan", icon: "fa-location-dot" },
  { name: "Peshawar", icon: "fa-location-dot" },
  { name: "Quetta", icon: "fa-location-dot" },
  { name: "Sialkot", icon: "fa-location-dot" },
  { name: "Gujranwala", icon: "fa-location-dot" },
  { name: "Hyderabad", icon: "fa-location-dot" },
  { name: "Abbottabad", icon: "fa-location-dot" },
  { name: "Bahawalpur", icon: "fa-location-dot" },
  { name: "Sargodha", icon: "fa-location-dot" },
  { name: "Sukkur", icon: "fa-location-dot" },
  { name: "Larkana", icon: "fa-location-dot" },
  { name: "Sheikhupura", icon: "fa-location-dot" },
  { name: "Jhang", icon: "fa-location-dot" },
  { name: "Rahim Yar Khan", icon: "fa-location-dot" },
  { name: "Gujrat", icon: "fa-location-dot" },
  { name: "Mardan", icon: "fa-location-dot" },
  { name: "Kasur", icon: "fa-location-dot" },
  { name: "Dera Ghazi Khan", icon: "fa-location-dot" },
  { name: "Sahiwal", icon: "fa-location-dot" },
  { name: "Okara", icon: "fa-location-dot" },
  { name: "Wah Cantonment", icon: "fa-location-dot" },
  { name: "Mingora", icon: "fa-location-dot" },
  { name: "Nawabshah", icon: "fa-location-dot" },
  { name: "Mirpur Khas", icon: "fa-location-dot" },
  { name: "Chiniot", icon: "fa-location-dot" },
  { name: "Kamoke", icon: "fa-location-dot" },
  { name: "Sadiqabad", icon: "fa-location-dot" },
  { name: "Burewala", icon: "fa-location-dot" },
  { name: "Jacobabad", icon: "fa-location-dot" },
  { name: "Muzaffargarh", icon: "fa-location-dot" },
  { name: "Muridke", icon: "fa-location-dot" },
  { name: "Jhelum", icon: "fa-location-dot" },
  { name: "Shikarpur", icon: "fa-location-dot" },
  { name: "Hafizabad", icon: "fa-location-dot" },
  { name: "Kohat", icon: "fa-location-dot" },
  { name: "Khanewal", icon: "fa-location-dot" },
  { name: "Dera Ismail Khan", icon: "fa-location-dot" },
  { name: "Turbat", icon: "fa-location-dot" },
  { name: "Muzaffarabad", icon: "fa-location-dot" },
  { name: "Gilgit", icon: "fa-location-dot" },
  { name: "Skardu", icon: "fa-location-dot" }
];

const locationFilter = document.getElementById('locationFilter');
const cityList = document.getElementById('cityList');
const citySearchInput = document.getElementById('citySearchInput');
const selectedCityText = document.getElementById('selectedCity');

function renderCities(cities) {
    cityList.innerHTML = '';
    if (cities.length === 0) {
        cityList.innerHTML = '<div class="noResults">No cities found</div>';
        return;
    }
    cities.forEach(city => {
        const cityItem = document.createElement('div');
        cityItem.classList.add('cityItem');
        // Mark selected city
        if (city.name === selectedCityText.textContent) {
            cityItem.classList.add('selected');
        }
        cityItem.innerHTML = `
            <i class="fa-solid ${city.icon}"></i>
            <span>${city.name}</span>
        `;
        // Click to select city
        cityItem.addEventListener('click', (e) => {
            e.stopPropagation();
            selectedCityText.textContent = city.name;
            locationFilter.classList.remove('active');   
            document.querySelectorAll('.cityItem').forEach(item => {
                item.classList.remove('selected');
            });
            cityItem.classList.add('selected');
        });
        cityList.appendChild(cityItem);
    });
}
//Initial Render
renderCities(pakistanCities);

locationFilter.addEventListener('click', (e) => {
    if (e.target === citySearchInput) return;
    
    locationFilter.classList.toggle('active');
    
    if (locationFilter.classList.contains('active')) {
        citySearchInput.focus();
    }
});
citySearchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCities = pakistanCities.filter(city => 
        city.name.toLowerCase().includes(searchTerm)
    );
    renderCities(filteredCities);
});
citySearchInput.addEventListener('click', (e) => {
    e.stopPropagation();
});
document.addEventListener('click', (e) => {
    if (!locationFilter.contains(e.target)) {
        locationFilter.classList.remove('active');
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        locationFilter.classList.remove('active');
    }
});
export const LocationExp = selectedCityText.textContent;