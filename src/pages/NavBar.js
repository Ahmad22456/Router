import { Link } from 'react-router-dom';
import menu from '../menu.svg'

function NavBar() {

return (
    <nav className="navBar">
      <p className="navText" style={{margin:"0"}}><Link style={{textDecoration:'none'}} to={'/'}>React Router</Link></p>
      <img src={menu} alt="Menu" />
    </nav>
  );
}

export default NavBar;
