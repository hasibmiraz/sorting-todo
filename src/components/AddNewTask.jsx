import React from 'react';
import { database } from '../firebase.init';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';

const AddNewTask = () => {
  const [todosLength, setTodosLength] = useState([]);
  const collectionRef = collection(database, 'tasks');

  onSnapshot(collectionRef, (doc) => {
    setTodosLength(doc.docs.length);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = e.target.todo.value;
    addDoc(collectionRef, {
      todo: newTodo,
      index: todosLength + 1,
    }).then(() => {
      e.target.todo.value = '';
    });
  };

  return (
    <div className="h-14 w-96 bg-blue-200 flex justify-between items-center px-3 rounded-lg">
      <form className="w-full flex justify-between" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
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
  );
};

export default AddNewTask;
