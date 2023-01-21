import React from 'react';
import classes from './MainPage.module.css'
import Nav from "../nav/nav";
import rocket from "../rocket.png"
const MainPage = () => {
    return (
        <div>
            <Nav/>
            <br/>
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
        </div>
    );
};

export default MainPage;