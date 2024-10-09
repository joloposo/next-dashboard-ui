'use client'

import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import React from 'react';

function ParentPage() {
  return (
    <div className=' flex flex-1 p-4 gap-4 flex-col xl:flex-row'>
      {/* LEFT */}
      <div className='w-full xl:w-2/3 flex flex-col gap-8'>
        <div className='h-full bg-white rounded-md p-4'>
          <h1 className='text-lg font-semibold'>Schedule (Michal Vavrek)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8 '> 
        <Announcements />
      </div>
    </div>
  );
}

export default ParentPage;
