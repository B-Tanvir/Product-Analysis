import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

const Review = ({review}) => {
    return (
        <>
                <div>
                    <header className="sm:items-center sm:flex">
                        <div className="flex -ml-1">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="mt-2 font-medium sm:ml-4 sm:mt-0">{review.title}</p>
                    </header>

                    <p className="mt-2 text-gray-700">{review.review}</p>

                    <footer className="mt-4">
                        <p className="text-xs text-gray-500">{review.name} - 12th January, 2024</p>
                    </footer>
                </div>
        </>
    );
};

export default Review;