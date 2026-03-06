import { useEffect, useState } from "react";

function ViewPosts() {
    const [publishedPosts, setPublished] = useState([]);
    const [unpublishedPosts, setUnpublished] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchPosts() {
            const url = "http://localhost:8000/api/posts"

            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json"          
                }
            })

            const posts = await response.json();
            const published = posts.filter((post) => post.published === true)
            const unpublished = posts.filter((post) => post.published === false)
            console.log(published)
            console.log(unpublished)
            setPublished(published);
            setUnpublished(unpublished);
            setLoading(false)
        }

        fetchPosts();
    }, []);
  
    if (loading !== true) {
        return (
            <div class="container">
                <div class="card">
                    <h1>Published Posts</h1>
                     {publishedPosts.length > 0 ? (
                        <h1>Published Posts Found</h1>
                    ) : <h1>No Published Posts Found</h1>
                    } 
                </div>

                <div class="card">
                    <h1>Unpublished Posts</h1>
                    {unpublishedPosts.length > 0 ? (
                        <h1>Unpublished Posts Found</h1>
                    ) : <h1>No Unpublished Posts Found</h1>
                    
                    } 
                </div>
            </div>
        )
    } else {
        return <h1>Loading ...</h1>
    }
}

export default ViewPosts;