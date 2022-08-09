import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router, BrowserRouter, Routes } from 'react-router-dom'
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AboutUS from './responsivePages/AboutUS';
import Carrers from './responsivePages/Carrers';
import ContactUS from './responsivePages/ContactUS';
import Insights from './responsivePages/Insights';
import Services from './responsivePages/Services';
import Navbar from './responsivePages/Navbar';
import LoginPage from './responsivePages/LoginPage';
// import Home from './responsivePages/Home';

const Home = lazy(() => import("./responsivePages/Home"));

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>
// );
root.render(
  <Router >
    <Suspense fallback={<div>Loading...</div>}>
    <div className='container-fluid' >
      <h1>Welcome to React Browser Router</h1>
      <Navbar/>
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/aboutUs" element={<AboutUS/>} />
        <Route path='/carrers' element={<Carrers/>} />
        <Route path='/contactUs' element={<ContactUS/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/insights' element={<Insights/>} />
        <Route path='/loginPage' element={<LoginPage/>} />
      </Routes>
    </div>
    </Suspense>
  </Router>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
