import styles from "./search.module.css";
import { FiSearch } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { BiRadioCircle } from "react-icons/bi";
function Search() {
  return (
    <div className={styles.SearchContainer}>
      <span className="icon-left">
        <FiSearch />
        <input
          type="search"
          placeholder="Search for templates, projects, etc"
        />
      </span>
      <span className="icon-right">
        <VscSettings />
      </span>
      <span className="icon-right">
        <BiRadioCircle />
      </span>
    </div>
  );
}
export default Search;
