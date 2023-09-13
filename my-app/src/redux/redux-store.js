import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";

import { composeWithDevTools } from '@redux-devtools/extension';

import usersReducer from "./users-reduser";

import thunk from 'redux-thunk'
import messagesReducer from "./messages-reduser";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    messagesPage: messagesReducer,
    authReducer: authReducer

})

let store = createStore (reducers,
    composeWithDevTools(
    applyMiddleware(thunk)))
window.store = store

export default store