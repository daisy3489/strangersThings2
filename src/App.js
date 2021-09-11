import Navbar from './Navbar';
import Home from './Home';
import Posts from './Posts';
import LoginForm from './Login';
import WelcomePage from './Welcome';
import RegisterForm from './Register';
import CreatePost from './CreatePost';
import MessageForm from './Messages';
import SentMessages from './CreateMessage'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { useState, useEffect } from "react"

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
export const cohortName = '2105-SJS-RM-WEB-PT';



function App() {
  const [user, setUser] = useState({username: '', password: ''});
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
 
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
        username: name,
        // email: details.email,
        password: password
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

  //call login details
  useEffect(() => {
    (
        async () => {
            const response = await fetch(BASE_URL + cohortName +'/users/me', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_STRING_HERE'
              }
            });

            const content = await response.json();

            console.log("content:", content)

            setName(content.name);

            // console.log("name:", content.name)
        }
    )();
});





  return (
    <Router>

      <div className="App">
        <Navbar />

        <div className="content">

          <Switch>

            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/createPost">
              <CreatePost />
            </Route>
            <Route path="/messages" >
              <MessageForm />
            </Route>
            <Route exact path="/posts">
              <Posts  />
            </Route>
            <Route exact path="/users/register">
              <RegisterForm Register={Register} />
            </Route>
            <Route exact path="/profile">
              <WelcomePage Logout={Logout} setToken={setToken} />
            </Route>
            <Route path="/users/login" >
              <LoginForm Login={Login} error={error} />
            </Route>
            <Route path="/leaveMessages" >
              <SentMessages />
            </Route>

          </Switch>


        </div>
      </div>

    </Router>
  );
}

export default App;
