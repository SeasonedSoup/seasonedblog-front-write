import { useState } from "react";
import {useNavigate} from "react-router";

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();
        const url = "http://localhost:8000/api/login"

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json" 
                },
                body: JSON.stringify({
                    email,
                    password
                }) 
            });

            console.log(response);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            localStorage.setItem("token", data.token)
            console.log("You got a token!")
            navigate("/")
        } catch (err) {
            console.error(err);
            return alert("Error:", err)
        }
    }

     return (
        <>
            <h1>Log-in Form</h1>

            <form method="POST" onSubmit={login}>
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
        
                <button>Submit</button>
            </form>
        </>
    )
}

export default LoginForm;

