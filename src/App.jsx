import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/Navbar'
import Home from './pages/Home'

function App() {
 
  return (
    <>
       <BrowserRouter>
           <Routes>
                <Route path = '/' element = {<Navbar/>}>
                    <Route index element = {<Home/>}/>
                </Route> 
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
