import styles from "../../css/Btn.module.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Btn = ({onClickShow}) => {
    return (
        <div className={styles.container}>
            <a  onClick={onClickShow} className={`${styles.btn} ${styles.btn_custom01}`}>
            <span className={styles.btn_custom01_front}>MORE</span>
            <i className={`${faAngleRight}`}></i>
            </a>
        </div>
    )
}