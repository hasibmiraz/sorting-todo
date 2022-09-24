import React from 'react';
import AddNewTask from './AddNewTask';
import Tasks from './Tasks';

const TaskList = () => {
  return (
    <section className="space-y-4">
      <Tasks />
      {/* Add new todo */}
      <AddNewTask />
    </section>
  );
};

export default TaskList;
