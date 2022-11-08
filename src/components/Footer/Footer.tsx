import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.scss';

const Footer = () => {
  return (
    <Navbar className='footer'>
    <Container>
      <Navbar.Brand className='logo-footer' href="#home">
        AppCo
      </Navbar.Brand>
      <p>All rights reserved by ThemeTags</p>
      <p>Copyrights © 2019.</p>
    </Container>
  </Navbar>
  )
}

export default Footer