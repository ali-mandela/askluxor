/* eslint-disable react/prop-types */
import style from '../styles/layout.module.css';

const Container = ({children}) => {
  return (
    <section className={style.container}>
        {
            children
        }
    </section>
  )
}

export default Container