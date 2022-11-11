import React from 'react';

import logo from '../../assets/logo.png';
import moto from '../../assets/moto.png';
import van from '../../assets/van.png';
import repartidor from '../../assets/repartidor.png';
import helicoptero from '../../assets/heli.png';
import scooter from '../../assets/scooter.png';
import camioneta from '../../assets/camioneta.png';

import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrMail } from "react-icons/gr";

import { HiPhone } from "react-icons/hi2";

import { ImWhatsapp } from "react-icons/im";

import { FaRobot } from "react-icons/fa";

import { MdConnectWithoutContact } from "react-icons/md";
import { Md3P } from "react-icons/md";

import './Home.css';


setTimeout(showIn, 550);
setTimeout(changeClass, 1000);

function showIn() {
  
  document.getElementById("scooter").style.display = "block";
  document.getElementById("scooter").className = "animate__animated animate__backInRight";

  document.getElementById("camioneta").style.display = "block";
  document.getElementById("camioneta").className = "animate__animated animate__backInRight";
  
  document.getElementById("helicoptero").style.display = "block";
  document.getElementById("helicoptero").className = "animate__animated animate__backInRight";
  
}

function changeClass() {
  document.getElementById("card-camioneta").className = "card";
  document.getElementById("card-scooter").className = "card";
  document.getElementById("card-heli").className = "card";
}

export default function Home() {
  return (
    <div className='home-container'>
      <div className='nav-container'>
        <div className='logo-container'>
          <img class="animate__animated animate__backInLeft" src={logo} alt='logotipo' />
        </div>
        <div className='tools-container'>
          <div className='social animate__animated animate__backInRight' id="red-contact">
            <div className='red'><MdConnectWithoutContact /></div>
            <div className='red'><GrInstagram /></div>
            <div className='red'><GrFacebook /></div>
            <div className='red'><GrTwitter /></div>
            <div className='red2'>@Voyenshinga</div>
          </div>
          <div className='contact animate__animated animate__backInRight'>
            <div className='red' Style="margin-right:8px"><Md3P  /></div>
            <div className='red'><HiPhone /></div>
            <div className='red'><ImWhatsapp /></div>
            <div className='red'><GrMail /></div>
            <div className='red'><FaRobot /></div>
          </div>

        </div>
      </div>
      <div className='content-container'>

        <div className='card animate__animated animate__backInUp' id='card-camioneta'>
          <div className='icon'>
           <img src={camioneta} id="camioneta" alt='icono-camioneta'/>
          </div>
          <div className='data-container'>
            <div className='title'>
              <h2>Logística Ligera</h2>
            </div>
            <div className='image'>
              <img className='camioneta' src={van} alt='camioneta' />
            </div>
          </div>
          <div className='sub-title'>
            <p>
              Entregas PROGRAMADAS en CDMX y León Gto.<br/>
              <strong>¡El mismo día!</strong>
            </p>
            <a href="#logistica">+ info</a>
          </div>
        </div>

        <div className='card animate__animated animate__backInUp' id='card-scooter'>
          <div className='icon'>
           <img src={scooter} id="scooter" alt='icono-scooter'  Style='width:120px'/>
          </div>
          <div className='data-container'>
            <div className='title'>
              <h2>Logística On Demand</h2>
            </div>
            <div className='image'>
              <img className='moto' src={moto} alt='camioneta' />
            </div>
          </div>
          <div className='sub-title'>
            <p>
              Entregas en León Gto.<br/>
              <strong>¡Solicita en el momento!</strong>
            </p>
            <a href="#logisticaOn">+ info</a>
          </div>
        </div>

        <div className='card animate__animated animate__backInUp' id='card-heli'>
          <div className='icon'>
           <img src={helicoptero} id="helicoptero" alt='icono-helicoptero' Style='width:180px'/>
          </div>
          <div className='data-container'>
            <div className='title'>
              <h2>Logística Same Day</h2>
            </div>
            <div className='image'>
              <img className='repartidor' src={repartidor} alt='camioneta' />
            </div>
          </div>
          <div className='sub-title'>
            <p>
              Entregas CDMX y León Gto.<br/>
              <strong>¡El mismo día!</strong>
            </p>
            <a href="#logisticaSame">+ info</a>
          </div>
        </div>

      </div>
    </div>
  )
}
