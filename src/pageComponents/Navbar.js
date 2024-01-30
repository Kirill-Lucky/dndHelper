import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return (
    <nav className="nav">
        
        <ul>
            <li><Link to="/" className="home">Home</Link></li>
            <CustomLink to="/characters">Characters</CustomLink>
            <CustomLink to="/creation">Creation</CustomLink>
        </ul> 
    </nav>)
}

function CustomLink({to, children, ...props}){
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true})
    return(
        <li className={isActive === to ? "actiive" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}