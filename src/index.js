import React from 'react';
import ReactDOM from 'react-dom/client';
// to set all elements style
import './normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'; // @tailwind
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container m-auto w-11/12 ">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
