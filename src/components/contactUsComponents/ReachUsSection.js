import styles from './ReachUsSection.module.css';

export default function ReachUsSection() {
  return (
    <div className = {styles.reachUsSection}>
        <div className = {styles.heading}>
          REACH US
        </div>
        <div className  = {styles.text}>
          <span className = {styles.bold}>Phone Number : </span> +2 0100 355 4446
        </div>
        <div className  = {styles.text}>
          <span className = {styles.bold}>Email : </span> m.tabana@kmma.com.eg
        </div>
        <div className  = {styles.text}>
          <span className = {styles.bold}>Address : </span> 139 Mostafa El-Nahhas, Nasr City, Cairo
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3465449240907!2d31.352090758259887!3d30.055599553574954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d3cae5776d3%3A0xc1d1fdfa08083025!2z2YPZhtmI2LIg2YXYtdix!5e0!3m2!1sen!2sca!4v1692041513520!5m2!1sen!2sca" width="600" height="450" className = {styles.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}