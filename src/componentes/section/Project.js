import ButtonB from './ButtonB'
import styles from './Project.module.css'
import Cards from './Cards.js'
import arquitetura from '../../image/projects/arquitetura.png'
import CCXP from '../../image/projects/CCXP.png'
import Portifólio from '../../image/projects/Portifólio.png'
import Ptp from '../../image/projects/Previsão do tempo.png'
function Project() {
    return (
        <div class={styles.project} id="Project">
            <h1>Projetos</h1>
            <Cards img={arquitetura}
                title='Lade Paging Arquitetuta'
                tech=' HTML, CSS, JS'
                description='Projeto Front-End para realizar funcionalidade e responsividade'
                repo='https://github.com/gutorosalen/Desafio-front-end.git'
                site='https://d-1arquitetura.netlify.app/' />
            <Cards img={CCXP}
                title='Site da CCPX Ingressos'
                tech=' HTML, CSS, JS'
                description='Projeto Front-End para realizar funcionalidade e responsividade'
                repo='https://github.com/gutorosalen/Desafiolade.git'
                site='https://ladeccpx.netlify.app/' />
            <Cards img={Portifólio}
                title='Lade Paging Arquitetuta'
                tech=' HTML, CSS, JS, JSX, React'
                description='Projeto Front-End para realizar funcionalidade e responsividade'
                repo='https://github.com/gutorosalen/meu-projeto'
                site='https://d-1arquitetura.netlify.app/' />
            <Cards img={Ptp}
                title='Lade Paging Arquitetuta'
                tech='  HTML, CSS, JS, JSX, React, API, JSON'
                description='Projeto Front-End para realizar funcionalidade e responsividade'
                repo='https://github.com/gutorosalen/clima'
                site='https://desafioclima.netlify.app/' />
            <ButtonB link="https://github.com/gutorosalen?tab=repositories" text="Acesse meu reposítorio" />
        </div>
    )
}
export default Project