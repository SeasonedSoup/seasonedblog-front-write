import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function login() {
        //test
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
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const token = await response.json();
            localStorage.setItem("token", token)
        } catch (error) {
            console.log(error);
        }
    }

     return (
        <>
            <h1>Log-in Form</h1>

            <form action="#" method="POST">
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" onChange={setEmail} />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={setPassword}/>
        
                <button onSubmit={login}>Submit</button>
            </form>
        </>
    )
}

export default LoginForm;

