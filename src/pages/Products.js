import NavBar from '../components/NavBar';
import HeroProducts from '../components/productsComponents/HeroProducts';
import styles from './Products.module.css';
import ProductCards from '../components/productsComponents/ProductCards';
import Footer from '../components/Footer';


export default function Products() {
  return (
    <div className = {styles.Products}>
        <NavBar />
        <HeroProducts />
        <ProductCards />
        <Footer />
    </div>
  )
}
