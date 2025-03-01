import React from 'react'
import Button from "react-bootstrap/Button";
import '../styles/signup.css'

function Signup() {
  return (
    <main>
      <div className='Content'>
        <h1> <strong>Techcareer.net’le</strong> teknoloji kariyerinde hep ileriye</h1>
        <p>En yenilikçi teknoloji etkinliklerine ve yarışmalarına, heyecan verici iş fırsatlarına, eğitimlere ve yetenek belirleme testlerine ulaşmak için aramıza katıl.</p>
        <Button className='button-2  btn-light' >Giriş / Üye Ol </Button>
      </div>
        <img src="/src/assets/desktop-setup.webp" alt="desktup setup" />
    </main>
  )
}

export default Signup