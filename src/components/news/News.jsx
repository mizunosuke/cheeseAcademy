import styles from "../../css/News.module.css";
import newsimage from "../../images/news_img.jpg";
import { Modal } from "./Modal";
import { Btn } from "./Btn";
import { useState } from "react";

export const News = () => {

    const [ show, setShow ] = useState(false);

    const onClickShow = () => {
        setShow(true);
    }

    return (
        <div className={styles.container} id="news">
            <div className={styles.title}>
                <h2>NEWS</h2>
                <p>ニュース</p>
            </div>
            <div className={styles.contents}>
                <div className={styles.content}>
                    <div className={styles.image_massage}>
                        <img src={newsimage} alt="" />
                        <p>2018/11/24</p>
                        <p>チーズアカデミー卒業生のコスゲさんによるチーズだけをふんだんに使用した話題のピザ屋「Kosuge Pizza」が天神でオープンしました！</p>
                    </div>

                    <div className={styles.image_massage}>
                        <img src={newsimage} alt="" />
                        <p>2018/11/24</p>
                        <p>チーズアカデミー卒業生のコスゲさんによるチーズだけをふんだんに使用した話題のピザ屋「Kosuge Pizza」が天神でオープンしました！</p>
                    </div>

                    <div className={styles.image_massage}>
                        <img src={newsimage} alt="" />
                        <p>2018/11/24</p>
                        <p>チーズアカデミー卒業生のコスゲさんによるチーズだけをふんだんに使用した話題のピザ屋「Kosuge Pizza」が天神でオープンしました！</p>
                    </div>
                </div>
                <div className={styles.btn}>
                    <Btn 
                    onClick={onClickShow}
                    show={show}
                    setShow={setShow}
                    />
                    <Modal 
                    show={show}
                    setShow={setShow}
                    />
                </div>
            </div>
        </div>
    )
}