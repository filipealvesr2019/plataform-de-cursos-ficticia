'use client';

const { createContext, useState } = require("react");

const AuthContext = createContext();

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const res = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if(res.ok){
            localStorage.setItem("token", data.token);
            setUser({ email });

        } else {
            throw new Error(data.error || "Erro ao logar")
            
        }
        
    }

    const register = async (name, email, password) => {
        const res = await fetch("http://localhost:5000/api/auth/register", {
            
        })
    }

}