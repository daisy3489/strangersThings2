
const WelcomePage = ({Logout, username}) => {

    return ( 
        <div className="welcome"> 
          <h2>Welcome, <span>{username.username}</span>!</h2>
          <button onClick={Logout}>Logout</button>
        </div>
     );
}
 
export default WelcomePage;