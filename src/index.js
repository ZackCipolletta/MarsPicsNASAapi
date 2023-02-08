import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MarsImages from './js/MarsImages.js';

// Business Logic

async function getMarsImages(date) {
  const response = await MarsImages.getImages(date);
  if (response.photos.length > 1) {
    displayImages(response, date);
  } else {
    displayError(response, date);
  }
}

// UI Logic

function displayImages(response) {
  console.log("hello");

  // <img src="" alt=""></img>;

                                                                      
  let image1 = `${response['photos'][0]['img_src']}`;
  // let image2 = `${response['photos'][1]['img_src']} Hello ${date}`;
  // let image3 = `${response['photos'][2]['img_src']} Hello ${date}`;
  // let image4 = `${response['photos'][3]['img_src']} Hello ${date}`;
  // let image5 = `${response['photos'][4]['img_src']} Hello ${date}`;
  // let image6 = `${response['photos'][5]['img_src']} Hello ${date}`;


  let img = document.createElement('img');
  img.setAttribute('src', image1);
  
  document.getElementById('images').append(img);
    
}

function displayError(error, date) {
  document.getElementById('error').innerText = `There was an error getting images from ${date}: ${error}.`;
}

function marsFrom(event) {
  event.preventDefault();
  let date = document.getElementById("date").value;
  console.log(date);
  getMarsImages(date);
}

window.addEventListener("load", function () {
  document.getElementById('dateSelection').addEventListener("submit", marsFrom);

});