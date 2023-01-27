import React from 'react';
import classes from './RegisterModal.module.css'
import logo from '../logo.png'
const RegisterModal = ({children, visible, setVisible, setLoginVisible}) => {

    const rootClasses = [classes.register_modal]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.register_modal_content} onClick={event => event.stopPropagation()}>
                <img src={logo} className={classes.logo}/>
                <form >
                    <div>
                        <span className={classes.log} onClick={() => {setVisible(false); setLoginVisible(true)}}>Войти</span>
                        <span className={classes.reg}>Регистрация </span>
                    </div>
                    <br/>
                    <input className={classes.register_input} placeholder={'login'}/>
                    <input className={classes.register_input} placeholder={'password'}/>
                    <input className={classes.register_input} placeholder={'name'}/>
                    <button className={classes.butt}> Регистрация</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;