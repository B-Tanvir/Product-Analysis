import React from 'react';

const Review = ({review}) => {
    return (
        <>
                <div>
                    <div className="mb-4">
                        <p className="text-sm text-gray-500"><span className={'text-amber-800'}>{review.name}</span> - 12th January, 2024</p>
                    </div>
                    <div className="sm:items-center sm:flex">
                        <div className="flex -ml-1">
                            Ratings: {review.ratings}
                        </div>
                        <p className="mt-2 font-medium sm:ml-4 sm:mt-0">{review.title.slice(0, 15)}</p>
                    </div>

                    <p className="mt-2 text-gray-700">{review.review}</p>
                </div>
        </>
    );
};

export default Review;