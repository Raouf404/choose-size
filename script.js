// Declarations
let data;
let currentButton = 0;
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
  const fadeOutElements = [contentTitle, contentText, contentImage];
  const fadeInElements = [contentTitle, contentText, contentImage];

  fadeOutElements.forEach((element) => {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });

  contentTitle.addEventListener(
    "transitionend",
    function () {
      contentImage.src = data[index].src;
      contentTitle.innerText = data[index].title;
      contentText.innerText = data[index].text;

      fadeInElements.forEach((element) => {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
      });
    },
    { once: true }
  );
}

function clearSelectedClass() {
  offers.forEach((button) => button.classList.remove("selected"));
}

function animateUnderline(index) {
  console.log("current: " + currentButton);
  console.log("index: " + index);

  const underlineWidth = document.querySelector(
    ".selected + .underline"
  ).offsetWidth;
  gsap.from(".selected + .underline", {
    duration: 0.2,
    x: (currentButton - index) * underlineWidth,
    ease: "power1.out",
  });
  currentButton = index;
}

// Event listeners
offers.forEach((offer, index) => {
  offer.addEventListener("click", () => {
    clearSelectedClass();
    updateContent(index);
    offer.classList.add("selected");
    animateUnderline(index);
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
  .then((data1) => {
    data = data1;
    main(data);
  })
  .catch((error) => console.error("Error loading the JSON file:", error));
