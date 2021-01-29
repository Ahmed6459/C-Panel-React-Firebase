import {createStore,applyMiddleware}from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension" // redux dev tool
import {
  getFirebase
} from 'react-redux-firebase'
import {createFirestoreInstance,getFirestore } from 'redux-firestore'
import firebase from "./config/firebaseconfig"
import rootReducer from "./reducers/rootReducer"


// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  enableClaims: true // Firestore for Profile instead of Realtime DB
};

const middleWare = [thunk.withExtraArgument({getFirebase,getFirestore})]


const initialState = {}
export const store = createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

