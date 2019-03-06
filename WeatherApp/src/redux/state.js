import {createStore} from redux;
import allReducers from "./container";

const store = createStore(allReducers);
