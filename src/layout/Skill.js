import React from 'react'

const Skill = () => {
    return(
        <section className="text-white body-font pt-5 pb-24" id="skills">
            <div className="container px-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="lg:w-2/3 sm:text-5xl lg:text-5xl text-5xl font-medium title-font mb-4 text-White text-left text-red-500">Skill-Set</h1>
                    <div className="lg:w-1/12 w-20 bg-red-500 h-2"></div>
                </div>
                <div className="flex flex-wrap -m-4 text-center items-end">
                <div className="p-4 md:w-4/12 sm:w-1/2 w-full">
                    <div className="shadow-5xl px-4 py-6 rounded-lg bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github inline-block" width="64" height="64" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                    <h2 className="title-font font-medium text-xl">Frontend Development</h2>
                    <p className="leading-relaxed">Downloads</p>
                    </div>
                </div>
                <div className="p-4 md:w-4/12 sm:w-1/2 w-full">
                    <div className="shadow-5xl px-4 py-6 rounded-lg bg-gray-700">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 className="title-font font-medium text-xl">Backend Development</h2>
                    <p className="leading-relaxed">Users</p>
                    </div>
                </div>
                <div className="p-4 md:w-4/12 sm:w-1/2 w-full">
                    <div className="shadow-5xl px-4 py-6 rounded-lg bg-gray-700">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-xl">App Design</h2>
                    <p className="leading-relaxed">Files</p>
                    </div>
                </div>
                <div className="p-4 md:w-4/12 sm:w-1/2 w-full">
                    <div className="shadow-5xl px-4 py-6 rounded-lg bg-gray-700">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-xl">Git Version Control</h2>
                    <p className="leading-relaxed">Places</p>
                    </div>
                </div>
                <div className="p-4 md:w-4/12 sm:w-1/2 w-full">
                    <div className="shadow-5xl px-4 py-6 rounded-lg bg-gray-700">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-xl">Photography</h2>
                    <p className="leading-relaxed">Places</p>
                    </div>
                </div>
                <div className="p-4 md:w-4/12 sm:w-1/2 w-full">
                    <div className="shadow-5xl px-4 py-6 rounded-lg bg-gray-700">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-xl">Freelancing</h2>
                    <p className="leading-relaxed">Places</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Skill