import styles from "./Layout.module.css";
import Nav from "../nav/nav";
import Menu from "../menu/menu";
function Layout() {
  return (
    <div className={styles.container}>
      <Nav />
      <Menu />
      <section className={styles.Section}></section>
    </div>
  );
}
export default Layout;
