import React from 'react';
import logo from '../logo.png'
import classes from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = ({registerModal}) => {
    return (
        <div>
            <img className={classes.logo} src={logo} alt="logo"/>
            <div className={classes.urles}>
                {localStorage.setItem('isAuth', true)}
                <a className={classes.contacts} href='#'> Контакты </a>
                {
                    localStorage.getItem('isAuth')
                        ? <Link to={'/lk'}><span className={classes.lk}> Личный кабинет </span></Link>
                        : <a className={classes.lk} href='#' onClick={() => registerModal(true)}> Личный кабинет </a>
                }

            </div>
        </div>
    );
};

export default Nav;