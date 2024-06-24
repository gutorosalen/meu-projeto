import styles from './Navbar.module.css'
function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>Apresentação</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </ul>
            <ul>
                <li>Instagram</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </ul>
        </div>
    )
}
export default Navbar