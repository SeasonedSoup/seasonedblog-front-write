import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    async function verifyAuth() {
        const token = localStorage.getItem("token");
        const url = "http://localhost:8000/api/"
        try {
            const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            });

            if (!response.ok) {
                throw new Error(response.status);
            }

            const result = await response.json();
            return result;
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false)
        }
    }
    //call useEffect
    useEffect(() => {
        verifyAuth();
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

