import styles from "../css/Course.module.css";
import course1 from "../images/course_01.jpg";
import course2 from "../images/course_02.jpg";
import course3 from "../images/course_03.jpg";

export const Course = () => {
    return (
        <div className={styles.container} id="course">
            <div className={styles.title}>
                <h2>Course</h2>
                <p>未経験からでもスタートができるよう、カリキュラムは多くの専門家や現役チーズ職人のアドバイスのもと、作られました</p>
            </div>

            <div className={styles.contents}>

                <div className={styles.content}>
                    <div className={styles.image}><img src={course1} alt="" /></div>
                    <div className={styles.massage}>
                    <h3><i className="far fa-lightbulb"></i><span>01</span>本格的な農園を使った実地研修</h3>
                        <div><p>チーズアカデミーでは、本格的な農園を使った実地研修を行うことができます。プロとして活躍するチーズ職人も使用するような、広大で環境も整った農園を余すところなく使い、卒業時には本格的なチーズを自分の力で作れる実践力の養成を目指します。</p></div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.massage}>
                        <h3><span>02</span>必要な知識もしっかりと取得</h3>
                        <p>チーズ作りには，しっかりとした食に関する知識が欠かせません．チーズアカデミーでは，一流講師陣による，チーズ作りに必要ないろはを余すところなく学べます．チーズそのものでなく，栄養学全般を学ぶことも可能ですので，チーズ以外への展開も夢ではないでしょう</p>
                    </div>
                    <div className={styles.image}><img src={course2} alt="" /></div>
                </div>

                <div className={styles.content}>
                    <div className={styles.image}><img src={course3} alt="" /></div>
                        <div className={styles.massage}>
                            <h3><span>03</span>卒業制作はティスティング審査あり</h3>
                        <div><p>チーズアカデミーでは最後の2ヶ月間で卒業制作を実施．卒業制作として，チーズ作りを実際に行います．卒業後，一般参加によるティスティング審査があるため，作り手の目線だけでなく，消費者の目線から，卒業制作作品としてのチーズを，しっかりと評価いただくことができます．</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}