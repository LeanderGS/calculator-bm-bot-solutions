import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/normalize.scss"
import './styles/globals.scss';
import { App } from "./Components/App/App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
