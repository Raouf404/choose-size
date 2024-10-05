// Declarations
let data1;
const offers = [
  document.getElementById("offer-25"),
  document.getElementById("offer-100"),
  document.getElementById("offer-200"),
  document.getElementById("offer-300"),
  document.getElementById("offer-400"),
];
const contentImage = document.getElementById("content-image");
const contentTitle = document.getElementById("content-title");
const contentText = document.getElementById("content-text");

// Functions
function updateContent(index) {
  contentImage.src = data1[index].src;
  contentTitle.innerText = data1[index].title;
  contentText.innerText = data1[index].text;
}

function clearSelectedClass() {
  offers.forEach((button) => button.classList.remove("selected"));
}

// Event listeners
offers.forEach((offer, index) => {
  offer.addEventListener("click", () => {
    clearSelectedClass();
    updateContent(index);
    offer.classList.add("selected");
  });
});

// Main
function main() {
  updateContent(0);
  if (offers.length > 0) {
    offers[0].classList.add("selected");
  }
}

// Main function call
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data1 = data;
    main(data);
  })
  .catch((error) => console.error("Error loading the JSON file:", error));
