import { createContext, useContext,useState,useEffect } from "react";
import { getPeople, getTask } from "../Services/itemservices";



export const TaskContext=createContext();

export const useTask=()=>{
    const context=useContext(TaskContext);
    return context;
}


export function TaskProvider({children}){
const variable="Juan"
const [taskPersonal, setTaskPersonal]=useState(null);
const [data, setData]=useState(null);
const [isChange, setIsChange]=useState(true)
const [editTask, setEditTask]=useState(null)
const [editPerson, setEditPerson]=useState(null)
const functionChangeTask=()=>{
  if(isChange==true){
    setIsChange(false)
  }else{
    setIsChange(true)
  };

}

const editTaskFunction=(task)=>{
    setEditTask(task);
}
const editPersonFunction=(item)=>{
  setEditPerson(item)
}



const taskStateFunction=(id,restData)=>{
    const taskPersonal=restData.filter((task)=>task.personId==id);
    setTaskPersonal(taskPersonal)
}

    return(
        <TaskContext.Provider
         value={{
           taskStateFunction,
           taskPersonal,
           functionChangeTask,
           isChange,
           editTaskFunction,
           editTask,
           editPersonFunction,
           editPerson
         }}>
            {children}
        </TaskContext.Provider>

    )
}


