import Navbar from './Navbar';
import Home from './Home';
import Posts from './Posts';
import LoginForm from './Login';
import WelcomePage from './Welcome';
import RegisterForm from './Register';
import CreatePost from './CreatePost';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { useState } from "react"

function App() {
  const [user, setUser] = useState({username: '', password: ''});
  const [error, setError] = useState('');
  const [token, setToken] = useState('')
 
  const adminUser = {
    username: 'bob',
    email: 'admin@example.com',
    password: 'password'
  }

  //function to register
  const Register = details => {
    console.log('registerDetails', details)
  }

  //function to be called when attempting to login 
  const Login = details => {
    console.log('Login details:', details);

    //if what we typed matches our saved example, then we're logged in
    if (details.username === adminUser.username && details.password === adminUser.password ) {
      console.log("Logged in successfully")
      //actually login  //change user details
      setUser({
        username: details.username,
        // email: details.email,
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
    setUser({
      username: '', 
      // email: '', 
      password: ''
    });
  }


  return (
    <Router>

      <div className="App">
        <Navbar />

        <div className="content">

          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/CreatePost">
              <CreatePost />
            </Route>
            <Route exact path="/Posts">
              <Posts  />
            </Route>
            <Route exact path="/Register">
              <RegisterForm Register={Register} />
            </Route>
            <Route exact path="/Profile">
              <WelcomePage Logout={Logout} user={user} />
            </Route>
            <Route path="/Login" >
              <LoginForm Login={Login} error={error} />
            </Route>


            {/* LOGIN PAGE */}
            
              <div>
                {/* if user name is not empty, render welcome screen, else if not logged in, display login form */}
                {(user.username !== '') ? (
                  
                  
                    <WelcomePage Logout={Logout} user={user} />
                 
                  
                ): (
                  
                  
                  //add a secondary / double / chain turniary to determine login or reguster form based on token
                  
                     <LoginForm Login={Login} error={error} />
                  
                
                  
                )}
              </div>
           
            

              








          </Switch>







          
          

          

          {/* */}

        </div>
      </div>

    </Router>
  );
}

export default App;
