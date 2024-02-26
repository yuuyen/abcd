import React from 'react'
import DivButton from './DivButton'
import DivTag from './DivTag'

const NavMenu = () => {
    return (
        <div className="container d-flex flex-row justify-content-md-between justify-content-center mt-3">
            <DivTag
                classNameMobile="nav-menu-mobile"
                mobileContent={
                    <>
                        <a className="nav-link dropdown-toggle icon" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bars"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item nav-selected" href="#">About us</a>
                            <a className="dropdown-item" href="#">Document</a>
                            <a className="dropdown-item" href="#">Network</a>
                            <a className="dropdown-item" href="#">Token</a>
                            <a className="dropdown-item" href="#">Exchange</a>
                            <a className="dropdown-item" href="#">Contact</a>
                            <a className="dropdown-item" href="#">Blog</a>
                        </div>
                    </>
                }
            />

            <div className="header-logo"></div>

            <DivTag
                classNameWeb="d-md-flex justify-content-center align-items-center header-nav gap-16 gap-sm-8"
                webContent={
                    <>
                        <a className="nav-selected">About us</a>
                        <a>Document</a>
                        <a>Network</a>
                        <a>Token</a>
                        <a>Exchange</a>
                        <a>Contact</a>
                        <a>Blog</a>
                    </>
                }
            />
            <div className='d-none d-xs-none d-sm-none d-lg-flex'>
                <DivButton className="">Launch App</DivButton>
            </div>
        </div>
    )
}

export default NavMenu
