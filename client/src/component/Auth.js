import React, { useEffect, useState } from "react";
import test from "../firebase";

const firebase = test.firebase_;

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if(pending) {
        // This needs to be replaced with some kind of white fade in.
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}