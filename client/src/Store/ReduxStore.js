import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers"


function saveToLocalStorage(store){
    try {
        const serializedstore = JSON.stringify(store);
        window.localStorage.setItem('store',serializedstore);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage(){
    try{
        const serializedstore = window.localStorage.getItem('store');
        if (serializedstore===null)return undefined ;
        return JSON.parse(serializedstore);
    }catch(e){
        console.log(e);
        return undefined;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(reducers,persistedState,composeEnhancers(applyMiddleware(thunk)))

store.subscribe(()=>saveToLocalStorage(store.getState()));

export default store;