import { useAuth } from "./AuthToken/AuthContext";

function MainPosts() {
    const {user, loading} = useAuth();

     if (loading) return <div>Loading...</div>;
     
    return ( 
        <div>
            <h1>THIS IS WHERE THE MAIN POSTS ARE</h1>
            {user ? <h2>Welcome, {user?.username} {user.email} </h2> : <h2>Please log in</h2>}
        </div>
    )
}

export default MainPosts;