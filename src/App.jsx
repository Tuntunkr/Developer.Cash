import React from "react"
import "./App.css"
import Body from "./Components/Body"
import Community from "./Components/Community"
import Header from "./Components/Header"
import Landing from "./Components/Landing"

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Community />
      {/* <Body/> */}
    </div>
  )
}

export default App
