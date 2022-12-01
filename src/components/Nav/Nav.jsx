import React from 'react';
import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrMail } from "react-icons/gr";

import { HiPhone } from "react-icons/hi2";

import { ImWhatsapp } from "react-icons/im";

import { FaRobot } from "react-icons/fa";

import { MdConnectWithoutContact } from "react-icons/md";
import { Md3P } from "react-icons/md";

import './Nav.css';

export default function Nav() {
  return (
    <div className='tools-container'>
        <div className='social animate__animated animate__backInRight' id="red-contact">
          <div className='red' Style="margin-left:-5px"><MdConnectWithoutContact /></div>
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
  )
}
