import {combineReducers}from "redux"
import {firebaseReducer}from "react-redux-firebase"
import {firestoreReducer}from "redux-firestore"
import clientReducer from "./clintReducer"
import authReducer from "./authReducer"


const rootReducer = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    client:clientReducer, //the name of collection  on firebase
    auth:authReducer
})

export default rootReducer