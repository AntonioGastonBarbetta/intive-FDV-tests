import '../css/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import {App} from './components/form.jsx'

import { Provider } from 'react-redux'

import { createStore } from 'redux'
import UsersApp from './reducers/reducers.js'


const store = createStore(UsersApp)

class ClassMain extends React.Component{

  render(){ 
    return ( 
      <span>
        <App /> 
      </span>
    )
  }
}



ReactDOM.render(
  <Provider store = {store}>
    <ClassMain/>
  </Provider>,
  document.getElementById('root')
);