import Link from "next/link";
import React, { useState,useEffect } from "react";
import Person from "../Components/Person";
import { getPeople } from "../Services/itemservices";
import styles from "../styles/index.module.scss";
import Layout from "../Components/layout";
export default function Index({ items }) {

const [orderitems, setOrderItems]=useState(items)
const [order, setOrder]=useState("asc");

const filterPeople=(e)=>{
setOrder(e.target.value)
}
useEffect(()=>{
     fetch(`http://localhost:3001/people?_sort=age&_order=${order}`)
     .then((res)=>res.json())
     .then((restData)=>{
      setOrderItems(restData)
     })
   }
,[order])



 

  return (
    <Layout>
      <div  className={styles.containerpeople}>
        <select name="select" onChange={(e=>filterPeople(e))} className={styles.menu}>
          <option value="desc">asc</option>
          <option value="asc" selected>desc</option>
        </select>
        <div className={styles.people}>
        {orderitems.map((item) => (
          <Person key={item.id} item={item} showAs="Start" />
        ))}
      </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getPeople();
  return {
    props: {
      items: res,
    },
  };
}
