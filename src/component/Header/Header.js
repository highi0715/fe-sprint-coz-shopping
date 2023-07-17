import React, { useEffect, useState, useRef } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

export default function Header() {
    const [isOpen,setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const dropdownRef = useRef(null);

    function toggleDropdown() {
        if (!isAnimating) {
        setIsOpen(!isOpen);
        }
    }

    function handleAnimationEnd() {
        setIsAnimating(false);
      }

    function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }
    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='header-container'>
            <div className='logo-container'>
                <Link to="/" className='logo-img'>
                    <img src="/images/logo.png" alt="logo" />
                </Link>
                <span className="logo-title">COZ Shopping</span> 
            </div>
            <div className="dropdown-container" onClick={toggleDropdown} ref={dropdownRef}>
                <span className="hamburger-icon">
                    <img src="/images/hambuger.png" alt="hamburger menu" />
                </span>
                {isOpen ? <Dropdown onAnimationEnd={handleAnimationEnd} /> : null}
            </div>
        </header>
    )
}