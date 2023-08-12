import NavBar from '../components/NavBar';
import styles from './OurService.module.css';
import HeroOurService from '../components/ourServiceComponents/HeroOurService';
import QualitySection from '../components/ourServiceComponents/QualitySection';
import DeliverySection from '../components/ourServiceComponents/DeliverySection';
import ExportSection from '../components/ourServiceComponents/ExportSection';
import Footer from '../components/Footer';

export default function OurService() {
  return (
    <div className = {styles.ourService}>
        <NavBar position = "relative" buttonColor = "#ffffff" />
        <HeroOurService />
        <QualitySection />
        <DeliverySection />
        <ExportSection />
        <Footer />
    </div>
  )
}