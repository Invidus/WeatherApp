import React from 'react';

const Form = (props) => {

    return (
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" />
            <button>Get</button>
        </form>
    );
}

export default Form; 