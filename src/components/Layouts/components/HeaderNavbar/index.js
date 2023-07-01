import styles from './HeaderNavbar.module.scss'
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import RegisterModal from '../../../../pages/Register';
import LoginModal from '../../../../pages/Login';
const cx = classNames.bind(styles)
function HeaderNavbar() {
    const [loginModal, setLoginModal] = useState(false)
    const [registerModal, setRegisterModal] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState()
    const handleLogout = () =>{
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('userlogged');
        window.location.href = ('/')
    }
    useEffect(() => {
        const storeUser = localStorage.getItem('loggedInUser')
        if(storeUser) {
            setLoggedInUser(JSON.parse(storeUser).email)
        }

    }, [])
    return (
        <>
        {loggedInUser && (
            <>
            <ul className={cx('header__navbar-list')}>
            <li className={cx('header__navbar-item')}>Xin chào, {loggedInUser} </li>
            <li className={cx('header__navbar-item')}>
                <button
                    className={cx('header__navbar-item-link')}
                    style={{ textDecoration: 'none' }}
                    onClick={handleLogout}
                    >Đăng xuất
                </button>
            </li>
            </ul>
            </>
        )}
        {!loggedInUser && (

        <div className={cx('loggedInUser')}>
            <ul className={cx('header__navbar-list')}>
                <li className={cx('header__navbar-item')}>
                    <button 
                        id="btn_register" 
                        className={cx('header__navbar-item-link')} 
                        onClick={() =>{
                            setRegisterModal(true)
                        }}
                    >
                    Đăng kí
                    </button>

                </li>
                <li className={cx('header__navbar-item')}>
                    <button
                        id="btn_login" 
                        className={cx('header__navbar-item-link')} 
                        onClick={() =>{
                            setLoginModal(true)
                        }}
                    >Đăng nhập
                    </button>
                </li>
                <RegisterModal 
                    isOpen={registerModal} 
                    onClose={() =>{setRegisterModal(false)}}
                />
                <LoginModal
                    isOpen = {loginModal}
                    onClose = {() => {setLoginModal(false)}}
                />
            </ul>
        </div>
        )}
        </>
    )
}

export default HeaderNavbar;