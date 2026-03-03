import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function EditPostList() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [selectedId, setSelectedId] = useState("1");
    const navigate = useNavigate();

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
                console.log(result);
            } catch(err) {
                console.error("Error: ", err)
            }
        }
        
        fetchPosts();
       
    }, []);

    function navigateEditPost(e) {
        e.preventDefault();

        if (selectedId) {
            const selectedPost = posts.find((post) => post.id === parseInt(selectedId))
            navigate(`/${selectedId}/edit`, {state: selectedPost});
        }
    }

    return (
        <>
            {loading ? <p>Loading...</p> : <h1>THIS IS WHERE POSTS ARE LOCATED IN THIS DROPDOWN</h1>} 
            {posts.length > 0 ? (
                <form onSubmit={navigateEditPost}>
                    <select onChange={(e) => setSelectedId(e.target.value)}>
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