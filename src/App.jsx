import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'jquery';


function App() {
  return (
    <>
      <Navbar/> 
      <br />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
