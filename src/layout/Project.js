import React from 'react'
import contactKeeperImg from '../img/contactKeeper.png'

const Project = () =>{
    return(
        <section className="text-gray-300 body-font" id="projects">
            <div className="container mx-auto flex px-20 py-24 flex-col">
                <h1 className="lg:w-2/3 sm:text-5xl lg:text-5xl text-5xl font-medium title-font text-White text-left text-red-500 pb-5">Projects</h1>
                <div className="lg:w-1/12 w-20 bg-red-500 h-2 "></div>
                <div className="w-full pt-10 flex flex-col items-center justify-center">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={contactKeeperImg} />
                    <div className="text-center lg:w-2/3 w-full">
                        <a href="https://secret-beach-70926.herokuapp.com" target="_blank" rel="noreferrer">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white pb-5">Contact Keeper App</h1>
                        </a>
                        <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Project