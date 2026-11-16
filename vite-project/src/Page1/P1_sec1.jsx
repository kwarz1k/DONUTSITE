import classes from '../Page1/P1_secc1.module.scss'
import { Photo } from "../Photo"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export default function App(){
    return(
        <>
            <section className={classes.Third}>
                <div className={classes.centr}>
                    <div className={classes.batareyka}>
                        <p>-------------------------------------------------------</p>
                        <h1>OUR BEST SELLERS</h1>
                        <p>------------------------------------------------------</p>
                    </div>
                    <div className={classes.yall}>
                        <p>See All</p>
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
                        <div className={classes.LilNasx}>
                            <img src={Photo.cake1}></img>
                            <h1>3-tier red velvet cake</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className={classes.PostMalone}>
                                <p>45.90 €</p>
                                <button className={classes.knopka}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx}>
                            <img src={Photo.cake2}></img>
                            <h1>3-tier red velvet cake</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className={classes.PostMalone}>
                                <p>45.90 €</p>
                                <button className={classes.knopka}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx}>
                            <img src={Photo.cake3}></img>
                            <h1>3-tier red velvet cake</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className={classes.PostMalone}>
                                <p>45.90 €</p>
                                <button className={classes.knopka}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={classes.mySlide}>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx}>
                            <img src={Photo.cake1}></img>
                            <h1>3-tier red velvet cake</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className={classes.PostMalone}>
                                <p>45.90 €</p>
                                <button className={classes.knopka}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx}>
                            <img src={Photo.cake2}></img>
                            <h1>3-tier red velvet cake</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className={classes.PostMalone}>
                                <p>45.90 €</p>
                                <button className={classes.knopka}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx}>
                            <img src={Photo.cake3}></img>
                            <h1>3-tier red velvet cake</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className={classes.PostMalone}>
                                <p>45.90 €</p>
                                <button className={classes.knopka}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={classes.mySlide}>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx}>
                            <img src={Photo.cake1}></img>
                            <h1>3-tier red velvet cake</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className={classes.PostMalone}>
                                <p>45.90 €</p>
                                <button className={classes.knopka}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx}>
                            <img src={Photo.cake2}></img>
                            <h1>3-tier red velvet cake</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className={classes.PostMalone}>
                                <p>45.90 €</p>
                                <button className={classes.knopka}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.zxccx}>
                        <div className={classes.LilNasx}>
                            <img src={Photo.cake3}></img>
                            <h1>3-tier red velvet cake</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className={classes.PostMalone}>
                                <p>45.90 €</p>
                                <button className={classes.knopka}>Add to Cart</button>
                            </div>
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