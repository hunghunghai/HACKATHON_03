import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListReviews from './components/ListReviews';
import Reviews from './components/Reviews';

function App() {
  const [containerColor, setContainerColor] = useState('white');

  const handleContainerClick = () => {
    const newColor = containerColor === 'white' ? 'black' : 'white';
    setContainerColor(newColor);
  };

  const handleReviewsIconClick = (e) => {
    e.stopPropagation(); // Ngăn chặn lan truyền sự kiện click lên container
    const newColor = containerColor === 'white' ? 'black' : 'white';
    setContainerColor(newColor);
  };

  const containerStyle = {
    backgroundColor: containerColor,
    color: containerColor === 'white' ? 'black' : 'white',
  };

  return (
    <div className='container' style={containerStyle} onClick={handleContainerClick}>
      <Header onReviewsIconClick={handleReviewsIconClick} />
      {/* <ListReviews /> */}
      <Reviews />
    </div>
  );
}

export default App;
