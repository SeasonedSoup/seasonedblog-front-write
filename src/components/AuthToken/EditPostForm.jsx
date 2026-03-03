import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

function EditPostForm() {
    const location = useLocation();
    const post = location.state
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const navigate = useNavigate();
    
    const {id} = useParams();

    async function editPost(e) {
        e.preventDefault();
        const url = `http://localhost:8000/api/${id}/edit`
        try {
            const response = await fetch( url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    content
                })
            })

            if (!response.ok) {
                const result = await response.json();
                console.log(result.message)
                throw new Error(response.status)
            }


            const result = await response.json();
            console.log(result)

            navigate("/")

        } catch (err) {
            console.error("Error:", err)
        }
    }

    return (
        <form onSubmit={editPost}>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>

            <label htmlFor="content">Content: </label>
            <input type="text" id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)}/>

            <button>Edit Post</button>
        </form>
    )
}

export default EditPostForm;