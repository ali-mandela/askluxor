
import LayoutContainer from '../../components/Layout';
import style from '../../styles/user/about.module.css';
import img from '../../assets/abt.webp';
import {Link} from 'react-router-dom';
const AboutSection = () => {
    return (
        <LayoutContainer>
            <div className={style.aboutSection}>
                <div>
                    <img src={img} alt='m'/>
                </div>
                <div className={style.dd}>
                    <h2>Real Estate Co.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint
                        consectetur nihil eius harum, recusandae? Quam, placeat, asperiores.

                    </p>
                    <Link to={'/contact'}>
                        Contact Us</Link>
                </div>
            </div>
        </LayoutContainer>
    )
}

export default AboutSection