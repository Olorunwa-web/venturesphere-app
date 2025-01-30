import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/Navbar'


function App() {
 
  return (
    <>
       <BrowserRouter>
           <Routes>
                <Route path = '/' element = {<Navbar/>}>
                    
                </Route>
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
