import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
// import './app/page/homePage/homePage.css'
// import './app/page/base.css'
// import './app/page/listPage/addForm/addForm.css'
// import './app/page/listPage/list/list.css'
import App from './app/app';
import {initializeApp} from 'firebase/app'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// const firebaseConfig = {
//   apiKey: "AIzaSyCy3Kj_keH17Y6IyFdW3OuqZjfu3gkoTWA",
//   authDomain: "to-do-list-f66c3.firebaseapp.com",
//   projectId: "to-do-list-f66c3",
//   storageBucket: "to-do-list-f66c3.appspot.com",
//   messagingSenderId: "243707301425",
//   appId: "1:243707301425:web:88a38c432cc00a229b8f10"
// };

// initializeApp(firebaseConfig)
// reportWebVitals();