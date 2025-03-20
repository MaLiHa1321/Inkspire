import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookIndiDetails = () => {
    const {bookId} = useParams();
    const data  = useLoaderData();
    const id = parseInt(bookId);
    const book = data?.find( book => book.bookId === id)
   const {bookId: currentBookId} = book;

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 space-y-7'>
                <div className='bg-base-300 '>
                    <img className='w-full md:w-[600px] h-full md:h-[500px] p-6 -rotate-x-15 rotate-y-30' src={book?.image} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl md:text-4xl font-bold m-3 mr-0'>{book?.bookName}</h2>
                    <p>By: {book?.author}</p>

                    <div className="divider"></div>
                    <p>{book?.category}</p>
                    <div className="divider"></div>
                    <p><small className='font-bold'>Review:</small>{book?.review}</p>

                    <div className="divider"></div>
                      <div className='space-y-6'>
                        <p>Number of pages: {book?.totalPages}</p>
                        <p>Publisher: {book?.publisher}</p>
                        <p>Year of Publication: {book?.yearOfPublishing}</p>
                        <p>Rating: {book?.rating}</p>
                      </div>

                      <div className='flex gap-5 m-4'>
                      <button className="btn btn-outline btn-info">Read</button>
                      <button className="btn btn-primary">Wishlist</button>
                      </div>
                </div>
            </div>
          
        </div>
    );
};

export default BookIndiDetails;