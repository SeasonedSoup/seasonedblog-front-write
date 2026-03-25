import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

function ViewPost() {
    const {id} = useParams();
    const location = useLocation();
    const post = location.state
    const [comments, setComments] = useState([]);

    console.log("COMPONENT RENDERED");
    useEffect(() => {
        console.log("FETCH TRIGGERED");
        async function fetchComments() {
            console.log("FETCHING COMMENTS...")
            const url = `http://localhost:8000/api/comments/${id}`

            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const result = await response.json()
            setComments(result);
        }


        fetchComments()
    }, [id])

    async function deleteComment(commentId) {
        console.log("DELETING ID", commentId)
        const url = `http://localhost:8000/api/delete/${commentId}`
        const token = localStorage.getItem("token")

        const response = await fetch(url, {
            method: "DELETE",
            headers : {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })

        console.log(response)
        setComments(prev => {
            console.log("BEFORE:", prev.map(c => c.id));

            const filtered = prev.filter(comment => {
                console.log("Comparing:", comment.id, commentId);
                return comment.id !== commentId;
            });

    console.log("AFTER:", filtered.map(c => c.id));

    return filtered;
});
        
    }
    
    return (
        <>
            <h1> {post.title}</h1>
            <h1> {post.content}</h1>
            {post.published && <h1>POST IS PUBLISHED</h1>}
            <h1>Comments</h1>
            {comments.length > 0 ? (
                comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                        <h2>{comment.text}</h2>
                        <h2>{comment.timestamp}</h2>
                        <button onClick={() => deleteComment(comment.id)}>Delete this comment</button>
                    </div>
                    );
                })
                ) : (<p>No comments yet</p>)   
            }
        </>
    )
}

export default ViewPost;