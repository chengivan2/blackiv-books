import React from 'react';
import blackivwhite from './images/blackivwhite.png';

class Footer extends React.Component {
    render() {
      return (
        <footer className='bg-gray-500 min-h-fit min-w-full py-10 flex flex-col justify-center items-center'>
            <img src={blackivwhite} alt="BLACK-IV-Logo-Black" className='object-contain h-48 w-96' />
            <p className='font-medium'>
                
                &copy; BLACK IV BOOKS 2022
            </p>

        </footer>
      )
    }
}

export default Footer;