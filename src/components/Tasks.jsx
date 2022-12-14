import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';
import { database } from '../firebase.init';
const collectionRef = collection(database, 'tasks');

const Tasks = () => {
  const [allData, setAllData] = useState([]);

  let tasks = [];

  const getData = useCallback(() => {
    onSnapshot(collectionRef, (doc) => {
      doc.docs.map((task) => tasks.push({ ...task.data(), id: task.id }));
      tasks.sort(function (a, b) {
        if (a.index > b.index) return 1;
        if (a.index < b.index) return -1;
        return 0;
      });
      setAllData(tasks);
    });
  });

  const handleDelete = (id) => {
    const deleteTask = doc(database, 'tasks', id);
    deleteDoc(deleteTask).then((res) => console.log('Deleted'));
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {allData.map((data) => (
        <div
          key={data.id}
          className="h-14 w-96 bg-blue-200 flex justify-between items-center px-3 rounded-lg"
        >
          <p className="font-semibold text-gray-600 text-lg">{data.todo}</p>
          <div className="flex space-x-2">
            <GoTriangleUp
              disabled={allData.indexOf(data) === 0}
              className={
                allData.indexOf(data) === 0
                  ? 'text-gray-400'
                  : 'text-blue-600 cursor-pointer'
              }
              title="Move Up"
              size={20}
            />
            <GoTriangleDown
              disabled={allData.indexOf(data) === allData.length - 1}
              className={
                allData.indexOf(data) === allData.length - 1
                  ? 'text-gray-400'
                  : 'text-blue-600 cursor-pointer'
              }
              title="Move Down"
              size={20}
            />
            <MdOutlineCancel
              onClick={() => handleDelete(data.id)}
              className="text-red-500 cursor-pointer"
              title="Delete"
              size={20}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Tasks;
