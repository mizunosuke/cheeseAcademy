import styles from "../../css/About.module.css";

export const About = () => {

    return (
        <div className={styles.container} id="about">
            <div className={styles.title}>
                <h2>ABOUT</h2>
            </div>
            <div className={styles.highlight}>
                <p>チーズアカデミーは，チーズ職人養成学校です</p>
            </div>
            <div className={styles.massage}>
                <p>チーズの素晴らしさを，自給自足を通じて，できるだけ多くの人に知っていただきたい</p>
                <p>そして，食卓にはいつもチーズがあった，あの頃の当たり前をこの手で取り戻したい</p>
                <p>そんな思いから，チーズ職人養成学校「チーズアカデミーFUKUOKA」は歩みを始めています</p>
                <p>卒業後，チーズ自給自足のバックアップはもちろんのこと，チーズ職人への就職・転職もサポートします</p>
            </div>
        </div>
    )
}