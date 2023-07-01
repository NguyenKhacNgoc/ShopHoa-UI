import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
const cx = classNames.bind(styles)
function Footer() {
    return (
        <footer className={cx('footer')}>
			<div className='grid'>
				<div className='grid__row'>
					<div className={cx('grid__column-footer')}>
						<h3 className={cx('heading-footer')}>Thông tin liên hệ</h3>
						<p>Địa chỉ: Định Công, Hoàng Mai, Hà Nội</p>
						<p>Di động: 0364600823</p>
						<p>Liên hệ: khacngoc1214@gmail.com</p>
					</div>
					<div className={cx('grid__column-footer')}>
						<h3 className={cx('heading-footer')}>Liên kết</h3>
						<ul className={cx('footer-list')}>
							<li className={cx('footer-item')}>
								<a href="#" className={cx('footer-link')}>Giới thiệu</a>
							</li>
							<li className={cx('footer-item')}>
								<a href="#" className={cx('footer-link')}>Hoa</a>
							</li>
							<li className={cx('footer-item')}>
								<a href="#" className={cx('footer-link')}>Giỏ hàng</a>
							</li>
						</ul>
					</div>
					<div className={cx('grid__column-footer')}>
						<h3 className={cx('heading-footer')}>Hỗ trợ</h3>
						<ul className={cx('footer-list')}>
							<li className={cx('footer-item')}>
								<a href="#" className={cx('footer-link')}>Hỗ trợ mua hàng</a>
							</li>
							<li className={cx('footer-item')}>
								<a href="#" className={cx('footer-link')}>Hỗ trợ thanh toán</a>
							</li>
							<li className={cx('footer-item')}>
								<a href="#" className={cx('footer-link')}>Hỗ trợ tư vấn</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</footer>
    )
}

export default Footer;