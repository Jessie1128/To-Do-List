import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
// import HomePage from './app/page/homePage/homePage';
// import ListPage from './app/page/listPage/listPage';
import App from './app/app';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <HomePage /> */}
//     <ListPage />
//   </React.StrictMode>
// );


// reportWebVitals();