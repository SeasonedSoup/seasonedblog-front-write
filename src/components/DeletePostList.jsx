import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../apiUrl";
function DeletePostList() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [selectedId, setSelectedId] = useState("1");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPosts() {
            const url = `${API_URL}/api/posts`
            console.log("fetching")

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json"
                    }
                })

                const result = await response.json();
                //the fetched posts
                setPosts(result);
                setLoading(false);
                console.log(result);
            } catch(err) {
                console.error("Error: ", err)
            }
        }
        
        fetchPosts();
       
    }, []);

    async function DeletePost(e) {
        e.preventDefault();

        const url = `${API_URL}/api/delete`

        const response = await fetch(url, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: selectedId})
        })

        const result = await response.json()
        console.log(result)
        navigate("/")
    }

    return (
        <>
            {loading ? <p>Loading...</p> : <h1>THIS IS WHERE POSTS ARE LOCATED IN THIS DROPDOWN</h1>} 
            {posts.length > 0 ? (
                <form onSubmit={DeletePost}>
                    <select onChange={(e) => setSelectedId(e.target.value)}>
                        {posts.map((post) => (
                            <option key={post.id} value={post.id}>
                                {post.title}
                            </option>
                        ))}
                    </select>

                    <button>Delete this post</button>
                </form>
            ) : <p>No posts found to delete</p> } 
        </>
    )
}

export default DeletePostList;