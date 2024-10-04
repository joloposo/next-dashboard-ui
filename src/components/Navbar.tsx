import Image from 'next/image';
import React from 'react';

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src='/search.png' alt='search' width={14} height={14} />
        <input type='text' placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none ' />
      </div>
      {/* ICONS AND USER */}
      <div className='flex w-full items-center gap-6 justify-end'>
        <div className='bg-white rounded-full w-7 h-7 flex  items-center justify-center cursor-pointer'>
          <Image src='/message.png' alt='message' width={20} height={20} />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex  items-center justify-center cursor-pointer relative'>
          <Image src='/announcement.png' alt='announcement' width={20} height={20} />
          <div className='bg-purple-500 rounded-full absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-white text-xs'>
            3
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs font-medium leading-3'>Michal Vavrek</span>
          <span className='text-[10px] text-gray text-right'>Student</span>
        </div>
        <Image src='/avatar.png' alt='avater' width={36} height={20} className='rounded-full' />
      </div>
    </div>
  );
}

export default Navbar;
