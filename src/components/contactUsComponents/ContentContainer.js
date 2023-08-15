import styles from './ContentContainer.module.css';
import ReachUsSection from './ReachUsSection';
import SendMessageSection from './SendMessageSection';

export default function ContentContainer() {
  return (
    <div className = {styles.contentContainer}>
        <div className = {styles.sendMessage}>
            <SendMessageSection />
        </div>
        <div className = {styles.reachUs} >
            <ReachUsSection />
        </div>
    </div>
  )
}