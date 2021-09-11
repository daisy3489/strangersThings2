import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><Link to='/'>Stranger's Things</Link></h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to='/posts'>Posts</Link>
                <Link to="/users/login">Login</Link>

            </div>
        </nav>
    );
}
 
export default Navbar;