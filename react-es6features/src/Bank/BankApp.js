
import React from 'react';
import { Account } from './components/account';
import './styles/bankapp.css'

function BankApp() {

  return (

    <div className="jumbotron jumbotron-fluid">
      <h1 className='h1'>Neha's Corporate Bank</h1>
      <Account />
    </div>

  );

}

export default BankApp;