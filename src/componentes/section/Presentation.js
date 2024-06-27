import styles from './Presentation.module.css'
import ButtonA from './ButtonA'
/*import ButtonB from './ButtonB'*/

function Presentation() {
    return (
        <div className={styles.presentation} id='Presentation'>
            <p><strong>Bem-vindo ao meu Portfólio.</strong></p>
            <h1>Olá, eu sou Gustavo.</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.<br />
                Como Auxiliar, Analista de T.I e Desenvolvedor full-stack, <br />
                eu tenho o compromisso de resolver problemas complexos <br />
                e trazer resultados excepcionais para os negócios.<br />
                Meus projetos são experiêcias que foi adquirindo ao longo<br />
                da jornada, estou sempre em busca de novos desafios.<br />
            </p>
            <ButtonA link='https://github.com/gutorosalen' text='Conecte-se comigo!! ' />
        </div>
    )
}
export default Presentation