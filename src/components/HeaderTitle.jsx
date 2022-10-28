import styles from "../css/HeaderTitle.module.css";
import main from "../images/mainbg.png";
import logo from "../images/cheese_footer_logo.png"

export const HeaderTitle = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>
                    <img className={styles.main} src={main} alt="" />
                    <img className={styles.logos} src={logo} alt="" />
                </div>
            </div>
            <div className={styles.title}>
                <h1>セカイをかえるチーズをつくろう</h1>
                <p>チーズ職人養成学校/Cheese Academy Fukuoka</p>
            </div>
        </>
    )
}