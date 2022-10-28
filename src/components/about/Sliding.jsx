import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../css/Sliding.module.css"
import slider01 from "../../images/about_01.jpg";
import slider02 from "../../images/about_02.jpg";
import slider03 from "../../images/about_03.jpg";
import slider04 from "../../images/about_04.jpg";

export const Sliding = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        arrow: true,
        autoplay: true,
        fade: true
      };

    return (
        <div className={styles.container}>
            <Slider {...settings}>
                    <div className={styles.contents}>
                        <img src={slider01} alt="" />
                    </div>
                    <div className={styles.contents}>
                        <img src={slider02} alt="" />
                    </div>
                    <div className={styles.contents}>
                        <img src={slider03} alt="" />
                    </div>
                    <div className={styles.contents}>
                        <img src={slider04} alt="" />                        </div>
            </Slider>
        </div>
    );
}