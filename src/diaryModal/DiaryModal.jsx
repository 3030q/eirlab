import React, {useState} from 'react';
import classes from './DiaryModal.module.css'
import AnalyzeInDiaryModal from "../AnalyzeInDiaryModal/AnalyzeInDiaryModal";

const DiaryModal = ({children, visible,setVisible}) => {
    const [analyzes, setAnalyzes] = useState([])
    const [analyzesTypes, setAnalyzesTypes] = useState([])
    const [analyzeType, setAnalyzeType] = useState("")
    const [analyzeValueType, setAnalyzeValueType] = useState("")
    const [analyzeValue, setAnalyzeValue] = useState("")
    const [analyzeTypeChange, setAnalyzeTypeChange] = useState(false)
    const [currentAnalyzeType, setCurrentAnalyzeType] = useState({})
    const rootClasses = [classes.diary_modal]
    const addNewType = (e) => {
        e.preventDefault()
        setAnalyzesTypes([...analyzesTypes, {analyzeType:analyzeType, analyzeValueType: analyzeValueType}])
        setAnalyzeType("")
        setAnalyzeValueType("")
    }

    const addNewAnalyze = (e) => {
        e.preventDefault()
        setAnalyzes([...analyzes, {type: currentAnalyzeType.analyzeType, value:analyzeValue, created_at: new Date().toISOString().slice(0, 10)}])
        setAnalyzeValue("")
    }

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() =>
        {
            setVisible(false)
            setAnalyzeTypeChange(false)
        }}>
            <div className={classes.diary_modal_content} onClick={event => event.stopPropagation()}>
                {
                    analyzeTypeChange
                        ?
                        <div>
                            <p className={classes.title}>Добавить новые результаты</p>
                            <div>
                                <form className={classes.modal_form}>
                                    <input className={classes.analyze_value} placeholder={"Значение"}
                                           onChange={event => setAnalyzeValue(event.target.value)}/>
                                    <button className={classes.analise_add_btn} onClick={(e) => addNewAnalyze(e)}>Добавить</button>
                                </form>
                            </div>
                            <p className={classes.title}>
                                Последние результаты
                            </p>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                Значение
                                            </th>
                                            <th>
                                                Дата
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            analyzes.filter((v) => v.type === currentAnalyzeType.analyzeType).map(analyze =>
                                                <tr>
                                                    <td>{analyze.value} {currentAnalyzeType.analyzeValueType}</td>
                                                    <td>{analyze.created_at}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        :
                        <div>
                            <p className={classes.title}>Добавить новый тип анализов</p>
                            <div>
                                <form className={classes.modal_form}>
                                    <input className={classes.input_analises_type} placeholder={'Тип анализа'}
                                           onChange={event => setAnalyzeType(event.target.value)}/>
                                    <input className={classes.input_value_analises} placeholder={'ед.изм.'}
                                           onChange={event => setAnalyzeValueType(event.target.value)}/>
                                    <button className={classes.analise_add_btn} onClick={(e) => addNewType(e)}>Добавить</button>
                                </form>
                            </div>
                            <p className={classes.title}>
                                Отслеживаемые анализы
                            </p>
                            <div className={classes.list}>
                                {
                                    analyzesTypes.map(analyze =>
                                        <div className={classes.list_item} onClick={(e) => {
                                            e.preventDefault()
                                            setAnalyzeTypeChange(true)
                                            setCurrentAnalyzeType(analyze)
                                        }}>
                                            {analyze.analyzeType}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default DiaryModal;