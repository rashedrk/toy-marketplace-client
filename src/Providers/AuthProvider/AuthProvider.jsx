import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null);

    //register user with email and password
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password);
    };

    const updateUser = (name,photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    console.log(user);
    const authInfo = {
        user,
        signUp,
        setUser,
        updateUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;