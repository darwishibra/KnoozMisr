import styles from './Home.module.css';
import NavBar from '../components/NavBar';
import HeroHome from '../components/homeComponents/HeroHome';
import SingleImageSection from '../components/homeComponents/SingleImageSection';
import LinkedSection from '../components/homeComponents/LinkedSection';
import BoxSection from '../components/homeComponents/BoxSection';
import CTASection from '../components/homeComponents/CTASection';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className = {styles.home}>
      <NavBar position = "absolute" buttonColor = "#1E992F"/>
      <HeroHome />
      <SingleImageSection />
      <LinkedSection />
      <BoxSection />
      <CTASection />
      <Footer />
    </div>
  )
}

