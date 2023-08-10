import styles from './Footer.module.css';
import footerLogo from './images/footerLogo.png';
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className= {styles.container}>
            <div className = {styles.logoAndSocial}>
                <div className={styles.logo}>
                    <div className = {styles.logoImage}>
                        <img src = {footerLogo} alt = "footer logo"/>
                    </div>
                    <div className = {styles.logoText}><span className = {styles.bold}>KNOOZ</span>MISR</div>
                </div>
                
                <div className = {styles.socials}>
                    <div className={styles.socialLink}><FaInstagram size = {50}/></div>
                    <div className={styles.socialLink}><FaWhatsapp size = {50}/></div>
                    <div className={styles.socialLink}><FaFacebook size = {50}/></div>
                    <div className={styles.socialLink}><FaTwitter size = {50}/></div>
                </div>
            </div>
            <div className={styles.contactList}>
                <div className={styles.contactHeading}>Contact</div>
                <div className = {styles.contact}>Phone Number : +2 0100 355 4446</div>
                <div className = {styles.contact}>Address : 139 Mostafa El-Nahhas Nasr City - Cairo</div>
                <div className = {styles.contact}>Email : m.tabana@kmma.com.eg</div>
            </div>
            <div className = {styles.siteLinks}>
                <div className = {styles.siteLinksHeading}>Site Links</div>
                <div className = {styles.link}>Home</div>
                <div className = {styles.link}>Products</div>
                <div className = {styles.link}>Our Service</div>
                <div className = {styles.link}>Contact Us</div>
            </div>
        </div>
    </div>
  )
}
