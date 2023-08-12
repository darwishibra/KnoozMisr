import NavBar from '../components/NavBar';
import styles from './OurService.module.css';
import HeroOurService from '../components/ourServiceComponents/HeroOurService';
import QualitySection from '../components/ourServiceComponents/QualitySection';

export default function OurService() {
  return (
    <div className = {styles.ourService}>
        <NavBar position = "relative" buttonColor = "#ffffff" />
        <HeroOurService />
        <QualitySection />
    </div>
  )
}