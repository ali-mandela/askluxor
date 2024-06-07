/* eslint-disable react/prop-types */
import styles from '../styles/header.module.css';
import LayoutContainer from './Layout';
import { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import { FaLocationPin } from 'react-icons/fa6';
import bg from '../assets/headerBg.jpg';
import bg1 from '../assets/dRs.jpg';
import bg2 from '../assets/react.svg';
import cv from '../assets/innerBG.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";



const Header = () => {
    const [currentLink, setCurrentLink] = useState('Home'); 
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        document.title = `${currentLink} | askLuxor`;
      }, [currentLink]);
    


    const handleSelectedLink = (item) => {
        setMobile(false);
        setCurrentLink(item);
    };

    
    const mobileToggle = () => {
        setMobile(prevMobile => !prevMobile);
      };


    const backgroundImages = {
        Home: bg,
        Agents: bg1,
        Property: bg2,
        About: bg1,
        Contact: bg2
    };

    const links = [
        { id: 0, name: "Home", path: "/" },
        { id: 1, name: "Agents", path: "/agents" },
        { id: 2, name: "Property", path: "/property" },
        { id: 3, name: "About", path: "/about" },
        { id: 4, name: "Contact", path: "/contact" },
        {
            id:5, name:"Agents Portal",path: "/agent/login"
        }
    ];

    const data = {
        Home: {
            price: 1_570_000,
            header: "Beautiful House In Australia",
            location: {
                icon: <FaLocationPin />,
                text: "156/10 Sapling Street, Harrison, ACT 2914"
            },
            details: [
                { icon: <FaLocationPin />, text: "4 Bedrooms" },
                { icon: <FaLocationPin />, text: "Parking" },
                { icon: <FaLocationPin />, text: "Wifi included" }
            ],
            button: { name: "Learn More", path: "/" }
        },
        Agents: { title: "Our Agents", text: "Lorem ipsum dolor sit amet..." },
        Property: { title: "Our Properties", text: "Lorem ipsum dolor sit amet..." },
        About: { title: "About Us", text: "Lorem ipsum dolor sit amet..." },
        Contact: { title: "Get In Touch", text: "Lorem ipsum dolor sit amet..." }
    };

    return (
        <div style={{
            backgroundImage: `url(${cv})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            opacity:'1'
        }}>
        <div
            style={{
                backgroundImage: `url(${backgroundImages[currentLink]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '90vh',
                width: '100%'
            }}
            className={styles.headerContainer}
        >
            <LayoutContainer>
                <div className={styles.navBar}>
                    <h2 onClick={()=>{
                        setCurrentLink('Home')
                    }}><Link to='/'>askluxor</Link></h2>
                    <ul>
                        {links.map(item => (
                            <li
                                key={item.id}
                                onClick={() => handleSelectedLink(item.name)}
                                
                            >
                               <Link className={currentLink === item.name ? styles.activeLink : ''} to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.mobile}>
        {mobile ?  <IoClose onClick={mobileToggle} /> :<GiHamburgerMenu onClick={mobileToggle}/> }
        <div
          className={styles.mobileMenu}
          style={{
            right: mobile ? '-20px' : '-1000px',
          }}
        > 
          <ul>
          {links.map(item => (
                            <li
                                key={item.id}
                                onClick={() => handleSelectedLink(item.name)}
                                
                            >
                               <Link className={currentLink === item.name ? styles.activeLL : ''} to={item.path}>{item.name}</Link>
                            </li>
                        ))}
          </ul>
        </div>
      </div>
                </div>
                <div className={styles.bodyContainer}>
                    <div className={styles.bodyContent}>
                        <h2 className={styles.title}>{data[currentLink]?.title}</h2>
                        <p className={styles.text}>{data[currentLink]?.text}</p>
                        <p className={styles.price}>{data[currentLink]?.price ? `$${data[currentLink]?.price}` : ''}</p>
                        <h2 className={styles.header}>{data[currentLink]?.header}</h2>
                        <p className={styles.location}>{data[currentLink]?.location?.icon} {data[currentLink]?.location?.text}</p>
                        <div className={styles.details}>
                            {data[currentLink]?.details?.map((detail, index) => (
                                <p key={index}>{detail.icon} {detail.text}</p>
                            ))}
                        </div>
                    <p>
                    {data[currentLink]?.price ? (
    <Link to={data[currentLink]?.button?.path} className={styles.button}>{data[currentLink]?.button?.name}</Link>
) : null}
                    </p>

                       </div>
                </div>
            </LayoutContainer>
        </div></div>
    );
};

export default Header;
