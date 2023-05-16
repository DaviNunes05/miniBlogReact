import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    //cleanup
    //deal with memory
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    };
};