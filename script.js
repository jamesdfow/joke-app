// Fetch and populate breed dropdown
function loadBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const breedSelect = document.getElementById("breedSelect");
      const breeds = Object.keys(data.message);
      breeds.forEach((breed) => {
        let option = document.createElement("option");
        option.value = breed;
        option.textContent = breed;
        breedSelect.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching breeds:", error));
}

// Fetch random image
function getRandomImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("dogImage").src = data.message;
    })
    .catch((error) => console.error("Error fetching image:", error));
}

// Fetch image of selected breed
function getBreedImage() {
  const breed = document.getElementById("breedSelect").value;
  if (breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("dogImage").src = data.message;
      })
      .catch((error) => console.error("Error fetching breed image:", error));
  } else {
    alert("Please select a breed first.");
  }
}

// Load breeds on page load
window.onload = loadBreeds;
