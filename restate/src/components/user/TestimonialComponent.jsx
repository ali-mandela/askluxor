/* eslint-disable react/prop-types */
import style from '../../styles/user/Testimonals.module.css';
import { FaStar } from "react-icons/fa";
const TestimonialComponent = ({ item }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < item.star; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={i < rating ? style.filledStar : style.emptyStar}
                />
            );
        }
        return stars;
    };

    return (
        <div className={style.TestimonialComponent}>
            <img src={item.img} alt={item.name} className={style.image} />
            <div className={style.bodyContent}>
                <p className={style.profession}>{item.profession}</p>
                <p className={style.name}>{item.name}</p>
                <p className={style.review}>{item.review}</p>
                <div className={style.starsContainer}>
                    {renderStars(item.star)}
                </div>
            </div>
        </div>
    );
}

export default TestimonialComponent;