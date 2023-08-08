import styles from './Button.module.css';




export default function Button(props) {
    const text = props.text;
    const border = props.border;
    const backgroundColor = props.backgroundColor;

    const mystyle = { 
        border : border,
        backgroundColor : backgroundColor,


    }
    return (
        <button className = {styles.button} style = {mystyle} >{text}</button>
    )
}
