import React from 'react'

const BookCard = () => {
    let books = [
        {
            title: "Python Crash Course",
            author: "Eric Matthes",
            isbn: "978-1593279288",
            genre: "Programming",
            publishedYear: 2019,
            copiesAvailable: 6,
            description: "A fast-paced introduction to Python aimed at both beginners and experienced programmers.",
            coverImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8Kvf9kKVz8jAZLGBwmbDrSpq1dEmNFPN1w&s"
        },
    
        ]
  return (
    <div className='book-card'>
      {books.map((book, index) => {
        return <div key={index} className='card'>
            <img src={book.coverImageUrl} />
            <h3>{book.title}</h3>
            <h4>Genre : {book.genre}</h4>
            <p>ISBN : {book.isbn}</p>
            <p>Published Year : {book.publishedYear}</p>
            <p>Copies Available : {book.copiesAvailable}</p>
            <p>{book.description}</p>
        </div>
      })}
    </div>
  )
}

export default BookCard
