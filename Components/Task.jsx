import React, { useState } from "react";
import styles from "../styles/task.module.scss";
import { changeTask } from '../Services/itemservices';
import { useTask } from '../context/taskcontext';
import Link from "next/link";






export default function task({ task }) {
  const {functionChangeTask, isChange,editTaskFunction}=useTask()

  const [completedV, setCompleted]=useState(task.completed)
  // console.log(completedV)

  function changeBotonTask(e){
    e.preventDefault();
    functionChangeTask()
    changeTask(task)
    completedV?setCompleted(false):setCompleted(true);
  }

  function SendTask(){

    editTaskFunction(task)
  }
  return (
    <div className={styles.taskContainer}>
      <div className={styles.header}>
        <p> {task.title}</p>
        <button  className={styles.boton2}  onClick={changeBotonTask}>State task</button>
      </div>
      <div className={styles.info}>
        <p>
          Description: <span>{task.description}</span>
        </p>
        <p>
         Completed: <span> { completedV?<span>Completed</span>:<span>No Completed</span>}</span>
        </p>
        <p>
          Start task: <span>{task.startDate}</span>
        </p>
        <p>
          End Task:{" "}
          {completedV ? <span>{task.endDate}</span> : <span>----</span>}
        </p>
        <Link href={`/tasks/${task.id}/edit`}>
        <button className={styles.boton} onClick={SendTask}>Edit</button>
        </Link>
      </div>
    </div>
  );
}
