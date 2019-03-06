import {combineReducers} from 'redux';
import reducer from './reducer';

 const allReducers = combineReducers({
     r: reducer
 }) 

 export default allReducers;