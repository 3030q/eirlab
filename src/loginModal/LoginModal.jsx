import React from 'react';
import classes from "./LoginModal.module.css";
import logo from "../logo.png";

const LoginModal = ({children, visible,setVisible,setRegisterModal}) => {
    const rootClasses = [classes.login_modal]


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
                    <input className={classes.login_input} placeholder={'login'}/>
                    <input className={classes.login_input} placeholder={'password'}/>
                    <button className={classes.butt}> Войти</button>
                </form>
            </div>
        </div>
    );
};


export default LoginModal;