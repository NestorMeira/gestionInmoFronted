import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Header.scss';

const Header = () => {

    const sendWhatsAppMessage = () => {
        const numero = '+543751396402';
        const mensaje = `Hola`;
        const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
        window.open(linkWhatsApp);
    };

  return (
    <header>
      <div className="redes">
       
        <a
          href="https://www.instagram.com/artesania_tierracolorada/"
          target="_blank"
          rel="noopener noreferrer" // Agregamos el atributo rel para seguridad
          aria-label="Visitar nuestro perfil en Instagram"
        >  <InstagramIcon className="icono-redes" />
        </a>
        <WhatsAppIcon className='icono-redes' onClick={sendWhatsAppMessage} />
        <a href='https://www.facebook.com/profile.php?id=61552627533704&mibextid=ZbWKwL'><FacebookIcon className='icono-redes'/></a>
      </div>
 
    
    </header>
  );
  }

export default Header;
