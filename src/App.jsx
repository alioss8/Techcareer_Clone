import { useState } from 'react'
import Header from "./components/header";
import Signup from "./components/Signup";
import Events from "./components/events";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/cards";
import Jobposting from "./components/jobposting";

function App() {
  

  return (
    <div>
      <Header />
      <Signup/>
      <Events/>
      <Cards></Cards>
      <Jobposting></Jobposting>
    </div>
  )
}

export default App
