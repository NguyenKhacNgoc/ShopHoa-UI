
import classNames from "classnames/bind";
import styles from './HeaderMenu.module.scss'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const cx = classNames.bind(styles)
function HeaderMenu() {
    const [getcategories, setGetCategories] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8080/api/getcategory')
                setGetCategories(response.data)

            }catch(error){
                console.log(error)
            }
        }
        fetchData()

    }, [])
    return (
        <ul className={cx('header-menu-list')}>
            {getcategories.map((getcategorie) => (
                <li className={cx('header-menu-item')} key={getcategorie}>
                <Link
                    to={`/product/${getcategorie}`}
                    className={cx('header-menu-item-link')}
                >{getcategorie}
                </Link>
            </li>
            ))}
            
        </ul>
        
    )
}

export default HeaderMenu;