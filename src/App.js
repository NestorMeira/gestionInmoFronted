import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Alquileres from './components/Alquileres/Alquileres';
import Nosotros from './components/Nosotros/Nosotros';
import Ventas from './components/Ventas/Ventas';
import Casadepto from './components/Casadepto/Casadepto';
import Locales from './components/Locales/Locales';
import Localesventa from './components/Localesventa/Localesventa';
import Casadeptoventa from './components/Casadeptoventa/Casadeptoventa';
import Terrenos from './components/Terrenos/Terrenos';
import Lotes from './components/Lotes/Lotes';
import Inicio from './components/Inicio/Inicio';



function App() {
  return (

    <BrowserRouter>
    <Header/>
    <Nav/>
     <Routes>
     <Route index path='/' element={<Inicio/>}/>
      <Route path='/nosotros' element={<Nosotros />} /> 
      <Route path='/alquileres' element= {<Alquileres/>}/>
      <Route path='/ventas' element= {<Ventas/>}/>
      <Route path='/casadepto' element= { <Casadepto/>}/>
      <Route path='/locales' element= {<Locales/>}/>
      <Route path='/localesventa' element= {<Localesventa/>}/>
      <Route path='/casadeptoventa' element= {<Casadeptoventa/>}/>
      <Route path='/terrenos' element= {<Terrenos/>}/>
      <Route path='/lotes' element= {<Lotes/>}/>
      <Route path='*' element={<h1>ERROR 404 -página no encontrada</h1>}  title="Página no encontrada"/>
     </Routes> 
     <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
