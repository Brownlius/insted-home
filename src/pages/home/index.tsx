import style from './home.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper';


export default function Home() {

    return (
        <main className={style.main} >
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
                        <img src={require('../../assets/informativo_3.png')} alt="123" />
                    </SwiperSlide>
                    <SwiperSlide className={style.container_avisos__avisos} >
                        <img src={require('../../assets/informativo_2.png')} alt="123" />
                    </SwiperSlide>
                </Swiper>
            </main>
    )
}