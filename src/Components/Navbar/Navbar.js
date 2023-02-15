import React from 'react'
import './Navbar.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link, NavLink } from 'react-router-dom';
import Login from '../Login/Login';
// import Cart from './Components/Cart/Cart'

const Navbar = () => {
    return (
        <>
            <section className='section-navbar'>
                <div className="logo">
                    <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" />
                </div>
                <div className="search">
                    <input type="" className='input' placeholder='Search Here ...' />
                    <button className='onebtn'><i class="fa-solid fa-magnifying-glass"></i> Search</button>
                </div>
                <div className="extra">
                    <div className="cart">
                        <NavLink to='./cart'>
                            <span style={{ textDecoration: 'none' }}>Cart</span>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                    </div>
                    <div className="signin">
                        <Tippy content={<Login />}>
                            <span>Sign In</span>
                        </Tippy>
                        <Tippy content={<p>Souvick</p>}>
                            <div className="set">
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </Tippy>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar