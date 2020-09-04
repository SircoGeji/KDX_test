import React from 'react';
import header from '../images/DUCK 1.png';
import styles from './Header.module.css'

const Header = (props) => {
    return <div className={styles.header}>
        <img
            src={header}
            alt="header_img"
            className={styles.header_img}
        />
    </div>
}

export default Header