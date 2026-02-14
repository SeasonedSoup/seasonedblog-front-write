import { useState } from "react";

function CreatePostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const url = "http://localhost:8000/api/post"

        try {
            const response = fetch(url, {
                method: "POST",
                
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        } catch (err) {
            console.error("Error:", err)
        }

    }

    return (
        <>
            <h1>Create A Post Here!</h1>

            <form action="#" method="post" onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" required />

                <label htmlFor="content">Content: </label>
                <input type="text" name="content" id="content" required />

                <button>Submit</button>
            </form>
        </>
    )
}

export default CreatePostForm;