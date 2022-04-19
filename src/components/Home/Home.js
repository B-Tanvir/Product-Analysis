import React, {useContext, useEffect} from 'react';
import laptop from '../../assets/laptop.jpg'
import Review from "../Review/Review";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {ReviewContext} from "../../App";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    const [reviews, setReviews] = useContext(ReviewContext);
    useEffect(() => {
        fetch('MOCK_DATA.json')
            .then(res => res.json()
                .then(data => setReviews(data)))
    }, [setReviews]);

    return (
        <>
            <div className={'bg-violet-50  pl-12 pt-4 pr-12 pb-4'}>
                <div className={'flex justify-between h-full'}>
                    <div className={'flex flex-col justify-center rounded bg-pink-50 pl-2 pr-5 pl-6'}>
                        <h1 className={'text-5xl text-blue-900 mb-4'}>Choose your next <span
                            className={'text-amber-800'}>Laptop</span></h1>
                        <p className={'text-cyan-900'}>Our laptop reviews dig deep into what’s new from the world’s biggest
                            manufacturers to help you find it.</p>
                    </div>
                    <div className={'h-max'}>
                        <img src={laptop} alt=""/>
                    </div>
                </div>

                {/* Review section */}
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
                                reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                            }
                        </div>
                    </div>
                </section>
                <button className="bg-pink-500 block mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate('/reviews')}
                >
                    See all reviews
                </button>
            </div>
        </>
    );
};

export default Home;