import styles from '../styles/Header.module.scss'
import '../styles/Home.module.scss'
import React from 'react'
import {BsFillPersonFill} from "react-icons/bs";
export default function Header(){
    return(
        <header className={styles.header}>
            <h1>
                <BsFillPersonFill id='icon'/> Usuário
            </h1>
            <p >Cadastro de usuários: Incluir, Listar, Alterar e Excluir</p>
        </header>
    );
} 

    