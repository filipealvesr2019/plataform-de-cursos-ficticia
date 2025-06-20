'use client';

const { createContext, useState } = require("react");

const AuthContext = createContext();

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        
    }

}