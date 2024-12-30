import styles from "./Display.module.css"

const Display = ({calValue}) => {
  return (
    <div >
      <input className={styles.display} type="text" value={calValue} readOnly/>
    </div>
  );
};

export default Display;