
import {reviews} from '../../data';
import style from '../../styles/user/Testimonals.module.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Autoplay} from 'swiper/modules';
import LayoutContainer from '../../components/Layout';
import TestimonialComponent from '../../components/user/TestimonialComponent';

const TestimonialSection = () => {
    return (
        <LayoutContainer bgColor={'#91B029'}>
            <section className={style.TestimonialContainer}>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 40
                    },
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                }}
                    loop={true}
                    pagination={{
                    clickable: true
                }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper">
                    {reviews.map((item, i) => <SwiperSlide key={i}>
                        <TestimonialComponent item={item}/>
                    </SwiperSlide>)
}
                </Swiper>

            </section>
        </LayoutContainer>
    )
}

export default TestimonialSection
