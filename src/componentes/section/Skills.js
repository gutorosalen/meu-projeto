import styles from './Skills.module.css'
import js from '../../image/js.svg'
import css from '../../image/css.svg'
import html from '../../image/html.svg'
import react from '../../image/react.svg'
import ts from '../../image/ts.svg'
import api from '../../image/api.svg'
import excel from '../../image/excel.svg'
import json from '../../image/json.svg'
import linux from '../../image/linux.svg'
import word from '../../image/word.svg'
import pp from '../../image/pp.svg'
import pdca from '../../image/pdca.svg'

function Skills() {
    return (
        <div className={styles.skills} id='Skills'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={js}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
                <img src={ts}></img>
                <img src={api}></img>
            </div>
            <div>
                <img src={excel}></img>
                <img src={word}></img>
                <img src={pp}></img>
                <img src={pdca}></img>
                <img src={linux}></img>
                <img src={json}></img>
            </div>
        </div>

    )
}
export default Skills