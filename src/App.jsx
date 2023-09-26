import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Careers from "./pages/Careers"
import {Routes, Route } from "react-router-dom"

function App() {
  const ROUTES = [
    {
      path: '',
      element: <Homepage/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/blog',
      element: <Blog/>
    },
    {
      path: '/careers',
      element: <Careers/>
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        {
          ROUTES.map(route => {
            return(
              <Route exact key={route.path} path={route.path} element={route.element}/>
            )
          })
        }
      </Routes>
      <Footer />
    </>
  )
}

export default App
