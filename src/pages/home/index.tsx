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
                <Swiper className={style.container_ultimos_avisos__avisos}>

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
                    autoplay={{ delay: 5000, disableOnInteraction: false, waitForTransition: true }}
                    speed={600}
                    slidesPerView={1}
                >
                    <SwiperSlide className={style.container_avisos__avisos} >
                        <img src={require('../../assets/informativo_1.png')} alt="123" />
                    </SwiperSlide>
                    <SwiperSlide className={style.container_avisos__avisos} >
                        <img src={require('../../assets/informativo_3.png')} alt="123" />
                    </SwiperSlide>
                    <SwiperSlide className={style.container_avisos__avisos} >
                        <img src={require('../../assets/informativo_2.png')} alt="123" />
                    </SwiperSlide>
                </Swiper>
                <section
                    className={style.container_avisos}
                   
                >
                    
                </section>
            </section>
        </main >
    )
}