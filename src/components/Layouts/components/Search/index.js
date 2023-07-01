import styles from './Search.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react';
const cx = classNames.bind(styles)

function Search() {
    const [searchInput, setSearchInput] = useState('')

    const inputRef = useRef()
    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }
    const handleClear = () => {
        setSearchInput('')
        inputRef.current.focus()
    }
    return (
        <div className={cx('header-search')}>
			<input
                value={searchInput}
                ref={inputRef}
                type="text" 
                className={cx('header-search-input')} 
                placeholder="Nhấp vào để tìm kiếm"
                onChange={handleInputChange}
            />
            {searchInput &&(
                <button className={cx('header-search-clear')} onClick={handleClear}>
				    <FontAwesomeIcon icon={faCircleXmark}/> 
			    </button>
            )}
			
			<button 
                className={cx('header-search-btn')}
                style={{
                    color: searchInput? '#333': '#a5a5a5 '
                }}
                >
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
		</div>

    )
}

export default Search;