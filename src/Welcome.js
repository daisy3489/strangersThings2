
const WelcomePage = ({Logout, user}) => {

    return ( 
        <div className="welcome"> 
          <h2>Welcome, <span>{user.username}</span>!</h2>
          <button onClick={Logout}>Logout</button>
          {console.log(user.username)}
        </div>
     );
}
 
export default WelcomePage;