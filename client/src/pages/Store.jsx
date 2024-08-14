import React from 'react';
import '../styles/store.css';
import BookCard from '../components/BookCard';

const Store = () => {
  return (
    <div className='store-container'>
      <div className='filter-input'>
        <label>Filter</label>
        <input type="text" placeholder='Find the new books...' />
      </div>
      <BookCard />
    </div>
  )
}

export default Store
