import Person from "../../../Components/person";
import {
  getPerson,
  getPersonTaks,
  getPathsFromId,
} from "../../../lib/functions";
import Task from "../../../Components/Task.jsx";
import styles from "../../../styles/id.module.scss";
import { useEffect, useState } from "react";
import { useTask } from "../../../context/taskcontext";
import Layout from "../../../Components/layout";

export default function PersonPage({ item, tasks }) {
  const { taskStateFunction, taskPersonal, isChange, functionChangeTask } =
    useTask();
  // const taskpersonal=taskStateFunction(item.id);
  const id = item.id;
  useEffect(() => {
    if (isChange) {
      fetch("http://localhost:3001/tasks/")
        .then((res) => res.json())
        .then((restData) => {
          taskStateFunction(id, restData);
          functionChangeTask();
        });
    }
  }, [isChange]);

  return (
    <Layout>
      <div className={styles.containerDetail}>
        <Person key={item.id} item={item} showAs="Details" />
        <div>
          {taskPersonal?.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromId();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const personInfo = await getPerson(id);
  const personTask = await getPersonTaks(id);

  return {
    props: {
      item: personInfo,
      tasks: personTask,
    },
  };
}
