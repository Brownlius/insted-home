import style from './home.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import '/node_modules/swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination } from 'swiper';


export default function Home() {

    return (
        <main className={style.main}>
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
            <div className={style.container_ultimos_avisos}>
                <h2 className={style.container_ultimos_avisos__titulo}>Últimas notícias</h2>
                <Swiper className={style.container_ultimos_avisos__avisos}
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={5}
                    autoplay={{ delay: 5000, disableOnInteraction: false, waitForTransition: true }}
                    speed={650}
                    slidesPerView={1}>
                    <SwiperSlide>
                        <p>Novo site Insted</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>Parangolé - 2009</p>
                    </SwiperSlide>
                </Swiper>
            </div>
            <section className={style.principal}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    className={style.container_avisos}
                    loop={true}
                    spaceBetween={5}
                    autoplay={{ delay: 6500, disableOnInteraction: false, waitForTransition: true }}
                    speed={600}
                    slidesPerView={1}
                >
                    <SwiperSlide className={style.container_avisos__avisos} >
                        <img src={require('../../assets/informativo_1.png')} alt="123" />
                    </SwiperSlide>
                    <SwiperSlide className={style.container_avisos__avisos} >
                        <img src={require('../../assets/informativo_3.png')} alt="123" />
                    </SwiperSlide>

                </Swiper>
                <section className={style.botoes} >
                    <div className={style.botoes__titulo}>
                        <img src={require('../../assets/botoes/titulo.png')} alt=" " />
                    </div>
                    <div className={style.botoes__container}>
                        <div className={style.botoes__container__dois}>
                            <img className={style.botoes__container__dois__img}
                                src={require('../../assets/botoes/diploma_botao.png')} alt=" " />

                            <img className={style.botoes__container__dois__img}
                                src={require('../../assets/botoes/redacao_botao.png')} alt=" " />
                        </div>
                        <div className={style.botoes__container__dois}>
                            <img className={style.botoes__container__dois__img}
                                src={require('../../assets/botoes/transferencia_botao.png')} alt=" " />

                            <img className={style.botoes__container__dois__img}
                                src={require('../../assets/botoes/enem_botao.png')} alt=" " />
                        </div>
                    </div>
                </section>
            </section>
            <section className={style.nossos_cursos}>
                <h2 className={style.nossos_cursos__titulo}>
                    Conheça nossos cursos
                </h2>
                <p className={style.nossos_cursos__texto}>
                    Quem busca destaque no mercado empresarial público e privado, quer ser Insted.
                </p>
                <p className={style.nossos_cursos__texto}>
                    Aprenda a desenvolver todas as competências por meio de ferramentas e técnicas direcionadas.
                </p>
            </section>
        </main >
    )
}