import React, {useState} from 'react';
import Nav from "../nav/nav";
import classes from './SearchResult.module.css'
import invitro from '../invitro.png'
import city_lab from '../city-lab.png'
import AnalysisModal from "../analysisModal/AnalysisModal";

const SearchResult = () => {
    const [analysisModal, setAnalysisModal] = useState()
    const [analyzes, setAnalyzes] = useState([
        {id:0, redirect:"https://google.com/", city: "Москва", cost: 10000,title:'Title', org:"invitro", description:"Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia ", purpose: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia "},
        {id:1, city: "Москва", cost: 100, title:'Title', org:"city_lab", description:"Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia ", purpose: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia "},
        {id:2, city: "Москва", cost: 10000, title:'Title', org:"city_lab", description:"Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia ", purpose: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia "},
        {id:3, city: "Москва", cost: 10000, title:'Title', org:"city_lab", description:"Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia ", purpose: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia "},
        {id:4, city: "Москва", cost: 10000, title:'Title', org:"invitro", description:"Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia ",purpose: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia "},
        {id:5, city: "Москва", cost: 10000,title:'Title', org:"invitro", description:"Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia ", purpose: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia "},
        {id:6, city: "Москва", cost: 10000, title:'Title', org:"invitro", description:"Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia ", purpose: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia "},
    ])
    const [activeAnalysis, setActiveAnalysis] = useState({})

    return (
        <div>
            <Nav/>
            <AnalysisModal visible={analysisModal} setVisible={setAnalysisModal} analysis={activeAnalysis}/>
            <div className={classes.main_content}>
                {
                    analyzes.map(analysis =>
                        <div className={classes.item}>
                            <img src={analysis.org === "invitro" ? invitro : city_lab} className={classes.image}/>
                            <p className={classes.description}><span className={classes.title}>{analysis.title}</span> <br/>{analysis.description} </p>
                            <p className={classes.btn_div}>
                                <p className={classes.cost}>{analysis.cost} руб.</p>
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