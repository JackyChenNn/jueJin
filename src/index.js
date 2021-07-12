import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Navigation from './Navigation'
import Timeline from "./Timeline";

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <Navigation />
    <Timeline />
  </React.StrictMode>,
  document.getElementById('root')
);

