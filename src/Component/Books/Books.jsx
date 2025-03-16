import React, { useEffect, useState } from 'react';
import BookDetails from './BookDetails';

const Books = () => {
    const [book, setBook] = useState([])

    useEffect(() =>{
        fetch('./book.json')
        .then(res => res.json())
        .then(data => setBook(data))
    },[])
    return (
        <div>
            <h2 className='text-4xl text-center font-bold'>Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    book?.map((books,id) => <BookDetails key={id} books={books}></BookDetails>)

                }
            </div>

        </div>
    );
};

export default Books;