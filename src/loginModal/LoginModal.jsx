import React, {useState} from 'react';
import classes from "./LoginModal.module.css";
import logo from "../logo.png";
import axios from "axios";
import {Link, redirect} from "react-router-dom";

const LoginModal = ({children, visible,setVisible,setRegisterModal}) => {
    const rootClasses = [classes.login_modal]
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function login_user() {
        const form = new FormData()
        form.append('username', login)
        form.append('password', password)
        axios({
            method: "post",
            url: "http://37.140.198.87:8080/v1/user/jwt/login",
            data: form,
            headers: { "Content-Type": "multipart/form-data", 'Access-Control-Allow-Origin': '*', },
        })
            .then(async function (response) {
                localStorage.setItem('token', response.data.access_token)
                console.warn(localStorage.getItem( 'token'))
                redirect('/lk')
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.login_modal_content} onClick={event => event.stopPropagation()}>
                <img src={logo} className={classes.logo}/>
                <form >
                    <div>
                        <span className={classes.log}>Войти</span>
                        <span className={classes.reg} onClick={() => {setVisible(false); setRegisterModal(true)}}>Регистрация </span>
                    </div>
                    <br/>
                    <input className={classes.login_input} onChange={event => setLogin(event.target.value)} placeholder={'login'}/>
                    <input className={classes.login_input} onChange={event => setPassword(event.target.value)} type={'password'} placeholder={'password'}/>
                    <button className={classes.butt} onClick={login_user}><Link to={'/'}> Войти</Link></button>
                </form>
            </div>
        </div>
    );
};


export default LoginModal;