import React, { useEffect, useState } from "react";
import { useTask } from "../../../context/taskcontext";
import styles from "../../../styles/editform.module.scss";
import { sendPersonChange } from "../../../Services/itemservices";
import Layout from "../../../Components/layout";

export default function editPerson() {
  const { editPerson } = useTask();
  const [Personforedit, setPersonforedit] = useState(editPerson);
  console.log(Personforedit);

  function HandleChange(e) {
    setPersonforedit({ ...Personforedit, [e.target.name]: e.target.value });
  }

  function sendPersonForm(e) {
    e.preventDefault();
    sendPersonChange(Personforedit);
  }

  return (
    <Layout>
      <div className={styles.contenedorform}>
        <form onSubmit={(e) => sendPersonForm(e)} className={styles.formulario}>
          <legend>Profile</legend>

          <div className={styles.campo}>
            <label className={styles.font} htmlFor="FullName">
              fullName:{" "}
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="fullName"
              name="fullName"
              value={Personforedit?.fullName}
              onChange={HandleChange}
              required
            />
          </div>

          <div className={styles.campo}>
            <label className={styles.font} htmlFor="fullName">
              Age:
            </label>
            <input
              id="Age"
              type="text"
              placeholder="Age"
              name="age"
              value={Personforedit?.age}
              onChange={HandleChange}
              required
            />
          </div>

          <div className={styles.campo}>
            <label className={styles.font} htmlFor="occupation">
              Ocupation:
            </label>
            <input
              id="Occupation"
              type="text"
              className={styles.font1}
              value={Personforedit?.occupation}
              name="occupation"
              placeholder="Ocupation"
              onChange={HandleChange}
            />
          </div>

          <div className={styles.campo}>
            <label className={styles.font} htmlFor="nickname">
              Nickname:
            </label>
            <input
              id="nickname"
              type="text"
              className={styles.font1}
              name="nickname"
              placeholder="NickName"
              onChange={HandleChange}
              value={Personforedit?.nickname}
            />
          </div>

          <div className={styles.campo}>
            <label className={styles.font} htmlFor="gender">
              Gender:
            </label>
            <input
              id="gender"
              type="text"
              className={styles.font1}
              name="gender"
              placeholder="gender"
              onChange={HandleChange}
              value={Personforedit?.gender}
            />
          </div>

          <div className={styles.campo}>
            <label className={styles.font} htmlFor="picture">
              Picture:
            </label>
            <input
              id="picture"
              type="text"
              className={styles.font1}
              name="picture"
              placeholder="picture"
              onChange={HandleChange}
              value={Personforedit?.picture}
            />
          </div>

          <input className={styles.btn} type="submit" value="Send form" />
        </form>
      </div>
    </Layout>
  );
}
