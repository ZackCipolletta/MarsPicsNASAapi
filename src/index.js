import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MarsImages from './js/MarsImages.js';

// Business Logic

async function getMarsImages(date) {
  const response = await MarsImages.getImages(date);
  if (response.photos) {
    displayImages(response, date);
  } else {
    displayError(response, date);
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

function marsForm(event) {
  event.preventDefault();
  let date = document.getElementById("date").value;
  console.log(date);
  getMarsImages(date);
}

function cameraSelect(event) {
  event.preventDefault();
  let camera = document.getElementById("cameraSelection").value;
  console.log(camera);
}

window.addEventListener("load", function () {
  document.getElementById('dateSelection').addEventListener("submit", marsForm);
  document.getElementById('cameraSelection').addEventListener("submit", cameraSelect);

});