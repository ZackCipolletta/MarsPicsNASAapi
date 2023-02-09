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

  document.getElementById('images').innerText = `Here are the images from the ${rover} rover's ${camera} on ${date}on Mars.`;

  response.photos.forEach((element, i) => {
    if (i <= 5) {
      let img = document.createElement('img');
      img.setAttribute('src', `${response['photos'][i]['img_src']}`);
      document.getElementById('images').append(img);
    }
  });
}

function displayDatesActive(response, rover) {
  let a = response.photo_manifest.photos.length;
  let y = a - 1;
  let calendarSelection = document.getElementById('dateSelect');
  let b = response['photo_manifest']['photos'][0]['earth_date'];
  let c = response['photo_manifest']['photos'][y]['earth_date'];
  calendarSelection.setAttribute('min', b);
  calendarSelection.setAttribute('max', c);
  document.getElementById('dateError').innerText = `Here are the dates the ${rover} was active on Mars.`;
}

function displayRoverByDate(e) {
  e.preventDefault();
  const rover = document.getElementById("roverSelect").value;
  hideCamera(rover);
  getDates(rover);
}

function hideCamera(rover) {
  let camSelect = document.getElementById('cameraSelect').children;
  let camSelectArr = Array.from(camSelect);

  camSelectArr.forEach(element => {
    element.removeAttribute('class');
  });
  if (rover === "Opportunity" || rover === "Spirit") {
    let removeCam = document.querySelectorAll("#C");
    let removeCamArr = Array.from(removeCam);
    removeCamArr.forEach(element => {
      element.setAttribute("class", "hidden");
    });
  } else if (rover === "Curiosity") {
    let removeCam = document.querySelectorAll("#S");
    let removeCamArr = Array.from(removeCam);
    removeCamArr.forEach(element => {
      element.setAttribute("class", "hidden");
    });
  }
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
  let date = document.getElementById("dateSelect").value;
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
  document.getElementById('roverSelection').addEventListener("submit", displayRoverByDate);

});