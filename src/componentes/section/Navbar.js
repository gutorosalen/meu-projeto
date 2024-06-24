import styles from './Navbar.module.css'
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>Apresentação</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </ul>
            <ul>
                <li><BsInstagram size="35px" /></li>
                <li><BsGithub size="35px" /></li>
                <li><BsLinkedin size="35px" /></li>
            </ul>
        </div>
    )
}
export default Navbar