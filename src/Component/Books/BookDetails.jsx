import React from 'react';

const BookDetails = ({books}) => {
   const {image,bookName,author,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = books;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            
        </div>
    );
};

export default BookDetails;