import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

import './index.css';
// import CreateButton from './Components/CreateButtonComponent';
import Form from './Components/FormComponent';
import thunk from 'redux-thunk';
import ContactPage from './Components/reduxFormRender'
import SyncValidationForm from './Components/SyncValidationForm'
// import {Values} from 'redux-form-website-template'

const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
  )

// render(
//   <Provider store={store}>
//     <CreateButton/>
//   </Provider>,
//   document.getElementById('example')
// )

render(
  <Provider store={store}>
    <Form />
    <ContactPage />
    <SyncValidationForm/>
    {/* <Values form="syncValidation"/> */}
  </Provider>,
  document.getElementById('example')
)
