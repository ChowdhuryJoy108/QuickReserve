import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import auth from '../firebase/firebase.init'

const AuthProvider = ({children}) => {

    const [user, setUser ] = useState(null)
    const [userId, setUserId] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateProfileInfo = (updateInfo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, updateInfo);
    }


    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth)

    }

    

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(true)
            if(currentUser){
                console.log(currentUser.uid);
                setUserId(currentUser.uid)
                setUser(currentUser)
            }else{
                setUser(null)
            }
            setLoading(false)
          });
          return ()=>unSubscribe()
        
      }, [])



      const authInfo = {
        user,
        loading,
        userId,
        createUser,
        signInUser,
        updateProfileInfo,
        signOutUser
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;