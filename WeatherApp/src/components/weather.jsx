import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.country &&
                    <div>
                        {this.props.country}<br></br>
                        {this.props.city}<br></br>
                        {this.props.temp}<br></br>
                        {this.props.pressure}<br></br>
                    </div>
                }

            </div>

        );
    }
}

export default Weather; 