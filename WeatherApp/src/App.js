import React from 'react';
import Weather from './components/weather';
import Info from './components/info';
import Form from './components/form';

// const App = () => {
//     return(
//         <div className = 'app-wrapper'>
//             <Form />
//             <Weather />
//         </div>
//     )
// }

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {//Проверка на ввод инфы в поле
            const api_url = await
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7e24578ea405cc1bc51c26e2e18df599`);
            const data = await api_url.json();

            var tempC = (data.main.temp - 32) *5 /9;

            
            this.setState({
                temp: tempC,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                error: ""
            });
        }
    }
    render() {
        return (
            <div >

                <Form weatherMethod={this.getWeather} />
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                />
            </div>
        );
    }
}
export default App;