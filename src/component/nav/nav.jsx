import styles from "./nav.module.css";
import Logo from "../logo/logo";
import { MdHomeFilled } from "react-icons/md";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

function Nav() {
  return (
    <>
      <nav className={styles.NavBar}>
        <div className={styles.Upper}>
          <Logo className={styles.Logo} />
          <div className={styles.HomeContainer}>
            <MdHomeFilled className={styles.HomeIcon} />
          </div>
          <BsLayoutTextWindowReverse className={styles.WindowIcon} />
        </div>
        <div className={styles.Lower}>
          <IoSettingsOutline className={styles.Settings} />
          <IoIosLogOut className={styles.LogoutIcon} />
        </div>
      </nav>
    </>
  );
}
export default Nav;
