import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import 'modern-normalize/modern-normalize.css';
// import './styles/base.scss';
import AuthProvider from './context/AuthProvider';
// import authContext from './context/authContext';
import './index.css';

// console.log(authContext);

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <authContext.Provider value={{ name: 'Mango' }}> */}
    <AuthProvider>
      <App />
    </AuthProvider>
    {/* </authContext.Provider> */}
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root'),
);
