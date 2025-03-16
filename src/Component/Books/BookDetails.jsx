import React from 'react';
import { Link } from 'react-router';

const BookDetails = ({books}) => {
   const {image,bookName,author,review,totalPages,rating,category,tags,publisher,yearOfPublishing,bookId} = books;
    return (
        <Link to={`/books/${bookId}`}> 
           <div className="card bg-base-100 w-90 shadow-xl p-6">
  <figure className='bg-amber-50 py-8 rounded-2xl'>
    <img className='h-[166px] -rotate-x-15 rotate-y-30'
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body">
    <div className='flex gap-3 justify-center'>

    {
        tags?.map((tag) =><div className="badge badge-secondary">{tag}</div>)
    }
    </div>
  
    <h2 className="card-title">
    {bookName}
      
    </h2>
    <p>Author: {author}</p>
    <div className="divider"></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div> {rating}
      <div className="rating gap-1">
      <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" aria-label="2 star"  />
</div>
      </div>
      {/* <div className="badge badge-outline">{rating}</div> */}
    </div>
  </div>
</div>
            
        </Link>
    );
};

export default BookDetails;