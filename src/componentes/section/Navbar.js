import styles from './Navbar.module.css'
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <div>
            <div className={styles.navbar}>
                <ul>
                    <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                    <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                    <li><Nav.Link href='#Project'>Projetos</Nav.Link></li>
                </ul>
                <div className={styles.icon}>
                    <ul >
                        <li><a href='https://www.instagram.com/gustavorosalen/'><BsInstagram size="35px" /></a></li>
                        <li><a href='https://github.com/gutorosalen'><BsGithub size="35px" /></a></li>
                        <li><a href='https://www.linkedin.com/in/gustavorosalen/'><BsLinkedin size="35px" /></a></li>
                    </ul>
                </div>
                <div className={styles.icon2}>
                    <ul>
                        <li><a href='https://www.instagram.com/gustavorosalen/'><BsInstagram size="12px" /></a></li>
                        <li><a href='https://github.com/gutorosalen'><BsGithub size="12px" /></a></li>
                        <li><a href='https://www.linkedin.com/in/gustavorosalen/'><BsLinkedin size="12px" /></a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Navbar