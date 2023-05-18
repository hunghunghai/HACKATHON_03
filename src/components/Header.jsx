import React, { useState } from 'react';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import BrightnessMediumOutlinedIcon from '@mui/icons-material/BrightnessMediumOutlined';
import '../css/header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Header({ onSearch }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleReviewsIconClick = (e) => {
        e.stopPropagation();
        onSearch(''); // Reset giá trị tìm kiếm khi bấm vào icon reviews
    };

    const handleSearchInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchValue(inputValue);
        onSearch(inputValue); // Gọi hàm onSearch từ prop và truyền giá trị tìm kiếm
    };

    const headerClassName = isDarkMode ? 'header header-dark' : 'header';

    return (
        <>
            <div className={headerClassName}>
                <h1>
                    Reviews TA Béc Cọp !!! <span onClick={handleReviewsIconClick}><ReviewsOutlinedIcon /></span>
                </h1>
                <div className="black-white" onClick={toggleMode}>
                    <BrightnessMediumOutlinedIcon />
                </div>
            </div>
            <div className='search-reviews'>
                <SearchOutlinedIcon />
                <input
                    type="text"
                    placeholder='Search here..'
                    value={searchValue}
                    onChange={handleSearchInputChange}
                />
            </div>
        </>
    );
}
