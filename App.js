import React from 'react';
import { Provider } from 'react-redux'

import MainNavigator from './navigation'
import {init } from './db'
import store from './store'

init().then(
  ()=>console.log("base de datos inicializada")
).catch((err)=>{
  console.log("error al conectar")
  console.log(err.message)

})

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

