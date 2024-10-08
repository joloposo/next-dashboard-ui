'use client';

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: 'Event 1',
    time: '14:00 - 16:00',
    description: 'This is the first event',
  },
  {
    id: 2,
    title: 'Event 2',
    time: '14:00 - 16:00',
    description: 'This is the second event',
  },
  {
    id: 3,
    title: 'Event 3',
    time: '14:00 - 16:00',
    description: 'This is the third event',
  },
];

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold py-4'>Events</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      <div className='flex flex-col gap-4 '>
        {events.map((event) => (
          <div
            key={event.id}
            className='p-5 border-2 rounded-md border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple '
          >
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-gray-600 '>{event.title}</h1>
              <span className='text-gray-300 text-xs'>{event.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalendar;
