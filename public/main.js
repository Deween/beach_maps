const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}


function initMap(){
  //map options
  let options_map= {
    zoom:14,
    center:{lat:42.3601, lng:-71.0598}
  }
  //new map 
  let map = new google.maps.Map(document.getElementById('map'),options_map);

  //Adding a marker 
  // let marker = new google.maps.Map({
  //   position:{lat:42.4668,lng:-70.9695},
  //   map:map
  // });
  initAutocomplete();
}

let autocomplet;
function initAutocomplete(){
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    {
      types: ['establishment'],
      componentRestrictions: {'country':['CA','USA']},
      fields: ['place_id','name','geometry']
  
    }
  )
  autocomplete.addListener('place_changed', onPlaceClick);
}


function onPlaceClick(){
  let place = autocomplete.getPlace()
  
  if(!place.geometry){
    // No prediction was selected
    document.getElementById('autocomplete').placeholder = "Search";
  } else {
    //Show details of the valid place
    document.getElementById('details').innerHTML = place.name;
  }
  

}
