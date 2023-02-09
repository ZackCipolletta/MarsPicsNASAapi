import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MarsImages from './js/MarsImages.js';

// Business Logic

async function getMarsImages(rover, date, camera) {
  const response = await MarsImages.getImages(rover, date, camera);
  if (response.photos) {
    displayImages(response, rover, date, camera);
  } else {
    displayError(response, rover, date, camera);
  }
}


async function getDates(rover) {
  const response = await MarsImages.getDates(rover);
  if (response) {
    displayDatesActive(response, rover);
  } else {
    dateError(response, rover);
  }
}



// UI Logic
function displayImages(response, rover, date, camera) {
  console.log("hello");

  document.getElementById('images').innerText = `Here are the images from the ${rover} rover's ${camera} on ${date}on Mars.`;

  response.photos.forEach((element, i) => {
    if (i <= 5) {
      let img = document.createElement('img');
      img.setAttribute('src', `${response['photos'][i]['img_src']}`);
      document.getElementById('images').append(img);
      console.log(element);
    }
  });
}

function displayDatesActive(response, rover) {
  response.photo_manifest.photos.forEach((element, i) => {
    console.log(`${response['photo_manifest']['photos'][i]['earth_date']}`);

  })

  console.log(`display date called ${response['photo_manifest']['photos'][0]['earth_date']}`);
  document.getElementById('dateError').innerText = `Here are the dates the ${rover} was active on Mars.`;
}

function displayDate(e) {
  e.preventDefault();
  const rover = document.getElementById("roverDateSelect").value;
  getDates(rover);
}

function displayError(error, date) {
  document.getElementById('error').innerText = `There was an error getting images from ${date}: ${error}.`;
}

function dateError(error, rover) {
  document.getElementById('error').innerText = `There was an error getting the active dates for ${rover}: ${error}.`;
}

function chooseRover() {
  const rover = document.getElementById("roverSelect").value;
  return rover;
}

function chooseDate() {
  let date = document.getElementById("date").value;
  console.log(date);
  return date;
}

function chooseCam() {
  const cam = document.getElementById("cameraSelect").value;
  return cam;
}

function displayMarsImages(event) {
  event.preventDefault();
  let rover = chooseRover();
  let camera = chooseCam();
  let date = chooseDate();
  getMarsImages(rover, date, camera);
  console.log(camera);
}

window.addEventListener("load", function () {
  document.getElementById('cameraSelection').addEventListener("submit", displayMarsImages);
  document.getElementById('roverDatesSelection').addEventListener("submit", displayDate);

});