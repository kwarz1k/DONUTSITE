import { useState } from 'react'
import { Photo } from "../src/Photo"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import classes from "./App.module.scss"
import { EffectCube} from 'swiper/modules';
import P1_sec1 from './Page1/P1_sec1'
import P1_sec2 from './Page1/P1_sec2'
import P1_sec3 from './Page1/P1_sec3'
function App() {
  const [cubeTransitioning, setCubeTransitioning] = useState(false)
  return (
    <>
    <Swiper 
        effect={'cube'}
        direction='vertical'
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube]}
        onSlideChangeTransitionStart={() => setCubeTransitioning(true)}
        onSlideChangeTransitionEnd={() => setCubeTransitioning(false)}
        className={`${classes.outerSwiper} ${cubeTransitioning ? classes.cubeTransitioning : ''}`}
      >
        <SwiperSlide>
          <section className={classes.First}>
            <header>
              <nav>
                <div className={classes.zxc}>
                  <h1>Bakery</h1>
                  <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Blog</a></li>
                  </ul>
                  <div className={classes.goyda}>
                    <p>Login/Register</p>
                    <img src={Photo.MAN}></img>
                  </div>
                </div>
              </nav>
            </header>
            <div className={classes.XXXTENTACION}>
              <div className={classes.TRUELOVE}>
                <div className={classes.DonToliver}>
                  <h1>Sweet moments, freshly baked with love</h1>
                  <p>Customized cakes, treats and every thing sweet for all your special moments.</p>
                  <button className={classes.Cover}>Shop Now</button>
                  <div className={classes.Marcus}>
                    <img src={Photo.socialmedia}></img>
                  </div>
                </div>
                <img className={classes.donut} src={Photo.donut}></img>
              </div>
              <img className={classes.strelka} src={Photo.strelka}></img>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={classes.Second}>
            <div className={classes.DuaLipa}>
              <div className={classes.TomFord}>
                <p>See Collection</p>
                <h1>OUR FINE HOME MADE CHOCOLATES</h1>
              </div>
              <div className={classes.Versaci}>
                <img src={Photo.Pzeki}></img>
                <div className={classes.text}>
                  <p>There are some redeming factors in greeking text</p>
                  <p>There are some redeming factors in greeking text</p>
                  <p>There are some redeming factors in greeking text</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <P1_sec1/>
        </SwiperSlide>
        <SwiperSlide>
          <P1_sec2/>
        </SwiperSlide>
        <SwiperSlide>
          <P1_sec3/>
        </SwiperSlide>
        <SwiperSlide>
          <footer>
            <div className={classes.centr}>
              <div className={classes.left}>

              </div>
              <div className={classes.right}>
                
              </div>
            </div>
          </footer>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default App
