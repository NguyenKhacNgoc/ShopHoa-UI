import classNames from "classnames/bind";
import styles from './Carts.module.scss'
import { useEffect, useState } from "react";
import axios from "axios";
const cx = classNames.bind(styles)
function Carts() {
    const userID = JSON.parse(localStorage.getItem('loggedInUser')).id
    const [carts, setCarts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            
            try{
                const response = await axios.get(`http://localhost:8080/api/carts?userid=${userID}`)
                setCarts(response.data)


            }catch(error){
                console.log(error)

            }
        }
        fetchData()

    }, [])

    let total = 0
    carts.forEach(cart => {
        total+=cart.hoa.giaban*cart.soluong
    })

    const UpdateQuantity = async(cartID, newQuantity) => {
        try{
            const response = await axios.put('http://localhost:8080/api/updatecart', {
                cartID: cartID,
                quantity: newQuantity
            })
            //update carts
            const updateCarts = carts.map(cart => {
                if(cart.id === cartID) {
                    return {...cart, soluong: newQuantity}
                }
                return cart
            })
            console.log(response.data)
            setCarts(updateCarts)
            

        }catch(error){
            console.log(error)
        }

    }
    const handleDelete = async(cartID) => {
        try{
            const response = await axios.delete(`http://localhost:8080/api/deletecart?cartid=${cartID}`)
            //update carts
            const updateCart = carts.filter(cart => cart.id !== cartID)
            console.log(response.data)
            setCarts(updateCart)
        }catch(error){
            console.log(error)
        }
    }

    

    return (
        <div className="grid">
			<div className="grid__row">
				<div className="grid__column-detail-product">
                    <div className={cx('cart-item')}>
                        <h2>Giỏ hàng</h2>
                        <table className={cx('cart-table')}>
                            <thead>
                                <tr className={cx('cart-item')}>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((cart) => (
                    
                                    <tr key={cart.id} className={cx('cart-item')}>
                                        <td>
                                            <img src={cart.hoa.hinhanh} alt={cart.hoa.tenhoa} className={cx('img')}/>
                                        </td>
                                        <td className={cx('item-name')}>{cart.hoa.tenhoa}</td>
                                        <td className={cx('item-quantity')}>
                                            <input 
                                                type="number" 
                                                name="quantity" 
                                                id="quantity" 
                                                value={cart.soluong}
                                                onChange={(e) => {UpdateQuantity(cart.id, e.target.value)}}
                                            />
                                        </td>
                                        <td className={cx('item-price')}>{cart.hoa.giaban}</td>
                                        <td>
                                            <button 
                                                className={cx('btn-delete')}
                                                onClick={() => {handleDelete(cart.id)}}
                                            >Xoá
                                            </button>
                                        </td>
                                        

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className={cx('total-amount')}>
                            <h3>Tổng tiền: {total}</h3>
                        </div>
                    </div>
                        

                </div>
					
			</div>
        </div>
    )
}

export default Carts;