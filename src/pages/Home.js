import styles from './Home.module.css';
import NavBar from '../components/NavBar';
import HeroHome from '../components/HeroHome';
import SingleImageSection from '../components/SingleImageSection';
import LinkedSection from '../components/LinkedSection';
import BoxSection from '../components/BoxSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className = {styles.home}>
      <NavBar position = "absolute"/>
      <HeroHome />
      <SingleImageSection />
      <LinkedSection />
      <BoxSection />
      <CTASection />
      <Footer />
    </div>
  )
}

