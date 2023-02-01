import style from './home.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'

export default function Home() {

    return (
        <body className={style.body}>
            <header className={style.header}>
                <div className={style.header__logo}>
                    <Logo />
                </div>
                <nav className={style.header__nav}>
                    <ul>
                        <li>Principal</li>
                        <li>INSTED</li>
                        <li>Graduação</li>
                        <li>EAD</li>
                        <li>Pós Graduação</li>
                        <li>Outros cursos</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </header>
            <main className={style.main} >
                <div className={style.quick_avisos}>
                    TESTE
                </div>
                <div className={style.container_avisos}>
                    <div className={style.container_avisos__firstContainer} >
                        <div className={style.container_avisos__firstContainer__avisos} >
                            <img src={require('../../assets/informativo_1.png')} alt="123" />
                        </div>
                    </div>
                    <div className={style.container_avisos__secondContainer} >
                        <div className={style.container_avisos__secondContainer__avisos} >

                        <img src={require('../../assets/informativo_2.png')} alt="123" />
                        </div>
                    </div>
                </div>
            </main>
        </body >
    )
}