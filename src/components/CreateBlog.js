const CreateBlog = () => {
    return (
        <div className="CreateBlog-root">
            <br />
            <h1>CreateBlog</h1>
            <div className="CreatBlog-main-container">
                <form className="CreatBlog-form">
                    <label htmlFor="title">title:</label>
                    <br />
                    <input
                        type="text"
                        id="blog-title"
                        required />
                    <br /> <br />
                    <label htmlFor="author">author:</label>
                    <br />
                    <input
                        type="text"
                        id="blog-author"
                        required />
                    <br /><br />
                    <label htmlFor="post-body">enter post body:</label>
                    <br />
                    <textarea
                        name="blog-body" id="blog-body" cols="30" rows="10" required></textarea>
                    <br /> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default CreateBlog