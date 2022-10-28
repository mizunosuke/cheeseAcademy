import styles from "../../css/NewsModal.module.css";

export const Modal = ({show,setShow}) => {

    const onClickClose = () => {
        setShow(false);
    }

    if(show) {
        return (
            <div id={styles.overlay}>
                <div id={styles.content}>
                    <div className={styles.modalTitle}>
                        <h2>もっと見たい方はチーズ会員になろう！</h2>
                    </div>

                    <form action="">
                        <dl>
                            <div className={styles.signup}>
                                <dt><label for="">名前</label></dt>
                                <dd><input type="text" name="name" /></dd>
                            </div>

                            <div className={styles.signup}>
                                <dt><label for="">メールアドレス</label></dt>
                                <dd><input type="e-mail" name="e-mail" /></dd>
                            </div>
                        </dl>
                    </form> 
                    <p><button><span>登録</span></button></p>   
                    <p><button onClick={onClickClose}><span>閉じる</span></button></p>
                </div>
            </div>
        );
    }else {
        return null;
    }
};
