import classNames from 'classnames/bind';
import styles from './SearchResults.module.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const cx = classNames.bind(styles)
function Searchresults() {
	const [products, setProducts] = useState([])
	const {inputSearch} = useParams()
	useEffect(() => {
		const fetchData = async () => {
			try{
				const response = await axios.get(`https://ngoc-dep-trai-qua.onrender.com/api/searchresults/${inputSearch}`)
				setProducts(response.data)
			}catch(error){
				console.log(error)
			}
		}
		fetchData()

	},[])

	

    return (
        <div className="grid">
				{/* <div className={cx('home-filter')}>
					<span className={cx('home-filter-label')}>Sắp xếp theo</span>
					<button 
						className={sorted === 1 ? 'btn btn--primary': 'btn'}
						onClick={() => {setSorted(1)}}
					>
					Phổ biến
					</button>
					<button 
						className={sorted === 2 ? 'btn btn--primary': 'btn'}
						onClick={() => {setSorted(2)}}
					>
					Mới nhất
					</button>
					<button
						className={sorted === 3 ? 'btn btn--primary': 'btn'}
						onClick={() => {setSorted(3)}}
					>
					Bán chạy
					</button>
				</div> */}
				<div className="grid__row" >
					{products.map((product) => (
						<div className="grid__column-2" key={product.id}>
							<Link to={`/productdetail/${product.id}`} style={{textDecoration: 'none'}}>
							<div className={cx('product-item')}>
								<img src={product.hinhanh} alt={product.tenhoa} className={cx('product-item-img')}/>
								<h4 className={cx('product-item-name')} >{product.tenhoa}</h4>
								<p className={cx('product-item-price')} >{product.giaban}</p>
							</div>
							</Link>
						</div>
						

					))}
					
				</div>
				
				
		</div>
        
    )
}

export default Searchresults;