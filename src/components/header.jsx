import React from 'react';
import Button from "react-bootstrap/Button";
import '../styles/header.css'

function Header() {
return (
    <header>
        <img className='techcareer-svg'  src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg" alt="" />
        <label htmlFor="search">
            <img src="/src/assets/search-icon.png" alt="" />
            <input type="text" placeholder='Etkinlik , İş İlani , Blog ara'  />
        </label>
        <ul>
            <li><a href="" > Etkinlikler</a></li>
            <li><a href="https://www.techcareer.net/jobs"> İş İlanları</a></li>
            <li><a href=""> Eğitimler</a></li>
            <li> <span>🟢</span><a href="" id='test-link'> Testler</a></li>
            <li><a href=""> Komünite</a></li>
        </ul>
        
        <Button className='button  btn-light' >Giriş / Üye Ol </Button>
        
    </header>
);
}

export default Header;
