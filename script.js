const apiKey ='6fc55afdb561e07016159a264de97299';
const apiUrl ='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");


      
      async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +'°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity +'%';
        document.querySelector(".winds").innerHTML = data.wind.speed +'km/h';
      }

      searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
      })

     
     
      







// const cityInput = document.querySelector('.city-input')
// const searchBtn = document.querySelector('.search-btn')

// searchBtn.addEventListener('click', () => {
//     if (cityInput.value.trim() != ''){
//       console.log(cityInput.value)
//       cityInput.value = ''
//       cityInput.blur()
//     }
    
// }) 
