import { useAuth } from "./AuthToken/AuthContext";
import { Logout } from "./Logout";
import LoginForm from "./LoginForm";

function MainPosts() {
    const {user, loading} = useAuth();

     if (loading) return <div>Loading...</div>;
     
    return (
        <> 
            <div>
                <h1>THIS IS WHERE HOMEPAGE IS</h1>
                {user ? <h2>Welcome, {user?.username} {user.email} </h2> : <h2>Please log in</h2>}
                {user ? <a href="/post">Create a post here!</a> : ""}
                {user ? <a href="/edit">Edit your posts here</a> : ""}
                {user ? <a href="/view"> View your posts here!</a> : ""}
                {user ? <a href="/delete"> Delete your posts here!</a> : ""}
            </div>
            {user ? <Logout/> : <LoginForm/>}
        </>
    )
}

export default MainPosts;