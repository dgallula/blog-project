import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Nav-root">
            <h2 className="Nav-title">My Blog Website</h2>
            <div className="Nav-links">
                <Link to="/home">Home</Link>
                <Link to="/createblog">New Blog</Link>
            </div>
        </div>
    )
}

export default Navbar