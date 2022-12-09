import "../styles/globals.scss";
import "../styles/normalize.scss";
import "../styles/variables.scss";
import  {TaskProvider}  from "../context/taskcontext.js";

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Component {...pageProps} />;
    </TaskProvider>
  );
}
export default MyApp;
