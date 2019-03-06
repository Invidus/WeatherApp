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
    
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=00c84f1f2e90aadb38b5b3daae21492f`);
        const data = await api_url.json();
        console.log(data);

    }
    render() {
        return (
            <div >
                
                <Form weatherMethod={this.getWeather} />
                
            </div>
        );
    }
}
export default App;