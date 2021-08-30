import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><Link to='/'>Stranger's Things</Link></h1>
            <div className="links">
                <Link to="/Home">Home</Link>
                <Link to='/Posts'>Posts</Link>
                <Link to="/Login">Login</Link>

            </div>
        </nav>
    );
}
 
export default Navbar;