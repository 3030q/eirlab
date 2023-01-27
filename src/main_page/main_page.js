import React, {useEffect, useState} from 'react';
import classes from './MainPage.module.css'
import Nav from "../nav/nav";
import rocket from "../rocket.png"
import searchIcon from '../search_icon.png'
import Loader from "../loader/Loader";
import RegisterModal from "../registerModal/RegisterModal";
import LoginModal from "../loginModal/LoginModal";
const MainPage = () => {
    const [searchInput, setSearchInput] = useState('Поиск по анализам');
    const [cities, setCities] = useState([])
    const [isCityLoading, setIsCityLoading] = useState(false)
    const [registerModal, setRegisterModal] = useState(false)
    const [loginModal, setLoginModal] = useState(false)


    useEffect(() => {
        //setIsCityLoading(true)
        // setTimeout( () => {
        //     setIsCityLoading(false)
        // },10000)
        //fetchCities()
        //setCities([...cities, ...response.data])
    }, [])
    const search = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <RegisterModal visible={registerModal} setVisible={setRegisterModal} setLoginVisible={setLoginModal}/>
            <LoginModal visible={loginModal} setVisible={setLoginModal} setRegisterModal={setRegisterModal}/>
            <Nav registerModal={setRegisterModal}/>
            <br/>
            {isCityLoading ?
                <div className={classes.loader}><Loader/></div>
                :  <div>
                    <div className={classes.main_content}>
                        <p className={classes.title}>
                            Найди удобную <br/>
                            клинику с <span className={classes.company_name}>EirLab</span>
                        </p>
                        <p className={classes.description}>
                            Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam<br/> est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci<br/> velit, sed quia non numquam eius modi tempora.
                        </p>
                    </div>
                    <img className={classes.rocket} src={rocket}/>
                    <form id="search" className={classes.search_form}>
                        <input className={classes.search_input} onChange={e => setSearchInput(e.target.value)}
                               placeholder={'Введите анализ'}/>
                        <select id="city" form="search" className={classes.city_select}>
                            <option value="volvo">Москва</option>
                            <option value="saab">Екатеринбург</option>
                            <option value="opel">Омск</option>
                            <option value="audi">Ростов</option>
                        </select>
                        <button className={classes.search_button} onClick={search}>
                            <img className={classes.search_icon} src={searchIcon}/>
                        </button>
                    </form>
                </div>
            }
        </div>
    );
};

export default MainPage;