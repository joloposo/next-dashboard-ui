import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { lessonsData, role, subjectsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: 'Subject',
    accessor: 'subject',
  },
  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

function LessonListPage() {
  const renderRow = (data: Lesson) => (
    <tr key={data.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
      <td className='flex items-center gap-4 p-4'>{data.subject}</td>
      <td>{data.class}</td>
      <td className='hidden md:table-cell'>{data.teacher}</td>
      <td>
        <div className='flex  items-center gap-2'>
          <Link href={`/lists/lessons/${data.id}`}>
            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
              <Image src='/edit.png' alt='' width={16} height={16} />
            </button>
          </Link>
          {role === 'admin' && (
            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'>
              <Image src='/delete.png' alt='' width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className='bg-white rounded-md p-4 flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold '>All Lessons</h1>
        <div className='flex flex-col md:flex-row items-center gap-4  w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full'>
              <Image src='/filter.png' alt='filter' width={14} height={14} />
            </button>{' '}
            <button className='w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full'>
              <Image src='/sort.png' alt='filter' width={14} height={14} />
            </button>{' '}
            {role === 'admin' && (
              <button className='w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full'>
                <Image src='/plus.png' alt='filter' width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
}

export default LessonListPage;