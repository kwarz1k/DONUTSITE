import classes from '../Page1/P1_secc3.module.scss'
import { Photo } from "../Photo"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export default function App(){
    return(
        <>
            <section className={classes.Six}>
                <div className={classes.centr}>
                    <div className={classes.batareyka}>
                        <p>-------------------------------------------------------</p>
                        <h1>OUR CUSTOMERS</h1>
                        <p>------------------------------------------------------</p>
                    </div>
                    <div className={classes.GIfk}>
                    <Swiper
                    nested={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className={classes.mySwiper}
                    >
                    <SwiperSlide className={classes.mySlide}>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx1}>
                            <div className={classes.GTA6}>
                                <img src={Photo.bad}></img>
                                <div className={classes.Kylian1}>
                                    <h1>Bianka P.</h1>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx1}>
                            <div className={classes.GTA6}>
                                <img src={Photo.boys}></img>
                                <div className={classes.Kylian1}>
                                    <h1>Jakub S.</h1>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={classes.mySlide}>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx1}>
                            <div className={classes.GTA6}>
                                <img src={Photo.bad}></img>
                                <div className={classes.Kylian1}>
                                    <h1>Bianka P.</h1>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx1}>
                            <div className={classes.GTA6}>
                                <img src={Photo.boys}></img>
                                <div className={classes.Kylian1}>
                                    <h1>Jakub S.</h1>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={classes.mySlide}>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx1}>
                            <div className={classes.GTA6}>
                                <img src={Photo.bad}></img>
                                <div className={classes.Kylian1}>
                                    <h1>Bianka P.</h1>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx1}>
                            <div className={classes.GTA6}>
                                <img src={Photo.boys}></img>
                                <div className={classes.Kylian1}>
                                    <h1>Jakub S.</h1>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}