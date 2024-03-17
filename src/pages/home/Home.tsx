/* eslint-disable import/no-unresolved */
import { QR_form, booth, grass_left, grass_right, slider } from 'src/assets/images'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import styles from './home.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export interface HomeProps {}

export default function Home() {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.booth_wrapper}>
        <div className={styles.booth}>
          <div className={styles.booth_body}>
            <img src={grass_left} alt='grass-left' />
            <img src={booth} alt='booth' />
            <img src={grass_right} alt='grass-right' />
          </div>
        </div>
        <div className={styles.QR_container}>
          <div className={styles.QR}>
            <h3>Quét mã QR ở đây này!</h3>
            <img src={QR_form} alt='QR-form' />
          </div>
        </div>
      </div>
      <div className={styles.slider_wrapper}>
        <div className={styles.slider_container}>
          <Swiper
            speed={1800}
            spaceBetween={30}
            style={{ width: '100%' }}
            slidesPerView={5}
            autoplay={{
              reverseDirection: true,
              delay: 0
            }}
            modules={[Autoplay]}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              480: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 4
              },
              992: {
                slidesPerView: 5
              },
              1280: {
                slidesPerView: 6
              }
            }}
          >
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className={styles.slider_container}
          style={{
            transform: 'translateX(-80px)'
          }}
        >
          <Swiper
            speed={1800}
            spaceBetween={30}
            style={{ width: '100%' }}
            slidesPerView={5}
            autoplay={{
              delay: 0
            }}
            modules={[Autoplay]}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              480: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 4
              },
              992: {
                slidesPerView: 5
              },
              1280: {
                slidesPerView: 6
              }
            }}
          >
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} className={styles.img_slider} alt='slide1' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
