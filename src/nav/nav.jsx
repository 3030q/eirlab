import React from 'react';
import logo from '../logo.png'
import classes from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = ({registerModal}) => {
    return (
        <div>
            <Link to={'/'}><img className={classes.logo} src={logo} alt="logo"/></Link>
            <div className={classes.urles}>
                {
                    localStorage.getItem('token')
                        ? <Link to={'/lk'}><span className={classes.lk}> Личный кабинет </span></Link>
                        : <Link to={'/lk'}><span className={classes.lk}> Личный кабинет </span></Link>
                }

            </div>
        </div>
    );
};

export default Nav;