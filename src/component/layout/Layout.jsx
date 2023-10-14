import styles from "./Layout.module.css";
import Nav from "../nav/nav";
import Menu from "../menu/menu";
import Section from "../section/section";
function Layout() {
  return (
    <div className={styles.container}>
      <Nav />
      <Menu />
      <Section />
    </div>
  );
}
export default Layout;
