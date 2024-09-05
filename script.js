"use strict";
console.log("Connected 🔗.");


//==================================================//
//==========       Element Selection       =========//
//==================================================//

const hoverIndex = document.getElementsByClassName("page-index");
const hoverGlow = document.getElementById("image-jesus");
const selectedImage = document.getElementById("selected-image");
const imageName = document.getElementById("image-name");
const gallery1Text = document.getElementById("gallery1Text");
const gallery2Text = document.getElementById("gallery2Text");



//==================================================//
//==========          Hover Effects          =======//  📣 ****  TOOLTIP NOT SHOWING
//==================================================//

// ----- changeToRed function ------//
function changeToRed(event) {
  event.target.style.color = "rgb(245, 1, 1)"; 
  console.log("Text changed to red:", event.target); 
}

// ----- changeToGrey function ------//  📣 *** doesn't work if set to "none"
function changeToGrey(event) {
  event.target.style.color = "rgb(109, 109, 109)"; 
  console.log("Text changed back to grey:", event.target); 
}

// ----- showTooltip function ------//
function showTooltip(event) {
  const tooltip = event.target.querySelector(".tooltiptext"); 
  if (tooltip) {
    tooltip.classList.add("show"); //
  }
}

// ----- hideTooltip function ------//
function hideTooltip(event) {
  const tooltip = event.target.querySelector(".tooltiptext"); 
  if (tooltip) {
    tooltip.classList.remove("show"); //
  }
}

// ----- Call and loop through ------// ** Check tooltip!!! ** //
for (let i = 0; i < hoverIndex.length; i++) {
  hoverIndex[i].addEventListener("mouseover", changeToRed); // 
  hoverIndex[i].addEventListener("mouseout", changeToGrey); 
  hoverIndex[i].addEventListener("mouseover", showTooltip);
  hoverIndex[i].addEventListener("mouseout", hideTooltip);
}


//==================================================//
//==========        Glow behind image      =========//
//==================================================//

// ----- glowBackground function ------//
function glowBackground(event) {
  event.target.style.filter = "drop-shadow(0 0 27px gold)";
  console.log("Glow applied to:", event.target);
}

// ----- removeGlowBackground function ------//
function removeGlowBackground(event) {
  event.target.style.filter = "none";
  console.log("Glow removed from:", event.target);
}

// ----- Call the glow effect functions on hover ------//
hoverGlow.addEventListener("mouseover", glowBackground);
hoverGlow.addEventListener("mouseout", removeGlowBackground);



//==================================================//
//==========      Gallery functionality    =========//
//==================================================//

// ----- First gallery images ----- // array with .src and .name --- 📣 name targets innerHTML //
const imagesSet1 = [
  { src: "images/Statue-of-a-Siren.pg.jpg", name: "1/3 — IN LOW GRASS" },
  { src: "images/Cock--Rhodian.jpg", name: "2/3 — HIDE BY CONDENSING" },
  { src: "images/Mouse--Boeotian.jpg", name: "3/3 — PROUD STONE" },
];

// ----- Second gallery images ----- //
const imagesSet2 = [
  { src: "images/list1.jpg", name: "1/5 — OCHRE" },
  { src: "images/list2.jpg", name: "2/5 — RETURNED NOD" },
  { src: "images/list3.jpg", name: "3/5 — MEADOW HALF LIGHT" },
  { src: "images/list4.jpg", name: "4/5 — FALLEN APPLE" },
  { src: "images/list5.jpg", name: "5/5 — WEATHERED NICHE" },
];

// ----- Tracks current image for each gallery ----- //
const currentIndexSet1 = 0;
const currentIndexSet2 = 0;

// ----- Set gallery selection @ default -- To 1st gallery with the 1st image ----- // 📣"let" --- changes with switchGallery function //
let currentGallery = imagesSet1; // Default gallery is Set 1
let currentIndex = currentIndexSet1; // Start at index 0 (initially at Image set 1) 

// ============ Functions ============ //

// ----- ⭐️⭐️ updateGallery function ⭐️⭐️ ------// // Updates image source (.src) and innerHTML to currentIndex name //
function updateGallery() {
  selectedImage.src = currentGallery[currentIndex].src;
  imageName.innerHTML = currentGallery[currentIndex].name;
  console.log("Updated gallery with image:", currentGallery[currentIndex]);
}

// ----- nextImage function ------// On click, change to next image //
function nextImage() {
  currentIndex++; 
  if (currentIndex >= currentGallery.length) { // @ final index of set, reset currentIndex to default
    currentIndex = 0; 
  }
  updateGallery(); // Update the gallery display
  console.log("Switched to next image. Current index is:", currentIndex);
}

// ----- ⭐️⭐️ switchGallery function ⭐️⭐️ ------// Assigns image sets to a gallery index //
function switchGallery(galleryNumber) {
  if (galleryNumber === 1) {  // On click of the "Page 01" text i.e. event listener
    currentGallery = imagesSet1;
    currentIndex = currentIndexSet1;
  } else if (galleryNumber === 2) { // On click of "Page 02" text
    currentGallery = imagesSet2;
    currentIndex = currentIndexSet2;
  }
  updateGallery(); // Display updated gallery with the new set
  console.log("Switched to gallery", galleryNumber);
}

// ============ Call / Link element to functionalities ============ //

// ----- Display gallery ----- //
updateGallery();

// ----- On click, change to next image ----- //
selectedImage.addEventListener("click", nextImage);

// ----- On click of 'Page' Text, change to linked gallery ----- //
gallery1Text.addEventListener("click", function () {
  switchGallery(1);
});
gallery2Text.addEventListener("click", function () {
  switchGallery(2);
});
