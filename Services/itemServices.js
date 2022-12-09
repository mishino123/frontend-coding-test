import { useEffect, useState } from "react";
import { useTask } from "../context/taskcontext.js";

export async function getPeople() {
  const rest = await fetch("http://localhost:3001/people?_sort=age&_order=desc");
  const people = await rest.json();
  // const {peopleInit}=useTask();
  // peopleInit(people)
  return people;
}

export async function getTask() {
  const rest = await fetch("http://localhost:3001/tasks/");
  const task = await rest.json();
  return task;
}

export async function changeTask(task) {
  const ids = task.id;
  task.completed ? (task.completed = false) : (task.completed = true);

  const response = await fetch(`http://localhost:3001/tasks/${ids}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const responseText = await response.text();
  getTask();
}

export async function sendTaskChange(task) {
  const ids = task.id;
  const response = await fetch(`http://localhost:3001/tasks/${ids}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const responseText = await response.text();
  getTask();
}

export async function sendPersonChange(person) {
  const ids = person.id;
  const response = await fetch(`http://localhost:3001/people/${ids}`, {
    method: "PUT",
    body: JSON.stringify(person),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const responseText = await response.text();
  getTask();
}
