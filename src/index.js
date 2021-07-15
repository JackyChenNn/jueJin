import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import Index from './components/Index'
// import Index from "./components/Index";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    {/*<Index />*/}
    {/*<Index />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

