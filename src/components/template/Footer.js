import React from 'react'
import styles from '../styles/Footer.module.scss'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>
                Desenvolvido por <strong>A<span className="text-danger">di</span>mar</strong>
            </p>
        </footer>
    );
}
