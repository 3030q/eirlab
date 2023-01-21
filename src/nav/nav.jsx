import React from 'react';
import logo from '../logo.png'
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <div>
            <img className={classes.logo} src={logo} alt="logo"/>
            <div className={classes.urles}>
                <a className={classes.contacts} href='#'> Контакты </a>
                <a className={classes.lk} href='#'> Личный кабинет </a>
            </div>
        </div>
    );
};

export default Nav;