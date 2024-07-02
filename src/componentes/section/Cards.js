import styles from './Cards.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react'
function Cards({ img, title, tech, description, repo, site }) {

    const [info, setInfo] = useState(false)

    function infoOn() {
        setInfo(true)
    }
    function infoOff() {
        setInfo(false)
    }

    return (
        <div onMouseLeave={infoOff} className={styles.cards} >
            <a onMouseEnter={infoOn} href={site}>
                <img src={img} alt='ERRO' />
            </a>

            {info === true && (
                <section>
                    <h3>{title}</h3>
                    <p>Tecnologias:{tech}</p>
                    <p>{description}</p>
                    <ButtonB text="Acesse o Repositório" link={repo} />
                </section>
            )}
        </div>
    )
}
export default Cards