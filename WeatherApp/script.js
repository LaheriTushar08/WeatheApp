const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "abe7f706bfmsh0be66e6cb1cfa23p1cbd5djsn5bb32f23a185",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function fetchData(city) {
  cityname.innerHTML = city;
  try {
    const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
    const result = await response.json(); // Parse the response as JSON

    // Access properties from the parsed JSON
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    ch.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    cw.innerHTML = result.wind_speed;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
    wind_degrees.innerHTML = result.wind_degrees;
  } catch (error) {
    console.error(error);
  }
}

submit.addEventListener("click", (event) => {
  event.preventDefault(); 
  fetchData(city.value);
});




// Call the async function with a string argument
fetchData('Delhi');

Mumbai.addEventListener("click", (event) => {
    event.preventDefault(); 
    fetchData('Mumbai');
  });

Jamshedpur.addEventListener("click", (event) => {
    event.preventDefault(); 
    fetchData('Jamshedpur');
  });

Mathura.addEventListener("click", (event) => {
    event.preventDefault(); 
    fetchData('Mathura');
  });

