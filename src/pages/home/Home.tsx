/* eslint-disable import/no-unresolved */
import { QR_form, booth, grass_left, grass_right, slider } from 'src/assets/images'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import styles from './home.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useEffect } from 'react'

export interface HomeProps {}

export default function Home() {
  useEffect(() => {
    document.body.style.height = 'auto'
  }, [])
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.booth_wrapper}>
        <div className={styles.booth}>
          <img src={grass_left} alt='grass-left' />
          <img src={booth} alt='booth' />
          <img src={grass_right} alt='grass-right' />
        </div>
        <div className={styles.QR}>
          <h3>Quét mã QR ở đây này!</h3>
          <img src={QR_form} alt='QR-form' />
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
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 3
              },
              1280: {
                slidesPerView: 5
              }
            }}
          >
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className={styles.slider_container}
          style={{
            transform: 'translateX(-100px)'
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
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 3
              },
              1280: {
                slidesPerView: 5
              }
            }}
          >
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt='slide1' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
