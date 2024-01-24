
import { Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './Nav.scss';


const Nav = () => {
  const navigate = useNavigate(); 
 
  const [selectedCategory, setSelectedCategory] = useState('/');

  
  const handleCategoryChange = (event) => {
    scrollToTop();
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    navigate(newCategory);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  const inicioo = () => {
    scrollToTop();
    setSelectedCategory('/');
  };


  return (
    <nav className='nav-superior'>

    <div className='logo'>
    <img src='assets/logo.jpg' alt='logo'/>
    </div>

    <div className='navegacion'>
        <Link to="/" className='linea'>
          <button className='inicio' onClick={inicioo}>Inicio</button>
          </Link>
      
          <Link to="/nosotros" className='linea'>
          <button className='nosotros' >Nosotros</button>
          </Link>
    
      <div className="categorias">
          <select className='linea' value={selectedCategory} onChange={handleCategoryChange}>
            <option  value="/alquileres">Alquileres</option>
            <option value="/casadepto">Casas y Dptos</option>
            <option value="/locales">Locales comerciales</option> 
          </select>
      </div>
      <div className="categorias">
          <select className='linea' value={selectedCategory} onChange={handleCategoryChange}>
            <option  value="/ventas">Ventas</option>
            <option value="/casadeptoventa">Casas y Dptos</option>
            <option value="/localesventa">Locales comerciales</option>
            <option value="/terrenos">Terrenos</option> 
            <option value="/lotes">Lotes</option> 
          </select>
      </div>
      </div>
    </nav>
  );
}

export default Nav;