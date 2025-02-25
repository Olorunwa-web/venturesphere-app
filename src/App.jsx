import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Service from './pages/Service'

function App() {
 
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route element = {<Navbar/>}>
                <Route path = '/' element = {<Home/>}/>
            </Route>
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
