import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import {images} from '../../../../assets/images'
import Search from '../Search'
import HeaderNavbar from '../HeaderNavbar'
import HeaderMenu from '../HeaderMenu'
import React, { useState } from 'react'
import LoginModal from '../../../../pages/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)
function Header() {
    const isLogged = localStorage.getItem('loggedInUser')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleClickCart = () =>{
        if(isLogged){
            setIsModalOpen(false)
            window.location.href = '/carts'
        }
        else{
            setIsModalOpen(true)
        }
    }
    return (
        <header className={cx('header')}>
            <div className='grid'>
                <nav className={cx('header__navbar')}>
                    <HeaderNavbar/>
                </nav>
                <div className={cx('header-item')}>
					<div className={cx('header-logo')}>
						<Link to="/">
							<img className={cx('logo-img')} src={images.logo} alt="logo"/>
						</Link>
						
					</div>
					<Search/>
					<div className={cx('header-cart')}>
                        <button
                            className={cx('cart-button')}
                            onClick={handleClickCart}
                            
                        >
                        <FontAwesomeIcon icon = {faCartShopping} size='2xl'/>
                        </button>
					</div>
                    {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}}/>}
                    

				</div>
                <div className={cx('header-menu')}>
                {/* đây */}
                <HeaderMenu/>
              
                </div>

            </div>

        </header>
    )
}

export default Header;