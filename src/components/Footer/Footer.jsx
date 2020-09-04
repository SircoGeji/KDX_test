import React from 'react';
import styles from './Footer.module.css'

const Footer = (props) => {
    return <div className={styles.footer}>
        <div className={styles.footer_text}>
            <div>
                ⓒ 2020 CAPTAIN QUACK
            </div>
            <div>
                Десница тысячелетия и моллюск!
            </div>
        </div>
    </div>
}

export default Footer