import styles from "./Menu.module.css";
import Search from "../search/search";
function Menu() {
  return (
    <>
      <menu className={styles.Menu}>
        <Search />
      </menu>
    </>
  );
}
export default Menu;
