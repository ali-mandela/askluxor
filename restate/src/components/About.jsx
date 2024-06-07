/* eslint-disable react/prop-types */
import styles from '../styles/component.module.css'
import LayoutContainer from './Layout'
import { SiTransmission } from "react-icons/si";


const AboutIcon=({ icon: Icon,name,body})=>{
    return(<>
     <div className={styles.icon}>
     <Icon />
   <div>
   <h4>{name}</h4>
    <p>{body}</p>
   </div>
     </div>
    </>)
}

const AboutInsideIcon=({icon: Icon,name,name2})=>{
    return(<div className={styles.aboutInside}>
    <Icon/>
    <p className={styles.name}>{name}</p>
    <p>{name2}</p>
    </div>)
}

const About = () => {
    return (
        <LayoutContainer>
            <div className={styles.aboutContainer}>
                <div className={styles.leftAbout}>
        <h1>About us</h1>
        <p>Perspiciatis quidem harum provident repellat sint.</p>
        <div>
            <AboutIcon  icon={SiTransmission} name={"Mission"} body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rem sit dolorem saepe ex voluptatum nam nulla et!"}/>
            <AboutIcon  icon={SiTransmission} name={"Mission"} body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rem sit dolorem saepe ex voluptatum nam nulla et!"}/>
        </div>
                </div>
                <div className={styles.rightAbout}>
            <AboutInsideIcon  icon={SiTransmission} name={"ESTATE INSURANCE"} name2={"Estate Management"}/>
            <AboutInsideIcon  icon={SiTransmission} name={"ELEGANT BATHTUB"} name2={"Estate Management"}/>
            <AboutInsideIcon  icon={SiTransmission} name={"FRESH AIR"} name2={"Estate Management"}/>
            <AboutInsideIcon  icon={SiTransmission} name={"ESTATE CALCULATOR"} name2={"Estate Management"}/>
                </div>
            </div>
        </LayoutContainer>
    )
}

export default About