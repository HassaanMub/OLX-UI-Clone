import { ads as myAds } from "./exportModules.js";
import { formatPricePKR } from "./exportModules.js";
import { LocationExp } from "./main.js";

//Read URL Params
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const searchQuery = urlParams.get('search');

console.log("Category: ",category);
console.log("Search: ",searchQuery);

//Filter By Category
let filteredProducts = [...myAds];
if(category){
    filteredProducts = filteredProducts.filter(product =>
        product.cat === category
    );
}

//Filter By Search
if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
}

//Update Page Title
const pageTitle = document.querySelector("title");
//Custom Category Names
const categoryNames = {
    "mobile": "Mobile Phones",
    "car": "Cars",
    "house": "Property",
    "furniture": "Furniture",
    "bike": "Bikes",
    "service": "Services",
    "job": "Jobs",
    "animal": "Animals",
    "fashion": "Fashion",
    "book": "Books",
    "kids": "Kids",
};
if(category){
    pageTitle.textContent = `${categoryNames[category] || category} - OLX`;
} else if(searchQuery){
    pageTitle.textContent = `Search: "${searchQuery}" - OLX`;
}else{
    pageTitle.textContent = "All Products - OLX";
}

//Render Products
const productsContainer = document.querySelector("#productsListing");

const header = document.createElement("div");
header.className = "listing-header";
if(category){
    header.innerHTML = `
    <h2>${categoryNames[category] || category}</h2>
    <p>${filteredProducts.length} results found</p>`;
} else if(searchQuery){
    header.innerHTML = `
    <h2>Search results for "${searchQuery}"</h2>
    <p>${filteredProducts.length} results found</p>`;
} else{
    header.innerHTML = `
    <h2>All Products</h2>
    <p>${filteredProducts.length} products</p>`;
}
productsContainer.appendChild(header);

//Create Products Grid
const productsGrid = document.createElement("div");
productsGrid.className = "products-grid";

//Render Each Product
if (filteredProducts.length > 0){
    filteredProducts.forEach(product => {
        const ad = document.createElement("div");
        ad.classList.add("ad");
            ad.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.name}">
                <b class="adPrice">${formatPricePKR(product.price)}</b>
                <p class="adName">${product.name}</p>
                <p class="adLoc">${product.location}, ${product.city}</p>
            `;
        
        // Click to view product details
        ad.style.cursor = "pointer";
        ad.addEventListener("click", () => {
            window.location.href = `productDetail.html?id=${product.id}`;
        });
        
        productsGrid.appendChild(ad);
    });
} else{
    // No products found
    productsGrid.innerHTML = `
        <div class="no-results">
            <i class="fa-solid fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
            <p>No products found</p>
            <a href="homepage.html">← Back to Home</a>
        </div>
    `;
}
productsContainer.appendChild(productsGrid);