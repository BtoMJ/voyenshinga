import React from 'react';
import logo from '../../assets/logo.png';
import logoBco from '../../assets/logo-bco.png';
import van from '../../assets/van.png';
import './Logistica.css';

export default function Logistica() {
  return (
    <div className='logistica-container' id="logistica">

      <div className='logistica-nav'>
      <a href='/'><img class="animate__animated animate__backInLeft" src={logo} alt='logotipo' /></a>
      </div>

      <div className='logistica-content'>
        <div className='car'>
          <img className='camioneta' src={van} alt='camioneta' />
        </div>
        <div className='text'>
          <h1>- CDMX</h1>
          <p>Entregas PROGRAMADAS en CDMX y León Gto<br/>
            <strong>¡El mismo día!*</strong>
          </p>
        </div>
      </div>

      <div className='logistica-ribbon-container'>
        <div className='logistica-ribbon'>
          <h1>Logística Ligera</h1>
        </div>

      </div>

      <div className='logistica-footer'>
        <a href='/'><img className="logo-xs animate__animated animate__backInRight" src={logoBco} alt='logotipo chico' /></a>
      </div>

    </div>
  )
}
