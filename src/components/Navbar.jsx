import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <>
            {/* nav bar */}
            <div className='navbar-wrapper'>
            
                    {/* logo */}
                    <div className='logo-menu-items'>
                        <img src="../assets/images/logo_white.svg" alt="logo" className='logo-image' />
                        {/* menu items */}
                        <ul className='navbar-menu-ul'>
                            <li className='navbar-menu-li'> <a className='navbar-menu-a' href="#"><img className='navbar-menu-a-img' src="../assets/images/bullseye-pointer.svg" alt="products" /> products</a></li>
                            <li className='navbar-menu-li'> <a className='navbar-menu-a' href="#"><img className='navbar-menu-a-img' src="../assets/images/dollarIcon.svg" alt="price" /> price</a></li>
                            <li className='navbar-menu-li'> <a className='navbar-menu-a' href="#"><img className='navbar-menu-a-img' src="../assets/images/graduation-cap.svg" alt="learn" /> learn</a></li>
                            <li className='navbar-menu-li'> <a className='navbar-menu-a' href="#"><img className='navbar-menu-a-img' src="../assets/images/book.svg" alt="documentation" /> documentation</a></li>
                            <li className='navbar-menu-li'> <a className='navbar-menu-a' href="#"><img className='navbar-menu-a-img' src="../assets/images/blog.svg" alt="blog" /> blog</a></li>
                        </ul>
                    </div>
                    {/* login signUp */}
                    <div className='nav-end-bar-wrapper'>
                        <a className='login-btn' href="#"><img className='login-user-img' src="../assets/images/user-circle.svg" alt="user" />Login</a>
                        <button className='sign-up-btn'>Sign Up for FREE</button>
                    </div>
                </div>
        </>
    )
}

export default Navbar
