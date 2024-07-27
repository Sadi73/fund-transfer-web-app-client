import React from 'react';
import startImg from '../../assets/1.jpg';
import { Link } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container border mx-auto'>
            <div className='flex flex-col items-center'>
                <img src={startImg} alt="" className='w-1/2' />
                <Link to='/login' className='w-1/2'><button className='bg-green-500 text-white px-3 py-2 hover:bg-green-600 w-full'>Get Started</button></Link>
            </div>
        </div>
    );
};

export default Root;