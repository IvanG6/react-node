import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.scss';

const NavbarComp: React.FC = () => {
  return (
    <Navbar className='nav-header'>
    <Container>
      <Navbar.Brand className='logo-header' href="#home">
        AppCo
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default NavbarComp;