import React from 'react';
import Button from "react-bootstrap/Button";
import HoverDropdown from "./HoverDropdown.jsx";
import '/src/header.css'

function Header() {
return (
    <header>
        <img src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg" alt="" />
        <label htmlFor="search">
            <img src="/src/assets/search-icon.png" alt="" />
            <input type="text" placeholder='Etkinlik , İş İlani , Blog ara'  />
        </label>
        <ul>
            <li><a href="" > Etkinlikler</a></li>
            <li><a href="https://www.techcareer.net/jobs"> İş İlanları</a></li>
            <li><a href=""> Eğitimler</a></li>
            <li><a href="" id='test-link'> Testler</a></li>
            <li><a href=""> Komünite</a></li>
        </ul>
        
        <Button className='button btn btn-success' >Giriş / Üye Ol </Button>
        
    </header>
);
}

export default Header;
