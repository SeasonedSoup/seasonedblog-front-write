import { useLocation, useParams } from "react-router";

function ViewPost() {
    // WILL NEED AT SOME POINT const {id} = useParams();
    const location = useLocation();
    const post = location.state

    return (
        <>
            <h1> {post.title}</h1>
            <h1> {post.content}</h1>
            {post.published && <h1>POST IS PUBLISHED</h1>}
        </>
    )
}

export default ViewPost;