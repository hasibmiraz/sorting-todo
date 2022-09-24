import { collection, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';
import { database } from '../firebase.init';
const collectionRef = collection(database, 'tasks');

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const getData = () => {
    onSnapshot(collectionRef, (doc) => {
      setTasks(doc.docs);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="h-14 w-96 bg-blue-200 flex justify-between items-center px-3 rounded-lg"
        >
          <p className="font-semibold text-gray-600 text-lg">
            {console.log(task.data().todo)}
          </p>
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
      ))}
    </>
  );
};

export default Tasks;
