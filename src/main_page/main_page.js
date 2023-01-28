import React, {useEffect, useState} from 'react';
import classes from './MainPage.module.css'
import Nav from "../nav/nav";
import rocket from "../rocket.png"
import searchIcon from '../search_icon.png'
import Loader from "../loader/Loader";
import RegisterModal from "../registerModal/RegisterModal";
import LoginModal from "../loginModal/LoginModal";
import axios from "axios";
import {Link, redirect} from "react-router-dom";


const MainPage = () => {
    const [searchInput, setSearchInput] = useState('Поиск по анализам');
    const [city, setCity] = useState('')
    const [isCityLoading, setIsCityLoading] = useState(false)
    const [registerModal, setRegisterModal] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const [data, setData] = useState([])

    const search = (e) => {
        e.preventDefault()
        const response = axios.get('http://37.140.198.87:8080/v1/analysis',
            {
                params: {
                    city: city,
                    q: searchInput
                }
            }).then(async function (response) {
            localStorage.setItem('data', JSON.stringify(response.data))
            console.log('success')
            redirect('/search')
        }).catch(function (response) {
            //handle error
            console.log(response);
        })
    }

    return (
        <div>
            <RegisterModal visible={registerModal} setVisible={setRegisterModal} setLoginVisible={setLoginModal}/>
            <LoginModal visible={loginModal} setVisible={setLoginModal} setRegisterModal={setRegisterModal}/>
            <Nav registerModal={setRegisterModal}/>
            <br/>
            {isCityLoading ?
                <div className={classes.loader}><Loader/></div>
                : <div>
                    <div className={classes.main_content}>
                        <p className={classes.title}>
                            Найди удобную <br/>
                            клинику с <span className={classes.company_name}>EirLab</span>
                        </p>
                        <p className={classes.description}>
                            Нужно сдать анализы? Но не можете определиться <br/> с клиникой? Наш сервис сможет
                            помочь вам!<br/> Ищите самые дешевые клиники вместе c eirlab!
                        </p>
                    </div>
                    <img className={classes.rocket} src={rocket}/>
                    <form id="search" className={classes.search_form}>
                        <input className={classes.search_input} onChange={e => setSearchInput(e.target.value)}
                               placeholder={'Введите анализ'}/>
                        <select id="city" form="search" className={classes.city_select}
                                onChange={event => setCity(event.target.value)}>
                            <option value="Москва">Москва</option>
                            <option value="Екатеринбург">Екатеринбург</option>
                            <option value="Краснодар">Краснодар</option>
                            <option value="Тюмень">Тюмень</option>
                            <option value="Казань">Казань</option>
                        </select>
                            <button className={classes.search_button} onClick={search}>
                                <Link to={'/search'}><img className={classes.search_icon} src={searchIcon}/></Link>
                            </button>
                    </form>
                </div>
            }
        </div>
    );
};

export default MainPage;