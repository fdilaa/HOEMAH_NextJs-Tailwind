import Link from 'next/link';
import React from 'react';

const Home = ({heading, message}) => {
  return (
    <div className='flex items-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]' />
      <div className='ml-20  p-2 text-white z-[2] mt-[10]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <div>
          <Link href='/about'>
          <button className='px-8 py-2 border rounded-full'>See More</button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
