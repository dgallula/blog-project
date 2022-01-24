import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

const BlogDetails = () => {
    const { id } = useParams()

    const [blog, setBlog] = useState({})

    const loadData = () => {
        fetch(`http://localhost:8000/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
            })
    }

    useEffect(() => {
        console.log("useEffect -> BlogDetails")
        loadData()
    }, [])

    return (
        <div>
            <h1>{blog.title}</h1>
            <h3>Author: {blog.author} </h3>
            <p>{blog.body}</p>
        </div>
    )
}

export default BlogDetails