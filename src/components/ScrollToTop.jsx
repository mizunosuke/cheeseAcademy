import { animateScroll as scroll } from "react-scroll";
import pagetoplogo from "../images/pagetop.png";
import styles from "../css/ScrollTop.module.css";

export const ScrollToTop = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return (
        <div className={styles.container}>
            <img src={pagetoplogo} alt="" onClick={scrollToTop} />
        </div>
    )
}