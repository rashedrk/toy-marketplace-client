import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [loader, setLoader] = useState(true);
    const [user,setUser] = useState(null);

    // get currently sign in user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoader(false);
            // setLoader(false);
        })
        //if user leave the site then the function don't looked for user / unmounted
        return () => unsubscribe;
    }, [])

    //register user with email and password
    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
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
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login user with google 
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }

    //login with github
    const githubProvider = new GithubAuthProvider;
    const githubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider)
    }

    //log out user
    const logout = () => {
        setLoader(true);
        return signOut(auth);
    }
    console.log('user from auth',user);
    const authInfo = {
        user,
        signUp,
        setUser,
        updateUser,
        login,
        googleLogin,
        githubLogin,
        logout,
        loader
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;