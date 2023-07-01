import { images } from "../../assets/images";
import styles from  './HomePage.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles)
function Home() {
    return (
        <div className="grid">
				<div className="grid__row">
					<div className="grid__column-detail-product">
						<div className={cx('banner')}>
							<img src={images.banner}/>
							<div className={cx('banner-content')}>
								<h1>Khắc Ngọc Shop</h1>
								<p>Chỉ từ 199k - Mua hoa tươi không lo về giá. Giao hàng miễn phí trong ngày, khu vực nội thành Hà Nội, TpHCM. Thu tiền mặt tận nơi, chuyển khoản hoặc thanh toán qua thẻ. Lựa chọn hoàn hảo cho những dịp đặc biệt: Sinh Nhật, Kỉ Niệm, Lãng Mạn, Ngày Phụ Nữ, Ngày Valentine, Ngày của Mẹ. Ngoài ra, Flowerstore nhận đặt vòng hoa, kệ hoa khai trương, chúc mừng và cho các dịp khác.</p>
							</div>
							
						</div>
					</div>
					
				</div>
                <div className="grid__row">
                    <div className = {cx('grid__column-4')}>
                        <img src={images.imgHome} alt=""/>
                        <h3 className={cx('heading-intro')}>Hình hoa thật</h3>
                        <p>Gửi hình hoa trước khi giao để quý khách kiểm tra chất lượng sản phẩm</p>
                    </div>
                    <div className = {cx('grid__column-4')}>
                        <img src={images.delivery} alt=""/>
                        <h3 className={cx('heading-intro')}>Miễn phí vận chuyển</h3>
                        <p>Miễn phí giao hành cho mọi đơn hàng lớn hơn 500k</p>
                    </div>
                    <div className = {cx('grid__column-4')}>
                        <img src={images.pay} alt=""/>
                        <h3 className={cx('heading-intro')}>Thanh toán dễ dàng</h3>
                        <p>Hỗ trợ nhiều phương thức thanh toán, hỗ trợ thuận tiện cho khách hàng</p>
                    </div>
                    
                </div>
				<div className="grid__row">
					<div className = {cx('grid__column-4')}>
						<p></p>
					</div>
					<div className = {cx('grid__column-4')}>
						<h1>SẢN PHẨM NỔI BẬT </h1>
					</div>
					<div className = {cx('grid__column-4')}>
						<p></p>
					</div>
					
				</div>
				<div className="grid__row">
					<div className="grid__column-2" >
						<div className="product-item">
								
						</div>
					</div>
				</div>
			</div>
    )
}

export default Home;