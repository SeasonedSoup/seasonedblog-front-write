export function Logout() {

    function logout () {
        localStorage.removeItem("token")
    }
    return (
        <a href="/" onClick={logout}> Log Out</a>
    )
}