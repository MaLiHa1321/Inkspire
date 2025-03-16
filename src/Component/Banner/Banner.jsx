import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co.com/FzGDdmT/pexels-rafael-cosquiere-2041540.jpg"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-4'>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookself</h1>
                       
                        <button className="btn btn-primary mt-4">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;