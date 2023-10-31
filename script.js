//Get Date
function getDate() {
  axios
    .get(
      "http://api.aladhan.com/v1/timingsByCity?city=Ouezzane&country=Morocco&method=3"
    )
    .then(function (response) {
      let currentDate = response.data.data.date.readable;
      let date = document.querySelector(".date");
      date.innerHTML = currentDate;
    })
    .catch(function (error) {
      alert(error);
    });
}


//Get Prayers Times
function getPrayersTimes(cityName) {
  axios
    .get(
      "http://api.aladhan.com/v1/timingsByCity?&country=Morocco&method=3&city=" +
        cityName
    )
    .then(function (response) {
      let fajr = response.data.data.timings.Fajr;
      let Sunrise = response.data.data.timings.Sunrise;
      let duhr = response.data.data.timings.Dhuhr;
      let asr = response.data.data.timings.Asr;
      let maghrib = response.data.data.timings.Maghrib;
      let isha = response.data.data.timings.Isha;
      document.querySelector(".Fajr").innerHTML = fajr + " PM";
      document.querySelector(".Sunrise").innerHTML = Sunrise + " PM";
      document.querySelector(".Duhr").innerHTML = duhr + " PM";
      document.querySelector(".Asr").innerHTML = asr + " AM";
      document.querySelector(".Maghrib").innerHTML = maghrib + " AM";
      document.querySelector(".Isha").innerHTML = isha + " AM";
    })
    .catch(function (error) {
      alert(error);
    });
}

getPrayersTimes();
getDate()

//cityName

let searchBtn = document.querySelector(".btn");
let input = document.querySelector(".input");
let city = document.querySelector(".city-name");
searchBtn.addEventListener("click", function () {
  let value = input.value;
  let capitalizeValue = value.charAt(0).toUpperCase() + value.slice(1);
  if (capitalizeValue.length != 0) {
    city.innerHTML = `<i class="fa-solid fa-location-dot local"></i> ${capitalizeValue} `;
    getPrayersTimes(capitalizeValue);
  } else {
    alert("Please Enter a City Name");
  }
});
