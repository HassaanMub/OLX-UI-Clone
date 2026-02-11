//Imports
import { ads as myAds } from "./exportModules.js";
import { formatPricePKR } from "./exportModules.js";
import { initBackToTop } from "./exportModules.js";

//Ads Row 1 (Mobiles)
const cat1Flex = document.querySelector(".cat1Flex");
myAds.forEach(e => {
    if(e.cat === "mobile"){
        const ad = document.createElement("div");
        ad.classList.add("ad");
        ad.innerHTML = `
                <img src="${e.imgSrc}">
                <b class="adPrice">${formatPricePKR(e.price)}</b>
                <p class="adName">${e.name}</p>
                <p class="adLoc">${e.location}, ${e.city}</p>
                <p class="adTime">${e.id} weeks ago</p>`
        cat1Flex.appendChild(ad);
    }
});

//Ads Row 2 (Cars)
const cat2Flex = document.querySelector(".cat2Flex");
myAds.forEach(e => {
    if(e.cat === "car"){
        const ad = document.createElement("div");
        ad.classList.add("ad");
        ad.innerHTML = `
                <img src="${e.imgSrc}">
                <b class="adPrice">${formatPricePKR(e.price)}</b>
                <p class="adName">${e.name}</p>
                <p class="adLoc">${e.location}, ${e.city}</p>
                <p class="adTime">${e.id} weeks ago</p>`
        cat2Flex.appendChild(ad);
    }
});

//Ads Row 3 (Houses)
const cat3Flex = document.querySelector(".cat3Flex");
myAds.forEach(e => {
    if(e.cat === "house"){
        const ad = document.createElement("div");
        ad.classList.add("ad");
        ad.innerHTML = `
                <img src="${e.imgSrc}">
                <b class="adPrice">${formatPricePKR(e.price)}</b>
                <p class="adName">${e.name}</p>
                <p class="adLoc">${e.location}, ${e.city}</p>
                <p class="adTime">${e.id} weeks ago</p>`
        cat3Flex.appendChild(ad);
    }
});

//Ads Row 4 (Furniture)
const cat4Flex = document.querySelector(".cat4Flex");
myAds.forEach(e => {
    if(e.cat === "furniture"){
        const ad = document.createElement("div");
        ad.classList.add("ad");
        ad.innerHTML = `
                <img src="${e.imgSrc}">
                <b class="adPrice">${formatPricePKR(e.price)}</b>
                <p class="adName">${e.name}</p>
                <p class="adLoc">${e.location}, ${e.city}</p>
                <p class="adTime">${e.id} weeks ago</p>`
        cat4Flex.appendChild(ad);
    }
});

//functions
document.addEventListener("DOMContentLoaded", () => {
  initBackToTop("backToTop");
});