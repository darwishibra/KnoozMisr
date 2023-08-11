import styles from './Button.module.css';




export default function Button(props) {
    const text = props.text;
    const border = props.border;
    const backgroundColor = props.backgroundColor;
    const margin = props.margin;

    const mystyle = { 
        border : border,
        backgroundColor : backgroundColor,
        margin : margin


    }
    return (
        <button className = {styles.button} style = {mystyle} >{text}</button>
    )
}
