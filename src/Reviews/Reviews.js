import React, {useContext, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import Review from "../components/Review/Review";
import {ReviewContext} from "../App";

const Reviews = () => {
    const [reviews, setReviews] = useContext(ReviewContext);

    return (
        <div className={'mt-4 mb-4 mx-8'}>
            <h1 className={'text-4xl text-center text-blue-900'}> What our customers say!</h1>
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-xl font-bold sm:text-2xl mx-auto w-fit">Customer Reviews({reviews.length})</h2>

                    <div className="flex items-center mt-4 mx-auto w-fit">
                        <p className="text-3xl font-medium">
                            4
                            <span className="sr-only"> Average review score </span>
                        </p>

                        <div className="ml-4">
                            <div className="flex -ml-1 text-yellow-400">
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={'text-zinc-300'} icon={faStar}></FontAwesomeIcon>
                            </div>

                            <p className="mt-0.5 text-xs text-gray-500">Based on {reviews.length} reviews</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 block mt-8 md:grid-cols-3 gap-x-16 gap-y-12">
                        {
                            reviews.map(review => <Review key={review.id} review={review}></Review>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;