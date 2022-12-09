import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/person.module.scss";
import { useTask } from "../context/taskcontext";


export default function Person({ item, showAs }) {

  const {editPersonFunction}=useTask();


  function sendPerson(){
    editPersonFunction(item)
  }



  if (showAs === "Start") {
    const id = item.id;
    return (
      <div className={styles.card}>
        <Link href={`/profile/${item.id}`}>
          <Image
            src={item.picture}
            alt={"picture"}
            width={300}
            height={300}
            className={styles.card__img}
          />
        </Link>

        <p className={styles.card__name}>
          <span className={styles.card__name__text}>Name: </span>
          {item.fullName}
        </p>

        <p className={styles.card__parrafo}>
          <span className={styles.card__name__text}>Age: </span>
          {item.age}
        </p>
        <p className={styles.card__parrafo}>
          <span className={styles.card__name__text}> Ocupation: </span>
          {item.occupation}
        </p>
      </div>
    );
  }

  if (showAs === "Details") {
    return (
      <div className={styles.details}>
        <div className={styles.details__header}>
          <h2>{item.fullName}</h2>
          <Link href={`/profile/${item.id}/edit`}>
          <button onClick={sendPerson} className={styles.details__boton}>Edit</button>
        </Link>
        </div>
        <div className={styles.details__image}>
          <Image
            src={item.picture}
            alt={"picture"}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <p className={styles.details__p}>
          Age: <span>{item.age}</span>
        </p>
        <p className={styles.details__p}>
          Ocupation: <span>{item.occupation}</span>
        </p>
        <p className={styles.details__p}>
          Nickname: <span>{item.nickname}</span>
        </p>
        <p className={styles.details__p}>
          Gender: <span>{item.gender}</span>
        </p>

      
      </div>
    );
  }
}
