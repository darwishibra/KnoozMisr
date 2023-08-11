import styles from './Card.module.css';


export default function Card(props) {

  const image = props.image;
  const text = props.text;
  const radius = props.radius;
  const background = props.background;
  const shadow = props.shadow;
  const dates = props.dates;

  const mystyle = {
    borderRadius : radius,
    background : background,
    boxShadow : shadow,
  }
  return (
    <div className = {styles.card} style = {mystyle}>
        <div className = {styles.image}>
          <img src = {image} alt = "fruit" />
        </div>
        <div className = {styles.name} dangerouslySetInnerHTML={{ __html: text }}></div>
        <div className = {styles.season}>SEASON</div>
        <div className = {styles.dates}>{dates}</div>
    </div>
  )
}
