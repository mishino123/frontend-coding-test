import { sendError } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";
import { useTask } from "../../../context/taskcontext";
import styles from "../../../styles/editform.module.scss";
import { sendTaskChange} from "../../../Services/itemservices";
import Layout from "../../../Components/layout";
import Link from "next/link";






export default function edit() {

const {editTask}=useTask();
const [Taskforedit, setTaskforedit]=useState(editTask)
console.log(editTask.personId.toString());
// useEffect(()=>{
//   setTaskforedit(editTask)
// })
function HandleChange(e){
      setTaskforedit({...Taskforedit,[e.target.name]:e.target.value})

}


function sendTaskForm(e){
    e.preventDefault()
    sendTaskChange(Taskforedit)
}
  return (
<Layout>
    <div className={styles.contenedorform}>
     

    <form onSubmit={e=>sendTaskForm(e)} className={styles.formulario}>
        
            <legend>Task</legend>
            
            <div className={styles.campo}>
                <label className={styles.font}  htmlFor="title">Title: </label>
                <input  id="title" type="text" placeholder="Title" name="title" value={Taskforedit?.title} onChange={HandleChange} required/>
            </div>

            <div className={styles.campo}>
                <label  className={styles.font} htmlFor="completed">Completed:</label>
                <input id="completed" type="text" placeholder="Completed" name="completed" value={Taskforedit?.completed}  onChange={HandleChange}  required/>
            </div>

            <div className={styles.campo}>
                <label className={styles.font} htmlFor="startdate">StartDate:</label>
                <input id="startdate" type="date" className={styles.font1} value={Taskforedit?.startDate}  name="startDate" placeholder="Start Date"  onChange={HandleChange} /> 
            </div>

            <div className={styles.campo}>
                <label className={styles.font} htmlFor="enddate">EndDate:</label>
                <input id="enddate" type="date"  className={styles.font1}  name="endDate" placeholder="End Date"  onChange={HandleChange} value={Taskforedit?.endDate}/> 
            </div>

            <div className={styles.campo}>
                <label className={styles.font} htmlFor="Description" >Description:</label>
                <textarea rows="10" cols="10"  value={Taskforedit?.description}  name="description" onChange={HandleChange} />
            </div>

       
        <input className={styles.btn} type="submit" value="Enviar Formulario"/>
        <Link href={`/profile/${editTask.personId.toString()}`}>
        <input className={styles.btn2}  value="volver"/>
        </Link>
    </form>   
</div>
</Layout>
  );
}

