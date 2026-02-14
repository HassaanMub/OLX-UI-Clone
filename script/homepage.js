//Imports
import { ads as myAds } from "./exportModules.js";
import { formatPricePKR } from "./exportModules.js";

//Render Ads Function
function renderAds(containerSelector, categoryFilter) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    myAds.forEach(e => {
        if (e.cat === categoryFilter) {
            const ad = document.createElement("div");
            ad.classList.add("ad");
            ad.innerHTML = `
                <img src="${e.imgSrc}">
                <b class="adPrice">${formatPricePKR(e.price)}</b>
                <p class="adName">${e.name}</p>
                <p class="adLoc">${e.location}, ${e.city}</p>
                <p class="adTime">${e.id} weeks ago</p>`;
            
            // Make ad clickable navigates to product detail page
            ad.style.cursor = "pointer";
            ad.addEventListener("click", () => {
                window.location.href = `productDetail.html?id=${e.id}`;
            });
            
            container.appendChild(ad);
        }
    });
}
//Render Ads
renderAds(".cat1Flex", "mobile");
renderAds(".cat2Flex", "car");
renderAds(".cat3Flex", "house");
renderAds(".cat4Flex", "furniture");