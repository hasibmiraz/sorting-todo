import React from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';

const Tasks = () => {
  return (
    <div className="h-14 w-96 bg-blue-200 flex justify-between items-center px-3 rounded-lg">
      <p className="font-semibold text-gray-600 text-lg">Todo</p>
      <div className="flex space-x-2">
        <GoTriangleUp
          className="text-blue-600 cursor-pointer"
          title="Move Up"
          size={20}
        />
        <GoTriangleDown
          className="text-blue-600 cursor-pointer"
          title="Move Down"
          size={20}
        />
        <MdOutlineCancel
          className="text-red-500 cursor-pointer"
          title="Delete"
          size={20}
        />
      </div>
    </div>
  );
};

export default Tasks;
