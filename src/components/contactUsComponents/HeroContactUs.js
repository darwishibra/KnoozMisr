import styles from './HeroContactUs.module.css';

export default function HeroContactUs() {
  return (
    <div className = {styles.heroContactUs}>
        <div className = {styles.container}>
            <div className = {styles.heading}>
                CONTACT US
            </div>
            <div className = {styles.subheading}>
                Want to get in touch? We'd love to hear from you. Here's how you can reach us...
            </div>
        </div>
    </div>
  )
}