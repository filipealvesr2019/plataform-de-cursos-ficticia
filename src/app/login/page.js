"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";

export default function LoginPage(){
    const { login } = useAuth();
    const router  = useRouter();

    const [email, setEmail] = useState("");
    const [password,  setPassword] = useState("");
    const [error, setError] = useState("");

    

    return (
        <main>

        </main>
    )
}