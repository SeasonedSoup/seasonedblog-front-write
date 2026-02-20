import { useEffect, useState } from "react";

function EditPostList() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const url = "http://localhost:8000/api/post"

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
            } catch(err) {
                console.error("Error: ", err)
            }
        }
        
        fetchPosts();
    }, []);


    return (
        <>
            {loading ? <p>Loading...</p> : <h1>THIS IS WHERE POSTS ARE LOCATED IN THIS DROPDOWN</h1>} 
            {posts.length > 0 ? (
                <form action="">
                    <select>
                        {posts.map((post) => (
                            <option key={post.id} value={post.id}>
                                {post.title}
                            </option>
                        ))}
                    </select>

                    <button>Edit this post</button>
                </form>
            ) : <p>No posts found to edit</p>} 
        </>
    )
}

export default EditPostList;