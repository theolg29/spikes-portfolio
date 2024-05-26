import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="border-2 p-2 rounded-full">
            <ul className="flex items-center space-x-10">
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-on" : "nav-off")}><li>Home</li></NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-on" : "nav-off")}><li>About</li></NavLink>
                <NavLink to="/projects" className={(nav) => (nav.isActive ? "nav-on" : "nav-off")}><li>Projects</li></NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-on" : "nav-off")}><li>Contact</li></NavLink>
            </ul>
        </nav> 
    );
};

export default Navigation;