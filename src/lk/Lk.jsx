import React, {useState} from 'react';
import Nav from "../nav/nav";
import lk_back from "../lk_back.png"
import classes from "./Lk.module.css"
import doge from "../doge.png"
import DiaryModal from "../diaryModal/DiaryModal";

const Lk = () => {
    const [historyItem, setHistoryItem] = useState([{date:"18/12/22", name: "Vitamin D", url:"https://google.com", city:"Moscow"}])
    const [diaryModal, setDiaryModal] = useState(false)
    localStorage.setItem("userName", "Nikita Rybin")
    localStorage.setItem("email", "nikitarybin888@gmail.com")

    return (
        <div>
            <Nav/>
            <DiaryModal visible={diaryModal} setVisible={setDiaryModal}/>
            <br/>
            <div className={classes.main_content}>
                <img src={doge} className={classes.user_img}/>
                <div className={classes.diary}>
                    <button className={classes.diary_btn} onClick={() => setDiaryModal(true)}>Дневник</button>
                </div>
                <div className={classes.user}>
                    <span className={classes.user_name}>{localStorage.getItem('userName')}</span>
                    <br/>
                    {localStorage.getItem('email')}
                </div>
                <div className={classes.history}>
                    <span className={classes.history_span}>История поиска</span>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th> Дата поиска</th>
                                <th> Название анализа</th>
                                <th> Ссылка на лабораторию</th>
                                <th> Город</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                historyItem.map(history =>
                                    <tr>
                                        <td>{history.date}</td>
                                        <td>{history.name}</td>
                                        <td><a href={history.url}>Ссылка</a></td>
                                        <td>{history.city}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lk;