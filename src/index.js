import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MarsImages from './js/MarsImages.js';

// Business Logic

async function getMarsImages(date, camera) {
  const response = await MarsImages.getImages(date, camera);
  if (response.photos) {
    displayImages(response, date, camera);
  } else {
    displayError(response, date, camera);
  }
}

// UI Logic
function displayImages(response, date) {
  console.log("hello");

  document.getElementById('images').innerText = `Here are the images for ${date} on Mars.`;

  response.photos.forEach((element, i) => {
    if (i <= 5) {
      let img = document.createElement('img');
      img.setAttribute('src', `${response['photos'][i]['img_src']}`);
      document.getElementById('images').append(img);
      console.log(element);
    }
  });

  

  // let image1 = `${response['photos'][0]['img_src']}`;


  // let img = document.createElement('img');
  // img.setAttribute('src', image1);

  // document.getElementById('images').append(img);

}


function displayError(error, date) {
  document.getElementById('error').innerText = `There was an error getting images from ${date}: ${error}.`;
}

function marsForm() {
  let date = document.getElementById("date").value;
  console.log(date);
  return date;
}

function cameraSelect(event) {
  event.preventDefault();
  let camera = camSel();
  let date = marsForm();
  getMarsImages(date, camera);
  console.log(camera);
}

function camSel() {
  const cam = document.getElementById("cameraSelection").value;
  let selectedCam;
  if (cam === "FHAZ") {
    selectedCam = "FHAZ";
  } else if (cam === "RHAZ") {
    selectedCam = "RHAZ";
  } else if (cam === "MAST") {
    selectedCam = "MAST";
  } else if (cam === "CHEMCAM") {
    selectedCam = "CHEMCAM";
  } else if (cam === "MAHLI") {
    selectedCam = "MAHLI";
  } else if (cam === "MARDI") {
    selectedCam = "MARDI";
  } else if (cam === "NAVCAM")
    selectedCam = "NAVCAM";

  return selectedCam;
}
window.addEventListener("load", function () {
  document.getElementById('cameraSelection').addEventListener("submit", cameraSelect);

});