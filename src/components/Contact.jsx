import styles from "../css/Contact.module.css";
import { Btn } from "./news/Btn";

export const Contact = () => {
    return (
        <div className={styles.container} id="contact">
            <div className={styles.contact} id="contact">
                <div className={styles.contact_title}>
                    <h2>CONTACT</h2>
                    <p>説明会お申し込み・お問合せ</p>
                </div>

                <div className={styles.massage_content}>
                    <p>是非1度、足を運んでみませんか。説明会は随時開催中。その他、お問合せもお気軽にどうぞ。お待ちしております。</p>
                    <p>※チーズアカデミーは実際には存在しません。間違ってもお問合せしないようお願いいたします。</p>
                </div>

                <form action="" className={styles.form_container}>
                        <dl>
                            <div className={styles.form_q}>
                                <dt><label for="">名前</label></dt>
                                <dd><input type="text" name="name" /></dd>
                            </div>

                            <div className={styles.form_q}>
                                <dt><label for="">カナ</label></dt>
                                <dd><input type="text" name="kana" /></dd>
                            </div>

                            <div className={styles.form_q}>
                                <dt><label for="">メールアドレス</label></dt>
                                <dd><input type="text" name="email" /></dd>
                            </div>

                            <div className={styles.check_q}>
                                <dt>志望動機</dt>
                                    <div className={styles.check_q_list}>
                                        <dd><label for=""><input type="checkbox" name="" id="" />起業したい</label></dd>
                                        <dd><label for=""><input type="checkbox" name="" id="" />チーズ系企業に就職・転職したい</label></dd>
                                        <dd><label for=""><input type="checkbox" name="" id="" />チーズ系の仕事をしており、仕事に活かしたい</label></dd>
                                        <dd><label for=""><input type="checkbox" name="" id="" />チーズの教養を身につけたい</label></dd>
                                </div>
                            </div>

                            <div className={styles.form_text}>
                                <dt>詳細</dt>
                                <dd><label for=""><textarea name="massage" id="" cols="30" rows="10"></textarea></label></dd>
                            </div>
                        </dl>
                        <Btn/>
                </form>
            </div>

        </div>
    )
}