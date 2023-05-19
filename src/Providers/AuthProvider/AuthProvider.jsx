import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null);

    // get currently sign in user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
        })
        // unmount when user leave the website
        return () => unsubscribe;
    },[])
    //register user with email and password
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password);
    };
    //add name and profile pic of user
    const updateUser = (name,photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }

    //login user by email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login user with google 
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //login with github
    const githubProvider = new GithubAuthProvider;
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    console.log('user from auth',user);
    const authInfo = {
        user,
        signUp,
        setUser,
        updateUser,
        login,
        googleLogin,
        githubLogin
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;