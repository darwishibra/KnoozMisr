import styles from './NavBar.module.css';
import logo from '../images/Logo.png';
import Button from './Button.js';


export default function NavBar(props) {

    const position = props.position;
    
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
                <div className = {styles.link}>Home</div>
                <div className = {styles.link}>Products</div>
                <div className = {styles.link}>Our Service</div>
            </div>
            <div className='button'>
                <Button text = "Contact us" backgroundColor = "#1E992F" />
            </div>
        </div>
    )
}