import { useState } from 'react'
import Header from "./components/header";
import Signup from "./components/Signup";
import Events from "./components/events";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootcamp from "./components/bootcamp";
import Jobposting from "./components/jobposting";
import Education from "./components/education";

function App() {
  

  return (
    <div>
      <Header />
      <Signup/>
      <Events/>
      <Bootcamp></Bootcamp>
      <Jobposting></Jobposting>
      <Education></Education>
    </div>
  )
}

export default App
