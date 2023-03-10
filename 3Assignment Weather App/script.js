const form = document.querySelector("#form")
const searchbox = document.querySelector("#searchbox")
const searchbtn = document.querySelector("#searchbtn")

const api_key = "4aa2816d475eeb85ac25d28273d6c237"
// const city_name = "JAPAN"
// const api = ` https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key} `
// const img= ` https://openweathermap.org/img/wn/04n@2x.png `
// const img= ` https://openweathermap.org/img/wn/CODE@2x.png `

// form.addEventListener("submit",
//     function (event) {
//         const search = searchbox.value.trim();
//         console.log(search)
//         getWeather(search)
//         event.preventDefault();
//     }
// )

// function btnClick() {
searchbtn.addEventListener("click",
    function (event) {
        const search = searchbox.value.trim().toUpperCase();
        // if (search == "") {
        //     // alert("Enter city...");
        //     // console.log("Enter city")
        // }
        // else {}
        console.log(search)
        getWeather(search)
        event.preventDefault();

    })
// }

form.addEventListener("submit",
    function (event) {
        const search = searchbox.value.trim().toUpperCase();
        console.log(search)
        getWeather(search)
        event.preventDefault();
    })

// ==========================================================

function getWeather(city_name) {
    console.log("Loading...")
    const city = document.querySelector("#city")
    city.innerHTML = "Loading..."

    const api = ` https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric `
    fetch(api).then(response => {
        console.log(response.status)
        console.log(response.ok)

        return response.json();
    }).then(data => {
        console.log(data)
        showWeather(data);
    })
}


function showWeather(data) {
    if (data.cod == "404" || data.cod == "400") {
        const city = document.querySelector("#city")
        city.innerHTML = "Enter Valid City Name"

        const temp = document.querySelector("#temp")
        temp.innerHTML = ""

        const sunny = document.querySelector("#sunny")
        sunny.innerHTML = ""

        const img = document.querySelector("#img")
        img.src = ""

    }
    else {
        console.log("city= " + data.name)
        console.log("temp= " + data.main.temp)
        console.log("temp= " + data.weather[0].main)

        // const img = document.querySelector("#img")
        // const icon = data.weather[0].icon
        // img.src = ` https://openweathermap.org/img/wn/${icon}@2x.png `
        const id = data.weather[0].id
        console.log("id= " + id)
        showIcon(id);

        const city = document.querySelector("#city")
        // city.innerHTML = searchbox.value.trim().toUpperCase();
        city.innerHTML = data.name.toUpperCase();

        const temp = document.querySelector("#temp")
        temp.innerHTML = data.main.temp + "℃"

        const sunny = document.querySelector("#sunny")
        sunny.innerHTML = data.weather[0].main
    }

    function showIcon(id) {
        const img = document.querySelector("#img")

        if (id >= 200 && id <= 232) {
            console.log("Thunderstorm")
            img.src = "img/Thunderstorm.png"
        }

        else if (id >= 300 && id <= 321) {
            console.log("Drizzle")
            img.src = "img/Drizzle.png"
        }

        else if (id >= 500 && id <= 531) {
            console.log("Rain")
            img.src = "img/Rain.png"
        }

        else if (id >= 600 && id <= 622) {
            console.log("Snow")
            img.src = "img/Snow.png"
        }

        else if (id >= 701 && id <= 781) {
            console.log("Fog")
            img.src = "img/Fog.png"
        }

        else if (id == 800) {
            console.log("Clear")
            img.src = "img/Clear.png"
        }

        else if (id >= 801 && id <= 804) {
            console.log("Clouds")
            img.src = "img/Clouds.png"
        }

        else {
            console.log("")
        }

    }
}

