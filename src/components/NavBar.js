import styles from './NavBar.module.css';
import logo from './images/Logo.png';
import Button from './Button.js';
import { Link } from 'react-router-dom';


export default function NavBar(props) {

    const position = props.position;
    const buttonColor = props.buttonColor;
    
    const myStyle = {
        position : position,

    }

    return (
        <div style = {myStyle} className = {styles.navbar}>
            <div className= {styles.links}>
                <div className = {styles.logoFrame}>
                    <img src = {logo} alt = 'Logo' />
                    <div className = {styles.bold}>KNOUZ</div><div className = {styles.light}>MISR</div>
                </div>
                <div className = {styles.line}></div>
                <Link to = "/" className = {styles.link}>
                    Home
                </Link>
                <Link to = "/products" className = {styles.link}>
                    Products
                </Link>
                <Link to = "/ourservice" className = {styles.link}>
                    Our Service
                </Link>
            </div>
            <div className='button'>
                <Button to = "/contactus" text = "Contact us" backgroundColor = {buttonColor} margin = "0px 40px" />
            </div>
        </div>
    )
}