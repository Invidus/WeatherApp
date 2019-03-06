import React from 'react';

const Weather = () => { 
    debugger;
    let getWeather = async () => {
        debugger;
        const api_url = await 
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&APPID=00c84f1f2e90aadb38b5b3daae21492f`)
        const data = await api_url.json();
        console.log(data);
        alert("dsa");
    }
}

export default Weather; 