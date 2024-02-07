// For languages change
const selectLanguage = document.getElementById("chose-language");
const welcomeWord = document.getElementById("salute");
const resultMessage = document.querySelector(".resultpage");

const saluteBack = {
  English: "Hello! Welcome to",
  Lingala: "Boyei malamu na",
  Kinyarwanda: "Murakaza neza kuri",
  Kiswahili: "Karibu kwenye",
  French: "Bienvenue chez",
  Spanish: "¡Hola! Bienvenido a",
};
const messagesToChose = {
  English: `Now, booking your ticket is easy. plan all your travels at home
without even moving from your room. Everything is at your fingertips.`,
  Kinyarwanda: `Noneho, kubika itike yawe biroroshye. tegura ingendo zawe zose murugo
utarinze no kuva mucyumba cyawe. Ibintu byose biri murutoki rwawe.`,
  French: `Désormais, réserver votre billet est simple. planifiez tous vos déplacements à la maison
sans même bouger de votre chambre. Tout est à votre portée.
`,
  Kiswahili: `Sasa, kuhifadhi tikiti yako ni rahisi. panga safari zako zote nyumbani
bila hata kuhama kutoka chumbani kwako. Kila kitu kiko mikononi mwako.`,
  Lingala: `Sikoyo, kosala réservation ya tike na yo ezali facile. bongisá mibembo na yo nyonso na ndako
kozanga ata kolongwa na shambre na yo. Nyonso ezali na nsɔngɛ ya misapi na yo.`,
  Spanish: `Ahora reservar tu billete es fácil. Planifica todos tus viajes desde casa sin siquiera moverte de tu habitación. Todo está a su alcance.`
};

selectLanguage.addEventListener("change", function () {
  const selectedOption = selectLanguage.value;
  welcomeWord.textContent = saluteBack[selectedOption];
  resultMessage.textContent = messagesToChose[selectedOption];
});

// for Flight destination searching
const roundTrip = document.getElementById("roundtrip");
const oneWayTrip = document.getElementById("onetrip");
const multiCityTrip = document.getElementById("multitrip");

const tripSource = document.getElementById("from-where");
const flipIcon = document.getElementById('flip-icon');
const tripDestination = document.getElementById("to-where");
const tripDepartDate = document.getElementById("depart-date");
const tripReturnDate = document.getElementById("return-date");
const travelers = document.getElementById("traveler");
const searchFlight = document.getElementById("searchflight");

function updateTripReturnDateDisplay() {
  if (oneWayTrip.checked) {
    tripReturnDate.style.display = 'none';
  } else if (roundTrip.checked || multiCityTrip.checked) {
    tripReturnDate.style.display = 'block';
  }
}

oneWayTrip.addEventListener("change", updateTripReturnDateDisplay);
roundTrip.addEventListener("change", updateTripReturnDateDisplay);
multiCityTrip.addEventListener("change", updateTripReturnDateDisplay);

flipIcon.addEventListener('click', ()=>{
  if(tripSource.value !== '' && tripDestination.value !== '') {
    const temp = tripSource.value;
    tripSource.value = tripDestination.value;
    tripDestination.value = temp;
  } else {
    alert('both the Source and Destination must not be empty!')
  }
})

// For trips
const finalbookingMessage = document.getElementById('booking-done');
const tripDeals = document.getElementById('trip-deals');

searchFlight.addEventListener('click', ()=>{
  const valuesToCheck = [tripSource.value, tripDestination.value, tripDepartDate.value, travelers.value];

  if (valuesToCheck.every(value => value !== '')) {
    finalbookingMessage.innerHTML = `Thank you! You selected Source: ${tripSource.value}, Destination: ${tripDestination.value}, Depart time: ${tripDepartDate.value}, and Number of People: ${travelers.value}.
    Please, Scroll down to view all available trips!`;
    finalbookingMessage.className = 'goodresulttext';
    tripDeals.classList.toggle('disabledclass', false);
  } else {
    finalbookingMessage.className = 'badresulttext';
    finalbookingMessage.innerHTML = `Ooups! We can't find your match, Please fill any Empty Fields and try again!`;
  }
})
