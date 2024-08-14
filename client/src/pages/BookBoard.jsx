import React from 'react';
import '../styles/board.css'
import BookFrom from '../components/BookFrom';
import BookeTable from '../components/BookeTable';

const BookBoard = () => {
  return (
    <div className='board-container'>
      <BookFrom />
      <BookeTable />
    </div>
  )
}

export default BookBoard;
