import { useParams } from "react-router"

function EditPostForm() {
    const {id} = useParams();

    return <h1>HI THIS IS YOUR {id}</h1>
}

export default EditPostForm