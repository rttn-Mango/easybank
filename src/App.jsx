import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Careers from "./pages/Careers"
import {Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <>
      <Header />
      <Routes>
          <Route exact path="" element={<Homepage/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/blog" element={<Blog/>}></Route>
          <Route exact path="/careers" element={<Careers/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
