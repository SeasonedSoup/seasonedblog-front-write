import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthToken/AuthContext";
function ViewPosts() {
    const [publishedPosts, setPublishedPosts] = useState([]);
    const [unpublishedPosts, setUnpublishedPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const {user, userLoading} = useAuth();

    useEffect(() => {
        async function fetchAuthorPosts() {
            const url = `http://localhost:8000/api/yourposts?id=${user.id}`

            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json"          
                },
            })

            const posts = await response.json();
            const published = posts.filter((post) => post.published === true)
            const unpublished = posts.filter((post) => post.published === false)
            console.log(published)
            console.log(unpublished)
            setPublishedPosts(published);
            setUnpublishedPosts(unpublished);
            setLoading(false)
        }

        fetchAuthorPosts();
    }, [user, user?.id, userLoading]);

    async function togglePublishStatus(id, published) {
        if (published === true) {
            const post = publishedPosts.find(p => p.id === id)
            setPublishedPosts(prev => prev.filter(p => p.id !== id))
            setUnpublishedPosts(prev => [...prev, {...post, published: false}])
        }  else {
            const post = unpublishedPosts.find(p => p.id === id)
            setUnpublishedPosts(prev => prev.filter(p => p.id !== id))
            setPublishedPosts(prev => [...prev, {...post, published: true}])
        }


        const url = "http://localhost:8000/api/togglepubstatus"
        published = !published
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                published
            })
    
        })
        
        const result = response.json();
        console.log(result)
    }

    function navigateToPost(id, published) {
        let selectedPost

        if (published) {
            selectedPost = publishedPosts.find((post) => post.id == id)
        } else {
            selectedPost = unpublishedPosts.find((post) => post.id == id)
        }

        navigate(`/view/${id}`, {state: selectedPost})
    }
  
    if (loading !== true) {
        return (
            <div className="container">
                <div className="card">
                    <h1>Published Posts</h1>
                    {publishedPosts.length > 0 ? (
                        publishedPosts.map(publishedPost => {
                        return (
                        <div key={publishedPost.id} >
                            <h1> {publishedPost.title}</h1>
                            <button onClick={() => togglePublishStatus(publishedPost.id, true)}>Unpublish</button>
                            <button onClick={() => navigateToPost(publishedPost.id, true)}>View</button>
                        </div>
                        )
                    })
                    ) : <h1>No Published Posts Found</h1>
                    } 
                </div>

                <div className="card">
                    <h1>Unpublished Posts</h1>
                    {unpublishedPosts.length > 0 ? (
                        unpublishedPosts.map(unpublishedPost => {
                            return (
                            <div  key={unpublishedPost.id} >
                                <h1> {unpublishedPost.title}</h1>
                                <button onClick={() => togglePublishStatus(unpublishedPost.id, false)}>Publish</button>
                                <button onClick={() => navigateToPost(unpublishedPost.id, false)}>View</button>
                            </div>
                            )
                        })
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