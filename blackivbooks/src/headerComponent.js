import React from 'react';
import readbooks from './images/readbooks.png'

class Header extends React.Component {
    render() {
      return (
        <header className='min-h-screen font-sans bg-red-800'>

            <section className='flex flex-col items-center justify-center md:flex-row md:justify-between py-10'>

                <div className='grid space-evenly leading-loose text-center md:pl-10 md:text-left'>

                    <h1 className='text-6xl py-10 group font-black'>
                        <span className='group-hover:text-white'>BLACK</span> 
                        <span className='text-white group-hover:text-black'> IV</span> BOOKS
                    </h1>

                    <p>
                        
                        <figure className="mx-auto max-w-screen-md">
                            <blockquote>
                                <q className="text-xl italic font-medium">
                                    So much books, so little time...
                                </q>
                            </blockquote>

                            <figcaption className="flex mt-6 space-x-3">
                                <div className="flex justify-end divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <cite className="pr-3 font-medium text-gray-800">- Frank Zappa</cite>
                                </div>
                            </figcaption>
                        </figure>

                        <br/>

                        <span className='text-lg font-normal tracking-normal'>
                            Search for your desired books to see how you can get them.
                        </span>

                        <br/>
                        
                        <span className='text-lg font-normal tracking-normal'>
                            Preview every new book to know what they are about.
                        </span>
                    
                    </p>

                </div>

                <div className='lg:flex justify-center'>

                    <a>
                        <img src={readbooks} />
                    </a>

                </div>

            </section>

        </header>
      )
    }
}

export default Header;