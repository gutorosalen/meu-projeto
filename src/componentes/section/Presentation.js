import styles from './Presentation.module.css'
import ButtonA from './ButtonA'
/*import ButtonB from './ButtonB'*/

function Presentation() {
    return (
        <div className={styles.presentation} id='Presentation'>
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou Gustavo</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.<br />
                Como Product Manager, eu tenho o compromisso de resolver problemas<br />
                complexos e trazer resultados excepcionais para os negócios.<br />
                Meus projetos já geraram milhões de reais em receita anual<br />
                estou sempre em busca de novos desafios para superar.<br />
            </p>
            <ButtonA link='https://github.com/gutorosalen' text='Conecte-se comigo!! ' />
        </div>
    )
}
export default Presentation