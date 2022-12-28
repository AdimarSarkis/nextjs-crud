import Image from "next/image";
import React from "react"
import styles from '../styles/Logo.module.scss'
import logo from '../../../images/thumb19201129086.jpg'

export default function Logo(){
    return(
        <aside className={styles.logo}>
            <Image src={logo} alt="logo" />
        </aside>
    );
}