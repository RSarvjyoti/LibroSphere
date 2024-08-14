import React from 'react'

const BookFrom = () => {
  return (
    <div className='create-book'>
        <form action="/profile" method="post" enctype="multipart/form-data">
        <input type="file" name="avatar"/>
        <input type="text" placeholder='Enter title...' />
        <input type="text" placeholder='Enter Auther name...' />
        <input type="text" placeholder='Enter how many copies available...'/>
        <input type="text" placeholder='Enter ISBN...' />
        <input type="text" placeholder='Published Year' />
        <input type='text' placeholder='Provide the more information of books...'></input>
        <button id='add-book-btn'>Add Book</button>
        </form>
    </div>
  )
}

export default BookFrom;