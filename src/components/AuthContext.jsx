import { createContext } from "react";

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
    }
}

const user = await verifyAuth();

export const authContext = createContext({
    username: user.username, 
    role: user.role
})

