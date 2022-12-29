import styles from '../styles/Main.module.scss'
import React from 'react'
import Form from './Form';


export default function Main(){

    return( 
        <main className={styles.content}>
            <div className={styles.conteudo}>
                <Form />
            </div>
        </main>
    );
} 
