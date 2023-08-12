import styles from './HeroOurService.module.css';


export default function HeroOurService() {
  return (
    <div className = {styles.heroOurService}>
        <div className = {styles.container}>
 
            <div className = {styles.heading}>
                OUR <div>SERVICE</div>
            </div>

            <div className = {styles.subheading}>
                Showcasing a varied range of fruits and vegetables, carefully monitored by our production team for exceptional flavor and maximum nutritional value.
            </div>

        </div>
    </div>
  )
}