import classNames from "classnames/bind"
import styles from './ProductDetail.module.scss'
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import LoginModal from "../Login"
const cx = classNames.bind(styles)
function ProductDetail() {
    const [productdetail, setProductdetail] = useState([])
    const {productID} = useParams()
    const [quantity, setQuantity] = useState(1)
    const isLogged = localStorage.getItem('loggedInUser')
    const [isOpenModal, setIsOpenModal] = useState(false)
    
    
    useEffect(() => {
        const fetchProduct = async() => {
            try{
                const response = await axios.get(`https://ngoc-dep-trai-qua.onrender.com//api/productdetail/${productID}`)
                setProductdetail(response.data)
                
            }catch(error){
                console.log(error)
            }
            
        }
        fetchProduct()

    }, [productID])
    
    const handleSubmitCart = async (e) => {
        e.preventDefault()
        
        if(isLogged){
            setIsOpenModal(false)
            const userID = JSON.parse(localStorage.getItem('loggedInUser')).id
            const request = {
                productID: productID,
                userID: userID,
                quantity: quantity
            }
            try{
                const response = await axios.post('https://ngoc-dep-trai-qua.onrender.com/api/addtocart', request)
                alert(response.data)
    
            }catch(error){
                console.log(error)
            }
        }
        else{
            setIsOpenModal(true)
        }

    }
    
    return (
        
        <div className="grid">
			<div className="grid__row">
                <div className="grid__column-3">
                    <div className={cx('detail-product-img')}>
                        <img src={productdetail.hinhanh} alt={productdetail.tenhoa} className={cx('deltail-product-item-img')} />
                    </div>
                </div>
                <div className="grid__column-9">
                    <div className={cx('detail-product')}>
                        <div className="grid__row">
                            <div className="grid__column-detail-product">
                                        {/* <!-- Sản phẩm --> */}
                                <div className={cx('detail-product-item')}>
                                    <h4 className={cx('detail-product-item-name')}>{productdetail.tenhoa}</h4>
                                    <p className={cx('detail-product-item-description')}>{productdetail.mota}</p>
                                    <p className={cx('detail-product-item-price')}>Giá bán: {productdetail.giaban}</p>

                                </div>
                                {isOpenModal && <LoginModal isOpen={isOpenModal} onClose={() => {setIsOpenModal(false)}}/>}
                                <div className={cx('form-addtocart')}>
                                    <form onSubmit={handleSubmitCart}>
                                        <div className={cx('quantity')}>
                                            <label htmlFor="quantity">Số lượng: </label>
                                            <input 
                                                type="number" 
                                                name="quantity" 
                                                id="quantity" 
                                                className="quantity" 
                                                min="1"
                                                value={quantity}
                                                onChange={(e) => {setQuantity(e.target.value)}}
                                                
                                                 />
                                        </div>
                                        <div className={cx('buttons')}>
                                            <input className="btn btn--primary" type="submit" value="Thêm vào giỏ hàng"/>
                                            
                                        </div>
                                    </form>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
			</div>
		</div>          
    )
}

export default ProductDetail;