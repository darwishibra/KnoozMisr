import styles from './ContactUs.module.css';
import HeroContactUs from '../components/contactUsComponents/HeroContactUs';
import NavBar from '../components/NavBar';
import ContentContainer from '../components/contactUsComponents/ContentContainer';
import Footer from '../components/Footer';


export default function ContactUs() {
  return (
    <div className = {styles.contactUs}>
        <NavBar />
        <HeroContactUs />
        <ContentContainer />
        <Footer />
    </div>
  )
}