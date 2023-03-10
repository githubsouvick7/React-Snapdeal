import React from 'react'
import './Navbar.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated } = useAuth0();

    return (
        <>
            <section className='section-navbar'>
                <div className="logo">
                    <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" alt="snapdeal" />
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
                                    </div>
                                </div>
                            </Tippy>
                        </NavLink>
                    </div>
                    <div className="signin">
                        {
                            isAuthenticated ? (
                                <button className='set' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Log Out
                                </button>
                            ) : (
                                <button className='set' onClick={() => loginWithRedirect()}>
                                    Login
                                </button>
                            )
                        }
                        <Tippy content={<p>No User Found</p>}>
                            <div className="setuser">
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