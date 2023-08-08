import styles from './Home.module.css';
import NavBar from '../components/NavBar';
import HeroHome from '../components/HeroHome'


export default function Home() {
  return (
    <div className = {styles.home}>
      <NavBar position = "absolute"/>
      <HeroHome />
    </div>
  )
}

