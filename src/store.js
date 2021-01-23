import {createStore,applyMiddleware}from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {
  getFirebase
} from 'react-redux-firebase'
import {createFirestoreInstance } from 'redux-firestore'
import firebase from "./config/firebaseconfig"
import rootReducer from "./reducers/rootReducer"




const middleWare = [thunk.withExtraArgument({getFirebase})]


const initialState = {}
export const store = createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

