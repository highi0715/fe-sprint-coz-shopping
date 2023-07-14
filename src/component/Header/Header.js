import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header-container'>
            <div className='logo-container'>
                <Link to="/" className='logo-img'>
                    <img src="/images/logo.png" alt="logo" />
                </Link>
                <span className="logo-title">COZ Shopping</span> 
            </div>
            <img src="/images/hambuger.png" alt="hamburger menu" />
        </header>
    )
}