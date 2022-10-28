import { FaChild, FaHandPointRight, FaPaperPlane, FaStreetView,FaBolt } from "react-icons/fa";
import styles from "../css/Navigation.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Navigation = () => {
    return (
        <div className={styles.container}>
           <AnchorLink href="#about">
            <p className={styles.nav_logo}>
               <FaChild 
               size={35}
               color={'#333333'}
               />
               about
            </p>
            </AnchorLink>
            
            <AnchorLink href="#course">
               <p className={styles.nav_logo}>
                  <FaHandPointRight
                  size={35}
                  color={'#333333'}
                  />
                  course
               </p>
            </AnchorLink>

            <AnchorLink href="#news">
               <p className={styles.nav_logo}>
                  <FaPaperPlane
                  size={35}
                  color={'#333333'}
                  />
                  news
               </p>
            </AnchorLink>

            <AnchorLink href="#access">
               <p className={styles.nav_logo}>
                  <FaStreetView
                  size={35}
                  color={'#333333'}
                  />
                  access
               </p>
            </AnchorLink>

            <AnchorLink href="#contact">
               <p className={styles.nav_logo}>
                  <FaBolt
                  size={35}
                  color={'#333333'}
                  />
                  contact
               </p>
            </AnchorLink>
        </div>
    )
}