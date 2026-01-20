function SignUpForm() {
    return (
        <>
            <h1>Sign-Up Form</h1>

            <form action="#" method="POST">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" />

                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />

                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" name="confirmPassword" id="confirmPassword" />

                <button>Submit</button>
            </form>
        </>
    )
}

export default SignUpForm;
