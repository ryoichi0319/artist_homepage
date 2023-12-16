"use client"
import { useState, useContext, createContext, useEffect, ReactNode } from "react"
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import firebase_app from '@/firebase/config';
import React from 'react';
import styles from './loading.module.css'
interface AuthContextProviderProps {
    children: ReactNode;
  }
  interface User {
    uid: string;
    displayName: string | null;
    email: string | null;}

const auth = getAuth(firebase_app);

export const AuthContext = createContext<{
    user: User | null;
  }>({
    user: null,
  });
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider :React.FC<AuthContextProviderProps> = ({children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    console.log(user,"user")

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ?  <div className={styles.loader_wrap}>
	<div className={styles.loader}>
    </div>
    </div>: children}
        </AuthContext.Provider>
    );
};