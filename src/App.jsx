import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import Home from "./pages/Home"
import Location from "./pages/Location"
import Contact from "./pages/Contact"
import About from "./pages/About"
import WebDesign from './pages/WebDesign';
import AppDesign from './pages/AppDesign';
import GraphicDesign from './pages/GraphicDesign';
import Navbar from "./components/Navbar"
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/location' element={<Location />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/webdesign' element={<WebDesign />}></Route>
        <Route path='/appdesign' element={<AppDesign />}></Route>
        <Route path='/graphicdesign' element={<GraphicDesign />}></Route>
      </Routes>
    </Router>
  )
}