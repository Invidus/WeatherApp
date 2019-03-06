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

class App extends React.Component{
    render(){
        return(
            <div className = 'app-wrapper'>
                <Form />
                
            </div>
        )
    }
}
export default App;