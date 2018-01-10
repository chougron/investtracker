import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import 'jquery/dist/jquery.min.js' // eslint-disable-line no-unused-vars
import 'bootstrap/dist/js/bootstrap'; // eslint-disable-line no-unused-vars
import 'bootstrap/dist/css/bootstrap.min.css'; // eslint-disable-line no-unused-vars
import '../styles/desktop.scss'

ReactDOM.render(
  <App></App>,
  document.getElementsByTagName('body')[0])

