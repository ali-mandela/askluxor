/* eslint-disable react/prop-types */
import style from '../styles/layout.module.css'

const LayoutContainer = ({
    children,
    bgColor = 'transparent'
}) => {
    return (
        <div
            style={{
            backgroundColor: bgColor
        }}
            className={style.layoutContainer}>{children}</div>
    )
}

export default LayoutContainer