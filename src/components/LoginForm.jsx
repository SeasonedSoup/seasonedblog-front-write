import { useState } from "react";

function LoginForm() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

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
                    name,
                    password
                }) 
            });

            console.log(response);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const token = await response.json();
            localStorage.setItem("token", token)
            console.log("You got a token!")
        } catch (error) {
            console.log(error);
        }
    }

     return (
        <>
            <h1>Log-in Form</h1>

            <form method="POST" onSubmit={login}>
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
        
                <button>Submit</button>
            </form>
        </>
    )
}

export default LoginForm;

