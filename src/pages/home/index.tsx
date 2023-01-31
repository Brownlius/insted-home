import style from './home.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'

export default function Home() {
    const url = '../../assets/informativo_1.png';

    return (
        <>
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
                <div className={style.firstContainer} >
                    <div className={style.firstContainer__avisos} >
                        <img src={require('../../assets/informativo_1.png')}  alt="123"/>
                    </div>
                </div>
                <div className={style.secondContainer} >
                    <div className={style.secondContainer__avisos} >

                    </div>
                </div>
            </main>
        </>
    )
}