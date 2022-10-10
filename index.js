// Declaring the variables
// let lon;
// let lat;
// let temperature = document.querySelector(".temp");
// let summary = document.querySelector(".summary");
// let loc = document.querySelector(".location");
// let icon = document.querySelector(".icon");
// let city = document.querySelector("input").value;
const kelvin = 273;

var weatherData = document.querySelector("button");
  weatherData.addEventListener("click",function(e){
    e.preventDefault();
    var input = document.getElementsByClassName("weather")[0].value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=f653b999d572111493fe3e5ca3f613ac";
    console.log("input",input);
    if(input == ""){
        alert("Enter a city name");
    }else{
    fetch(url).then(function(response){
        if(response.ok){
            return response.json();
        }else{
            throw new Error(Error);
        }
    }).then(function(data){
      const html =    `
          <h2 class="text-danger text-center"><span class="text-dark">City:</span>${data.name}</h2>
          ` ;
        document.getElementById("display_data").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
    }
  })
// window.addEventListener("load", () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position);
//       lon = position.coords.longitude;
//       lat = position.coords.latitude;
  
//       // API ID
//       const api = "f653b999d572111493fe3e5ca3f613ac";
  
//       // API URL
//       const base =
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
  
//       // Calling the API
//       fetch(base)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           console.log(data);
//           temperature.textContent = 
//               Math.floor(data.main.temp - kelvin) + "°C";
//           summary.textContent = data.weather[0].description;
//           loc.textContent = data.name + "," + data.sys.country;
//           let icon1 = data.weather[0].icon;
//           icon.innerHTML = 
//               `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
//         });
//     });
//   }
// });