import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import './styles/Navbar.css'

export default function Nav() {
    return (
        <Navbar 
            links={[
                <Link key={1} className="navbar" to="/">
                    About Me
                </Link>,
                <Link key={2} className="navbar" to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="navbar" to="/contact">
                    Contact Me
                </Link>,
                <Link key={4} className="navbar" to="/resume">
                    Resume
                </Link>,
            ]}
        />
    );
}