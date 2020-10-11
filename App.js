import React, { useState } from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import Navigator from './navigation/Navigator';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './store/reducer'
import {addCoupon} from './store/action'
import LoginScreen from './source/pages/LoginScreen'

const App = () => {

  const [logged, setLogged] = useState(false)

  const rootReducer = combineReducers({
    acceptedCoupons: Reducer
  })
  const store = createStore(rootReducer)

  const loginHandler = (username, password) => {
    console.log('here')
    // if (username === 'Sura' && password === 1234) {
     
    // }
  }
  

  if (!logged) {
    return <LoginScreen callback={loginHandler}/>
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
};

export default App;
