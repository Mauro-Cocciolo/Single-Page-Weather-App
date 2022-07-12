import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import "./index.css"

import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
<App />
  </BrowserRouter>,
  document.getElementById('root')
);

/*
Tengo que envolver mi componente principal, en este caso App.js, en el componente BrowserRouter que me viene de la librería Router.
Claro que primero tengo que importarlo.

SIGO EN Nav
*/
