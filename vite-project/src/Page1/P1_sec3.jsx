import classes from '../Page1/P1_secc3.module.scss'
import { Photo } from "../Photo"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export default function App(){
    return(
        <>
            <section className={classes.Five}>
                <div className={classes.centr}>
                    <div className={classes.batareyka}>
                        <p>-------------------------------------------------------</p>
                        <h1>OUR NEW ARTICLES</h1>
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
                            <div className={classes.Beer}>
                                <div className={classes.FollowMe}>
                                    <p>23 MAR</p>
                                </div>
                                <h1>How to make perfect cakes at home</h1>
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