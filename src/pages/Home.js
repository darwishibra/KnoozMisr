import styles from './Home.module.css';
import NavBar from '../components/NavBar';


export default function Home() {
  return (
    <div className = {styles.home}>
      <NavBar position = "absolute"/>
    </div>
  )
}

