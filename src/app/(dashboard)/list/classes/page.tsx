import React from "react";
import Image from "next/image";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";

import { classesData, role } from "@/lib/data";

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

function ClassListPage() {
  const renderRow = (data: Class) => (
    <tr key={data.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{data.name}</td>
      <td className="hidden md:table-cell">{data.capacity}</td>
      <td className="hidden md:table-cell">{data.grade}</td>
      <td className="hidden md:table-cell">{data.supervisor}</td>
      <td>
        <div className="flex  items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal type="update" table="class" data={data} />
              <FormModal type="delete" table="class" id={data.id} />
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
        <h1 className="hidden md:block text-lg font-semibold ">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>{" "}
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
              <Image src="/sort.png" alt="filter" width={14} height={14} />
            </button>{" "}
            <FormModal type="create" table="class" />
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
}

export default ClassListPage;
