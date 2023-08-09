import styles from './Home.module.css';
import NavBar from '../components/NavBar';
import HeroHome from '../components/HeroHome';
import SingleImageSection from '../components/SingleImageSection';


export default function Home() {
  return (
    <div className = {styles.home}>
      <NavBar position = "absolute"/>
      <HeroHome />
      <SingleImageSection />
      
    </div>
  )
}

