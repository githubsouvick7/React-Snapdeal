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
                            <Tippy content={<p>Cart</p>}>
                                <div className="cartcomp">
                                    <div className="c">
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <span>0</span>
                                    </div>
                                </div>
                            </Tippy>
                        </NavLink>
                    </div>
                    <div className="signin">
                        <NavLink to='./Login' >
                            <Tippy content={<p>SingIn</p>}>
                                <div className="set">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                            </Tippy>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar