import LayoutContainer from '../components/Layout';
import style from '../styles/Footer.module.css';
import { RiArrowRightSLine } from "react-icons/ri";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const links = [
    { id: 0, name: "About us", path: "/about" },
    { id: 1, name: "Agent portal", path: "/agent/register" },
    { id: 2, name: "Terms of service", path: "/terms" },
    { id: 3, name: "Privacy", path: "/privacy" },
    { id: 4, name: "Contact us", path: "/contact" }
];

const socialMediaLinks = [
    { id: 1, name: "Instagram", link: "https://www.instagram.com", icon: <FaInstagram /> },
    { id: 2, name: "YouTube", link: "https://www.youtube.com", icon: <FaYoutube /> },
    { id: 3, name: "Facebook", link: "https://www.facebook.com", icon: <FaFacebookSquare /> },
    { id: 4, name: "LinkedIn", link: "https://www.linkedin.com", icon: <FaLinkedin /> }
];

const FooterSection = () => {
    const date = new Date();

    return (
        <LayoutContainer bgColor='#000'>
            <section className={style.footerContainer}>
                <div className={style.footerTop}>
                    <div>
                        <h4 className={style.footerTitle}>About</h4>
                        <p>
                            Testimonials, Terms of Service, Privacy, Contact Us, About. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Ut dolores deserunt, obcaecati fuga quo.
                            Autem explicabo sapiente, maiores.
                        </p>
                    </div>
                    <div>
                        <h4 className={style.footerTitle}>Subscribe</h4>
                        <ul>
                            {links.map((item) => (
                               <li key={item.id}>  <Link to={item.path} target="_blank" ><RiArrowRightSLine /> {item.name} </Link> </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className={style.footerTitle}>Social Media Links</h4>
                        <ul>
                            {socialMediaLinks.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.icon} {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr style={{ border: "1px solid rgb(67, 68, 67)" }} />
                <div className={style.footerBottom}>
                    <p>Copyright &copy; {date.getFullYear()} All rights reserved</p>
                </div>
            </section>
        </LayoutContainer>
    );
};

export default FooterSection;
