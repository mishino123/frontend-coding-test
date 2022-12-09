import { getPeople, getTask } from "../Services/itemservices";
import { useTask } from "../context/taskcontext.js";




export async function getPathsFromId(){
    const people=await getPeople();
    return people.map((person)=>{
        return {
            params:{
                id: person.id.toString(),
            }
        };
    });
       
};


export async function getPerson(id){
    const people=await getPeople();
    const item=people.find((person)=>person.id.toString()===id)
    return item

}

export async function getPersonTaks(id){
 

    const tasks=await getTask();
    const taskPerson=tasks.filter((task)=>task.personId==id);
    return taskPerson;
}