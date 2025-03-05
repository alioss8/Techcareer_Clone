import { useState } from 'react'
import Header from "./components/header";
import Signup from "./components/Signup";
import Events from "./components/events";


function App() {
  

  return (
    <div>
      <Header />
      <Signup/>
      <Events/>
    </div>
  )
}

export default App
