import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-orange-100">
                <h1 className="text-9xl font-extrabold text-blue-900 tracking-widest">404</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
            <Link to={'/'} className="inline-block p-[2px] rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
               href="/download">
  <span className="block px-8 py-2 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
    Home
  </span>
            </Link>
        </div>
    );
};

export default NotFound;