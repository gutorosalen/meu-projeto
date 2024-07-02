import styles from './Presentation.module.css'
import ButtonA from './ButtonA'
import { useEffect, useState } from 'react'
/*import ButtonB from './ButtonB'*/

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Gustavo Henrique Rosalen', 'Desenvolvedor Full-Stack', 'Auxiliar e Analista de dados'];
    const [loop, setLoop] = useState(0);
    const [IsDeleting, setIsDeleting] = useState(false);
    const period = [100];
    const [Delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, Delta)
        return () => { clearInterval(ticker) }

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updateText = IsDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText);

        if (!IsDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (IsDeleting && updateText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }

    }

    return (
        <div className={styles.presentation} id='Presentation'>
            <p><strong>Bem-vindo ao meu Portfólio.</strong></p>
            <h1>Olá, eu sou {text}.</h1>
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