import styles from './Button.module.css';
import { Link } from 'react-router-dom';



export default function Button(props) {
    const text = props.text;
    const border = props.border;
    const backgroundColor = props.backgroundColor;
    const margin = props.margin;
    const to = props.to;

    const mystyle = { 
        border : border,
        backgroundColor : backgroundColor,
        margin : margin


    }
    return (
        <Link to = {to}>
            <button className = {styles.button} style = {mystyle} >
                {text}
            </button>
        </Link>
    )
}
