// LES VARIABLES

// Create your variables here
// ==========================================

let numberOfSeasons = 6;
let numberOfEpisodes = 12;

// ==========================================

// Calculate totalShowTime here
// =====================================

let episodeTime = 45;
let commercialTime = 5;
let totalShowTime = (episodeTime + commercialTime)*12*6;

// =====================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season

Total viewing time: ${totalShowTime} minutes`


// LES CONSTANTES

// Create constants here
// =====================================
const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;


// =====================================

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;
  
  hours.innerText = `${calcHours} hours`;
  minutes.innerText = `${calcMinutes} minutes`;
  seconds.innerText = `${calcSeconds} seconds`;
});


//TYPE DE DONNEES

// Create variables here
// =========================================

let episodeTitle = "Mon épisode-test";
let episodeDuration = 100;
let hasBeenWatched = true;

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`

// Les trois principaux types de données primitifs en JavaScript : number (nombre) ; boolean (valeur logique) ; string (chaîne de caractères).
// Il existe d'autres types de données plus complexes.
// Trois autres types de données primitifs dans JavaScript :   null  ,   undefined  et   symbol.
// NOTA BENE : https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures