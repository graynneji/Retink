import styles from "./Menu.module.css";
import Search from "../search/search";
import Button from "../button/button";
import Coin from "../coin/coin";
import { SlCalender } from "react-icons/sl";
import { IoNotificationsOutline } from "react-icons/io5";
import Profile from "../../assets/profile.jpg";
function Menu() {
  return (
    <>
      <menu className={styles.Menu}>
        <div className={styles.LeftMenu}>
          <Search />
        </div>

        <div className={styles.RightMenu}>
          <Button buttonType="isCreate">Create Content</Button>
          <div className={styles.CoinContainer}>
            <Coin />
            <p>20</p>
          </div>
          <div className={styles.Right}>
            <SlCalender />
            <IoNotificationsOutline />
            <div className={styles.ProfilePic}>
              <img src={Profile} alt="profile-pic" />
            </div>
          </div>
        </div>
      </menu>
    </>
  );
}
export default Menu;
// 754DE8
