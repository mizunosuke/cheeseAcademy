import logo from "../images/header_logo.png";
import styles from "../css/Header.module.css";
import { Navigation } from "./Navigation";
import { ScrollToTop } from "./ScrollToTop";

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_logo}>
                <ScrollToTop/>
                <div className={styles.logos}>
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className={styles.navigation}>
                <Navigation/>
            </div>
        </div>
    )
}