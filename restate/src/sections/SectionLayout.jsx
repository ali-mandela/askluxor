/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from '../styles/user/contact.module.css';

const SectionLayout = ({
    children,
    isHr=true,
    title = "",
    content = "",
    style = {
        color: "black",
        backgroundColor: "transparent", 
    }
}) => {

    const {backgroundColor, color,} = style;

    return (
        <section
            style={{
            backgroundColor,
            color
        }}
            className={styles.sectionLayout}>
            <div className={styles.heading}>
            {isHr && <hr
                        style={{
                        border: "2px solid #91B029",
                        width: "90px",
                        display: "block",
                        margin: "auto"
                    }}/>}
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}

export default SectionLayout