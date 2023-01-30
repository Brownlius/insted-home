import style from './home.module.scss'

export default function Home() {
    return(
        <header className={style.header}>
            <div className={style.header__logo}>
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
        )
}