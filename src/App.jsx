import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"

import Form from "./Components/Form"
import Home from "./Components/Home"

function App() {
  return (
    // <div>
    //   <Header />
    //   {/* <Landing /> */}
    //   <Community />
    //   <Libraries />
    //   <Footer />
    // </div>

    <Routes>
      <Route path="/create-resource" element={<Form />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
