import styles from "./button.module.css";
import PropTypes from "prop-types";

const BUTTON_TYPE_CLASSES = {
  // google: "google-signIn",
  isCreate: "CreateContent",
  start: "StartContent",
};

function Button({ children, buttonType }) {
  console.log(styles[BUTTON_TYPE_CLASSES[buttonType]]);
  return (
    <button
      className={`${styles.ButtonContainer} ${
        styles[BUTTON_TYPE_CLASSES[buttonType]]
      }`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  // isCreate: PropTypes.bool,
  buttonType: PropTypes.oneOf(["isCreate", "start"]).isRequired,
};

export default Button;
