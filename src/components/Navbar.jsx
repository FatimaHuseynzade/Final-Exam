import React from 'react'
import { BsCaretDownFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import Admin from '../../pages/Admin';
function Navbar() {
  return (
 
    <nav className='navbar'>
<div className='img'>
  <img src="./logo.png.webp" alt="" />
</div>
<ul>
  <li><a href="#">Home<BsCaretDownFill className='li-icons'/></a>
  <ul className='dropdown'>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>

  </ul>
  </li>
  <li><a href="#">Shop <BsCaretDownFill className='li-icons'/></a></li>
  <li><a href="#">Pages <BsCaretDownFill className='li-icons'/></a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">Contact</a></li>
 <button className='admin'><Link to={'/admin'}>Admin</Link></button>
</ul>
<div className='icon_div'>
<IoIosSearch className='ikon' />
<CiHeart className='ikon' />
<MdShoppingCart className='ikon'/>
</div>
   </nav>
   
  )
}

export default Navbar
