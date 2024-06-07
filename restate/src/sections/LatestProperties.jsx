import LayoutContainer from '../components/Layout';
import styles from '../styles/section.module.css';
//
// core version + navigation, pagination modules:
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Pagination} from 'swiper/modules';
import PropertyComponent from '../components/PropertyComponent';
//
const LatestProperties = () => {
    return (
        <LayoutContainer bgColor={"#000"}>
            <div className={styles.propertiesContent}>
                <h2>LATEST PROPERTIES</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rem sit
                    dolorem saepe ex voluptatum nam nulla et!</p>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true
                }}
                breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
                    modules={[Pagination]}
                    className="mySwiper">
                    <SwiperSlide><PropertyComponent/></SwiperSlide>
                    <SwiperSlide><PropertyComponent/></SwiperSlide>
                    <SwiperSlide><PropertyComponent/></SwiperSlide>
                    <SwiperSlide><PropertyComponent/></SwiperSlide>
                    <SwiperSlide><PropertyComponent/></SwiperSlide>
                    <SwiperSlide><PropertyComponent/></SwiperSlide> 
                </Swiper>
            </div>
        </LayoutContainer>
    )
}



export default LatestProperties
