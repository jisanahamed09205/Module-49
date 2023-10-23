import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user,setUser] = useState(null);
    const auth = getAuth(app)
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        // console.log('google popup');
        signInWithPopup(auth,googleProvider)
        .then((result) => {
            const loggedInUser = result.user;
            // console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch((error) => {
            console.log('error',error.message);
        })
    }
    const handleSignOut = () =>{
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubSignIn =() =>{
        // console.log('github ailo re');
        signInWithPopup(auth,githubProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            {/* {user ? logOut : signIn} */}
            {
                user ?
                <button onClick={handleSignOut}>Sign Out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
                </>
            }
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <h4>Email: {user.email}</h4>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;