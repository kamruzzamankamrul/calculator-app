import styles from "./Buttons.module.css";

const Buttons = ({buttonOnClick}) => {
  const butonNumbers = [
    "C",
    
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "Off",
    "=",
  ];
  return (
    <div className={styles.buttonContainer}>
      {butonNumbers.map((item, index) => (
        <button key={index} className={styles.button} onClick={()=> buttonOnClick(item)} >
          {" "}
          {item}{" "}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
