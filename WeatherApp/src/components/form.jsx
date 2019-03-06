import React from 'react';
import Weather from './weather'

const Form = (props) => { 
    debugger;
    return(
        
        <div>
            <form onSubmit = {this.props.Weather.getWeather}>          
                <input type="text" name="city" />
                <button>Get</button>
            </form>
        </div>
    )
    }


export default Weather; 