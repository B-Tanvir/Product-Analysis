import React from 'react';

const Blogs = () => {
    const faqsList = [
        {
            q: "What is context API?",
            a: "Context API is an alternative to \"prop drilling\". Via Context API we can share data between components without prop drilling. The data behave as global for React components tree structure."
        },
        {
            q: "What is semantic tag?",
            a: "A semantic tag is tag that clearly describe the purpose of the container. Some of the exapmles are section, header, footer etc."
        }
    ]
    return (
        <div className="leading-relaxed mt-12 mx-4 sm:mx-8">
            <div className="text-center space-y-3">
                <h1 className="block text-gray-800 text-3xl font-semibold">
                    Blogs Questions
                </h1>
            </div>
            <div className="relative bg-white rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto"
                 style={{boxShadow: '0px 7px 20px 7px #F1F1F1'}}>
                <div className="grid gap-4 py-8 md:grid-cols-2">
                    {
                        faqsList.map((item, idx) => (
                            <div className="space-y-3 mt-6 px-8" key={idx}>
                                <h4 className="text-gray-800 text-xl font-semibold ">
                                    {item.q}
                                </h4>
                                <p className="text-gray-500">
                                    {item.a}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-0 right-0 hidden md:block"></span>
            </div>
        </div>
    );
};

export default Blogs;