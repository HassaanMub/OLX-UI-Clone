import { ads as myAds } from "./adData.js";
const cat1Flex = document.querySelector(".cat1Flex");
myAds.forEach(e => {
    const ad = document.createElement("div");
    ad.classList.add("ad");
    ad.innerHTML = `
            <img src="${e.imgSrc}">
            <b class="adPrice">Rs ${e.price}</b>
            <p class="adName">${e.name}</p>
            <p class="adLoc">${e.location}, ${e.city}</p>
            <p class="adTime">${e.id} weeks ago</p>`
    cat1Flex.appendChild(ad);
});