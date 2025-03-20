import React, { useEffect, useState } from 'react';
import BookDetails from './BookDetails';

const Books = () => {
    const [book, setBook] = useState([])
    const [sort, setSort] = useState('');

    useEffect(() =>{
        fetch('./book.json')
        .then(res => res.json())
        .then(data => setBook(data))
    },[])

    const handleSort = (sortType) =>{
        setSort(sortType);
        if(sortType === 'rating'){
            const sortBook = [...book].sort((a,b) => a.rating - b.rating);
            setBook(sortBook)
        }
        else if(sortType === 'pages'){
            const sortPagesbook = [...book].sort((a,b) => a.totalPages - b.totalPages);
            setBook(sortPagesbook);
        }
    }
    return (
        <div>
            <h2 className='text-4xl text-center font-bold'>Books</h2>

            <div>
              <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  {
    sort? `Sort by ${sort}` : "Sort by"
  }
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li onClick={() => handleSort('rating')}><a>rating</a></li>
  <li onClick={() => handleSort('pages')}><a>Number of page</a></li>
</ul>
              </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    book?.map((books,id) => <BookDetails key={id} books={books}></BookDetails>)

                }
            </div>
            

        </div>
    );
};

export default Books;