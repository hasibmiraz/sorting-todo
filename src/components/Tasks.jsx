import React from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';

const Tasks = () => {
  return (
    <section className="space-y-4">
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
      <div className="h-14 w-96 bg-blue-200 flex justify-between items-center px-3 rounded-lg">
        <form className="w-full flex justify-between">
          <input
            type="text"
            className="w-[80%] bg-blue-100 focus:outline-blue-600 h-8 rounded px-2"
          />
          <input
            type="submit"
            value="Add"
            className="text-center bg-blue-600 text-white w-[18%] rounded cursor-pointer hover:scale-95 duration-150"
          />
        </form>
        <div className="flex space-x-2"></div>
      </div>
    </section>
  );
};

export default Tasks;
