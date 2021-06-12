const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)
let address = "";
// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}

<<<<<<< HEAD
function storeInput(inputVal) {
  address = inputVal;
}

function apiRequest() {
  let token = address;
  alert("Address: " + token);
}
=======
// Setting up a database

const addForm = document.forms['place'];
console.log(addForm);
addForm.addEventListener('submit', function(e)
{
  e.preventDefault();
  console.log(e)
  const inp = addForm.querySelector('#placeInput').value;
  console.log(inp);
})


>>>>>>> ad2feb62b38dee7eaa9eaab66f19d08fb270edca
