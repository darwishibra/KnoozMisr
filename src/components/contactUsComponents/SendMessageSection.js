import styles from './SendMessageSection.module.css';

export default function SendMessageSection() {
  return (
    <div className = {styles.sendMessageSection}>
      <div className = {styles.heading}>
        SEND US A MESSAGE
      </div>
      <form className = {styles.form}>
        <label for = "name" className = {styles.label}>Your Name :</label><br />
        <input className = {styles.input} type = "text" id = "name" name = "name" required /> <br/>

        <label for = "email" className = {styles.label}>Your Email :</label> <br />
        <input className = {styles.input} type = "text" id = "email" name = "email" required /> <br/>

        <label for = "message" className = {styles.label}>Message :</label> <br />
        <textarea className = {styles.textarea} id = "message" name = "message" rows = "6"></textarea> <br/>


        <input type = "submit" value = "Submit" className = {styles.submit} />
      </form>
    </div>
  )
}