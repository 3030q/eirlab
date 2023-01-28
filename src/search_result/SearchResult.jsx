import React, {useEffect, useState} from 'react';
import Nav from "../nav/nav";
import classes from './SearchResult.module.css'
import invitro from '../invitro.png'
import city_lab from '../city-lab.png'
import AnalysisModal from "../analysisModal/AnalysisModal";

const SearchResult = () => {
    const [analysisModal, setAnalysisModal] = useState()
    const [analyzes, setAnalyzes] = useState()
    const [activeAnalysis, setActiveAnalysis] = useState({})
    //const [data, setData] = useState(JSON.parse(localStorage.getItem('data')))
    const [isSet, setSet] = useState(false)


    const data = JSON.parse(localStorage.getItem('data'))

    return (
        <div>
            <Nav/>
            <AnalysisModal visible={analysisModal} setVisible={setAnalysisModal} analysis={activeAnalysis}/>
            <div className={classes.main_content}>
                {
                    data.map(analysis =>
                        <div className={classes.item}>
                            <img src={analysis.organisation === 'invitro' ? invitro : city_lab} className={classes.image}/>
                            <p className={classes.description}><span className={classes.title}>{
                                analysis.name.length > 30 ?
                                    analysis.name.substring(0, 50) + '...'
                                    :
                                    analysis.name
                            }</span> <br/>{
                                analysis.description.length > 30 ?
                                    analysis.description.substring(0, 30) + '...'
                                    :
                                    analysis.description
                            } </p>
                            <p className={classes.btn_div}>
                                <p className={classes.cost}>{analysis.total_price} руб.</p>
                                <button className={classes.btn_about} onClick={(e) => {
                                    e.preventDefault()
                                    setActiveAnalysis(analysis);
                                    setAnalysisModal(true);
                                }}> Подробнее
                                </button>
                            </p>
                        </div>
                    )}
                {/*<div className={classes.item}>*/}
                {/*    <img src={invitro} className={classes.image}/>*/}
                {/*    <p className={classes.description}><span className={classes.title}>Title</span> <br/>Eos qui ratione*/}
                {/*        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia </p>*/}
                {/*    <p className={classes.btn_div}>*/}
                {/*        <button className={classes.btn_about} onClick={() => {*/}
                {/*            setActiveAnalysis([]);*/}
                {/*            setAnalysisModal(true);*/}
                {/*        }}> Подробнее*/}
                {/*        </button>*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<div className={classes.item}>*/}
                {/*    <img src={invitro} className={classes.image}/>*/}
                {/*    <span className={classes.title}>Title</span>*/}
                {/*    <p className={classes.description}><span className={classes.title}>Title</span> <br/>Eos qui ratione*/}
                {/*        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia </p>*/}
                {/*    <p className={classes.btn_div}>*/}
                {/*        <button className={classes.btn_about}> Подробнее</button>*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default SearchResult;