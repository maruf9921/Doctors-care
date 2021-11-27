import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setisLogin] = useState(false);

    const auth = getAuth();

    // Sing In With Google
    const googleProvider = new GoogleAuthProvider();
    
    const singInwithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
            console.log(result.user);
        })
    }

    // Log In with Email Password

    const toggleLogin = e =>{
        setisLogin(e.target.checked);
    }

    // Email Password Register
    const handleNameChannge = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswodChange = e =>{
        setPassword(e.target.value);
    }

    const handleRegistration = e =>{
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError('Passwor Must be 6 Characters');
            return;
        }

        isLogin? logInprocess(email, password) : createNewUser(email, password);
        
    }

    const logInprocess = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            setError(error.message);
          });
    }

    const createNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUserName();
        })
    }
    const setUserName = () =>{
        updateProfile(auth.currentUser, {
            displayName: name
          })
          .then(result => {
            
          })
    }
    const logout = () =>{
        signOut(auth)
        .then( () =>{
            setUser('');
        })
    }


    return {
        user,
        name,
        error,
        toggleLogin,
        isLogin,
        handleEmailChange,
        handlePasswodChange,
        handleNameChannge,
        handleRegistration,
        singInwithGoogle,
        logout
    }

}

export default useFirebase;