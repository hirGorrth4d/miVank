import React from 'react';


import MainNavigator from './navigation'
import {init } from './db'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

