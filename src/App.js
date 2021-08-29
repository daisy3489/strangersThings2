import Navbar from './Navbar';
import Home from './Home';
import Posts from './Posts';
import LoginForm from './Login';
import WelcomePage from './Welcome';
import Register from './Register';

import { useState } from "react"

function App() {
  const [username, setUsername] = useState({username: '', email: '', password: ''});
  const [error, setError] = useState('');
  const [token, setToken] = useState('')
 
  const adminUser = {
    email: 'admin@example.com',
    password: 'password'
  }

  
  //function to be called when attempting to login 
  const Login = details => {
    console.log('details:', details);

    //if what we typed matches our saved example, then we're logged in
    if (details.email === adminUser.email && details.password === adminUser.password && details.verifyPassword === details.password) {
      console.log("Logged in successfully")
      //actually login
      setUsername({
        username: details.name,
        email: details.email,
        password: details.password
      });
    }
    else {
      console.log('Details do not match!')
      setError('Details do not match!')
    }
  }

  //function to logout
  const Logout = () => {
    console.log('logout')
    setUsername({
      username: '', 
      email: ''
    });
  }


  return (
    <div className="App">
      <Navbar />

      <div className="content">
        {/* <Home /> */}
        <Posts />

        {/* LOGIN PAGE */}
        <div>
          {/* if user email is not empty, render welcome screen, else if not logged in, display login form */}
          {(username.email !== '') ? (
            <WelcomePage Logout={Logout} username={username} />
          ): (
            <Register />
            //add a secondary / double / chain turniary to determine login or reguster form based on token
            // <LoginForm Login={Login} error={error} />
          )}
        </div>

        {/* */}

      </div>
    </div>
  );
}

export default App;
