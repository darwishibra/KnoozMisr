import styles from './DeliverySection.module.css';
import image from '../images/Delivery.png';

export default function DeliverySection() {
  return (
    <div className = {styles.deliverySection}>

        <div className = {styles.container}>
            <div className = {styles.text}>
                <div className = {styles.title}>
                    LOGISTICS & <div>DELIVERY</div>
                </div>
                <div className = {styles.paragraph}>
                Thanks to our experienced logistics partners we deliver our customers goods in any part of the world in an efficient and timely manner, so we can give our customers the peace of mind to focus on their core business and let us do the rest of the job.
                </div>
                <div className = {styles.paragraph}>
                We use the latest packaging machine (from ishida) with all its kinds and sizes in accordance to our customers requests.
                </div>

            </div>
            <div className = {styles.imageContainer}>
                <img src = {image} alt = "delivery vehicules" className = {styles.image} />
            </div>
        </div>

    </div>
  )
}