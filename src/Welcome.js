import { Link } from 'react-router-dom';

const WelcomePage = ({Logout, user}) => {

    return ( 
        <div className="welcome"> 
          <h2>Welcome, <span>{user.username}</span>!</h2>
          <button onClick={Logout}>Logout</button>
          
          <ul className="">
              <li>View Posts created by me</li>
              <Link to="/CreatePost">Create new post</Link><br></br>
              <Link to="/Messages">Message Center</Link>
              
          </ul>
        </div>
     );
}
 
export default WelcomePage;