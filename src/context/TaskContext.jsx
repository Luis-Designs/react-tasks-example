import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext()
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const createTask = ({ title, description }) => {
    setTasks([...tasks, {
      title,
      id: tasks.length,
      description
    }])
  }
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return <TaskContext.Provider value={{
    tasks,
    createTask,
    deleteTask
  }}>
    {props.children}
  </TaskContext.Provider>;
}