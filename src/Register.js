import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';


export const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
export const cohortName = '2105-SJS-RM-WEB-PT';

function RegisterForm({Register, error}) {
    const [details, setDetails] = useState({name: '', email: '', password: ''});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [token, setToken] = useState('')

    //handle submit
    const submitHandler = e => {
        e.preventDefault();

        //call Register function through props
        // Register(details);

        console.log('register details: ', details);
        console.log('PEN: ', password, email, name);

        //what we send to the server
        const fetchToken= async () => {
            const registerUserInfo = await fetch(BASE_URL + cohortName + '/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                 username: name,
                 password: password
                }
            })
            })

           //what we get back from server
           const content = await registerUserInfo.json();

           console.log("content", content)

           const token = content.data.token

           console.log("token", token)
        }

        //call function
        fetchToken()

        // setRedirect(true);

        
    }
    
    if (redirect) {
            return <Redirect to="/account/login" />;
        }

    
    return (
        <form onSubmit={submitHandler}>

            <div className="form-inner">
                <h2>Register</h2>
                {/* check for error */}
                {(error !== '') ? ( <div className="error">{error}</div>) : ''}
                <div className="form-group">
                    <label htmlFor="name">Username: </label>
                                                                        {/* any time we change it, we're calling a function and we're passing through the event. The event holds the tartget value. we're updating the set details and we're passing through the new value for name. and that should now update name  */}
                    <input type="text" name="name" placeholder='john123' id="name"onChange={e => setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" placeholder='john123@email.com' id="email" onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password"  id="password" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="verifyPassword">Re-enter password: </label>
                    <input type="password" name="verifyPassword" id="verifyPassword" onChange={e => setDetails({...details, verifyPassword: e.target.value})} value={details.verifyPassword}></input>
                </div>
                <input type="submit" value="REGISTER"></input>
                <p className="form-group, member">Already a member? <Link to="/account/login">Click here to Login</Link></p>
            </div>

        </form>
    )
}

export default RegisterForm
