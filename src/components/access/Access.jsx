import styles from "../../css/Access.module.css";
import { Map } from "./Map";

export const Access = () => {

    const aboutCompany = [
        {title: "学校名",content: "チーズアカデミーFUKUOKA"},
        {title:"事務所所在地", content: "〒810-0041 福岡県福岡市中央区大名1丁目3-41 プリオ大名ビル1F"},
        {title:"TEL", content: "000-000-0000"},
        {title:"FAX", content: "999-999-9999"},
        {title:"MAIL", content: "dummy@cheeseacademy.tokyo"}
    ]

    return (
        <div className={styles.container} id="access">
            <div className={styles.title}>
                <h2>ACCESS</h2>
                <p>会社情報</p>
            </div>

            <div className={styles.googleMap}>
                <Map/>
            </div>

            <div className={styles.company}>
                {aboutCompany.map((item)=>(
                    <div className={styles.contents}>
                        <div><p>{item.title}</p></div>
                        <div><p>{item.content}</p></div>
                    </div>
                ))}
            </div>
        </div>
    )
}