import React, {Component} from "react";
import axios from 'axios';
import styles from '../styles/Form.module.scss'
import { render } from "react-dom";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";

const baseUrl = 'http://localhost:3001/users';
const fromDb = undefined;
const initialState = {
    user: {name: '',email:''},
    list: fromDb || []
}

export default class Form extends Component{

    state = {...initialState};

    // eslint-disable-next-line react/no-deprecated
    componentWillMount(){
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }
    clear(){
        this.setState({user: initialState.user})
    }

    save(){
        const user = this.state.user;
        const method = user.id ? "put" : "post"
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user: initialState.user, list})
            })
    }

    getUpdatedList(user, add=true){
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }
    
    load(user){
        this.setState({user})
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }
    renderRows(){
        return this.state.list.map(user => {
            return(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="editar"
                            onClick={() => this.load(user)}>
                            <BsFillPencilFill />
                        </button>
                        <button className="remove"
                            onClick={() => this.remove(user)}>
                            <BsFillTrashFill />
                        </button>
                    </td>
                </tr>
            );
        })
    }
    render(){
        return(
            <div className={styles.container}>
                
                <div className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={styles.formGroup}>
                                <input type="text" className="form-control"
                                    name="name"
                                    value={this.state.user.name}
                                    onChange={e => this.updateField(e)}
                                    required="required" />
                                    <span>Nome completo</span>
                                    <i></i>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.formGroup}>
                                <input type="text" className="form-control"
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={e => this.updateField(e)}
                                    required="required"
                                    />
                                    <span>Email</span>
                                    <i></i>
                            </div>
                        </div>
                    </div>
                
                    <div className={styles.row2}>
                        <div className={styles.col2}>
                            <button className={styles.btn}
                            onClick={e => this.save(e)}>
                                SALVAR
                            </button>
                            <button className={styles.btn}
                            onClick={e => this.clear(e)}>
                                CANCELAR
                            </button>

                        </div>
                    </div>
                </div>
                <div className={styles.usuarios}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            </div>
    
        );
    }
}