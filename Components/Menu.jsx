import Link from "next/link";
import style from "../styles/menu.module.scss";
export default function Menu() {

  return (
    <nav className={style.menu}>
      <div>


       <h1>Prueba de Next JS</h1>
        <Link href="/">
          <a className={style.link}>Home</a>
        </Link>

     

   
      </div>

    </nav>
  );
}
