import React, { useState } from 'react';
import Navigator from './navigation/Navigator';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './store/reducer'


const App = () => {

  const [logged, setLogged] = useState(false)

  const rootReducer = combineReducers({
    mainReducer: Reducer
  })
  const store = createStore(rootReducer)

  const loginHandler = (username, password) => {

    setLogged(true)

  }
  

 

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
};

export default App;
