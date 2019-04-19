import React from 'react';

const Weather = (props) => {

    return (
        <div>
            {props.country &&
                <div>
                    {props.country}<br></br>
                    {props.city}<br></br>
                    {props.temp}<br></br>
                    {props.pressure}<br></br>
                </div>
            }
        </div>
    );
}

export default Weather; 