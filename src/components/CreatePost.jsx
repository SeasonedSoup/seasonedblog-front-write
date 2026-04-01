import { useState } from "react";
import { useAuth } from "./AuthToken/AuthContext";
import { useNavigate } from "react-router";
import { API_URL } from "../apiUrl";

function CreatePostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const {user} = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (user.role !== 'AUTHOR') {
            return alert("YOU ARE NOT AN AUTHOR TEST")
        }


        const url = `${API_URL}/api/post`
        const token = localStorage.getItem("token")

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title,
                    content
                })
            });
            if (!response.ok) {
                const result = await response.json();
                console.log(result.message)
                throw new Error(response.status)
            }

            const result = await response.json();
            console.log(result.message);
            navigate('/')
            

        } catch (err) {
            console.error("Error:", err)
        }
    }

    return (
        <>
            <h1>Create A Post Here!</h1>

            <form action="#" method="post" onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" required onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="content">Content: </label>
                <input type="text" name="content" id="content" required onChange={(e) => setContent(e.target.value)} />

                <button>Submit</button>
            </form>
        </>
    )
}

export default CreatePostForm;