import './App.css'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Services from '../src/components/services/Services'
import WebDevelopment from '../src/components/Services/WebDevelopment'
import WebDesign from '../src/components/Services/WebDesign'
import Seo from '../src/components/Services/Seo'
import Contact from '../src/components/Contact'
import Error from '../src/components/Error'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
         <Route path="/services/web-development" element={<WebDevelopment />} />
         <Route path="/services/web-design" element={<WebDesign />} />
         <Route path="/services/seo" element={<Seo />} />
        </Route>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
