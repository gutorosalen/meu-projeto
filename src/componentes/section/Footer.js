import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import styles from './Footer.module.css'
function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <ul>
                    <li><a href='https://www.instagram.com/gustavorosalen/'><BsInstagram size="35px" /></a></li>
                    <li><a href='https://github.com/gutorosalen'><BsGithub size="35px" /></a></li>
                    <li><a href='https://www.linkedin.com/in/gustavorosalen/'><BsLinkedin size="35px" /></a></li>
                </ul>
            </div>
            <div>
                <p>gustavorosalen@hotmail.com</p>
                <p>Gustavo Rosalen © 2024</p>
            </div>
        </div>
    )
}
export default Footer