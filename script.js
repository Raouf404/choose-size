// Declarations
let data1;
let offer25 = document.getElementById("offer-25");
let offer100 = document.getElementById("offer-100");
let offer200 = document.getElementById("offer-200");
let offer300 = document.getElementById("offer-300");
let offer400 = document.getElementById("offer-400");
let contentImage = document.getElementById("content-image");
let contentTitle = document.getElementById("content-title");
let contentText = document.getElementById("content-text");

// Functions
function button(buttonId) {
  contentImage.src = data1[buttonId].src;
  contentTitle.innerText = data1[buttonId].title;
  contentText.innerText = data1[buttonId].text;
}

function clearSelectedClass() {
  let buttons = [offer25, offer100, offer200, offer300, offer400];
  buttons.forEach(button => button.classList.remove("selected"));
}

// Event listeners
offer25.addEventListener("click", () => {
  clearSelectedClass();
  button(0);
  offer25.classList.add("selected");
});
offer100.addEventListener("click", () => {
  clearSelectedClass();
  button(1);
  offer100.classList.add("selected");
});
offer200.addEventListener("click", () => {
  clearSelectedClass();
  button(2);
  offer200.classList.add("selected");
});
offer300.addEventListener("click", () => {
  clearSelectedClass();
  button(3);
  offer300.classList.add("selected");
});
offer400.addEventListener("click", () => {
  clearSelectedClass();
  button(4);
  offer400.classList.add("selected");
});

// Main
function main(data) {
  contentImage.src = data[0].src;
  contentTitle.innerText = data[0].title;
  contentText.innerText = data[0].text;
}

// Main function call
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data1 = data;
    main(data);
  })
  .catch((error) => console.error("Error loading the JSON file:", error));
