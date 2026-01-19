function CreatePostForm() {
    async function handleSubmit(e) {
        e.preventDefault();

        console.log("testing");

    }

    return (
        <>
            <h1>Create A Post Here!</h1>

            <form action="#" method="post" onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" />

                <label htmlFor="content">Content: </label>
                <input type="text" name="content" id="content" />

                <button>Submit</button>
            </form>
        </>
    )
}

export default CreatePostForm;