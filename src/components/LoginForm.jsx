function LoginForm() {
     return (
        <>
            <h1>Log-in Form</h1>

            <form action="#" method="POST">
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
        
                <button>Submit</button>
            </form>
        </>
    )
}

export default LoginForm;

