import { useInView } from "react-intersection-observer";
import styles from "../css/FadeInContent.module.css";

export const FadeInContent = ({children,
    rootMargin = "100px",
    triggerOnce = false,
    className,
    style}) => {

    const { ref, inView } = useInView({
        rootMargin: rootMargin,
        triggerOnce: triggerOnce
      });

    return (
            <div ref={ref} className={className} style={style}>
                <div className={inView ? `${styles.isfadein}` : `${styles.container}`}>{children}</div>
            </div>
    )
}