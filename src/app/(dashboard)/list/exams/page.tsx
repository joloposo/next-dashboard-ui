import React from "react";
import Image from "next/image";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";

import { examsData, role } from "@/lib/data";

type Exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
};

const columns = [
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

function ExamListPage() {
  const renderRow = (data: Exam) => (
    <tr key={data.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{data.subject}</td>
      <td>{data.class}</td>
      <td className="hidden md:table-cell">{data.teacher}</td>
      <td className="hidden md:table-cell">{data.date}</td>
      <td>
        <div className="flex  items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal type="update" table="exam" data={data} />
              <FormModal type="delete" table="exam" id={data.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold ">All Exams</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>{" "}
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
              <Image src="/sort.png" alt="filter" width={14} height={14} />
            </button>{" "}
            {role === "admin" && <FormModal type="create" table="exam" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
}

export default ExamListPage;
