import { Link } from 'react-router-dom'

const BlogItem = (props) => {
    const { blog } = props

    return (
        <div
            id={`blog-item-${blog.id}`}
            className="BlogItem-root"
        >
            <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by{blog.author}</p>
            </Link>
        </div>
    )
}

export default BlogItem