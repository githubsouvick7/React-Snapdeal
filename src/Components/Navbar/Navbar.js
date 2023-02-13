import React from 'react'
import './Navbar.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Navbar = () => {
    return (
        <>
            <section className='section-navbar'>
                <div className="logo">
                    <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" />
                </div>
                <div className="search">
                    <input type="" className='input' placeholder='Search Here ...' />
                    <button className='btn'><i class="fa-solid fa-magnifying-glass"></i> Search</button>
                </div>
                <div className="extra">
                    <div className="cart">
                        <span>Cart</span>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="signin">
                        <Tippy content='Souvick'>
                            <span>Sign In</span>
                        </Tippy>
                        <div className="set">
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar