import React, {useEffect, useState} from 'react';
import classes from "./AnalysisModal.module.css";
import invitro from "../invitro.png";
import city_lab from "../city-lab.png"
import {YMaps, Map, SearchControl, Placemark} from "@pbe/react-yandex-maps";
import axios from "axios";

const AnalysisModal = ({children, visible, setVisible, analysis}) => {
    const rootClasses = [classes.analysis_modal]
    const [mapIsLoading, setMapIsLoading] = useState(false)
    const [orgGeometry, setOrgGeometry] = useState([])
    const [orgGeoLoaded, setOrgGeoLoaded] = useState(false)
    // https://search-maps.yandex.ru/v1/?text=Автосервис, Москва, 2 Вязовский проезд 4а&type=biz&lang=ru_RU&results=1&apikey=<API-ключ>

    useEffect(() => {
        setMapIsLoading(true)
    }, [orgGeometry])

    async function getOrgInCity() {
        let org = analysis.organisation
        let city = "Екатеринбург"
        let str = "https://search-maps.yandex.ru/v1/?text=" + org + " " + city + "&type=biz&lang=ru_RU&ll=55.755864,37.617698&results=10&apikey=ab8c2ccc-e2a5-4879-8305-9d0e40345c68"
        const response = await axios.get(str)
        let arr = []
        response.data['features'].map(res => {
                arr.push(res['geometry']['coordinates'])
            }
        )
        setOrgGeometry(arr)
    }

    if (visible) {
        rootClasses.push(classes.active)
        if (!orgGeoLoaded) {
            getOrgInCity()
            setOrgGeoLoaded(true)
        }
    } else {
        if (orgGeoLoaded) {
            setOrgGeoLoaded(false)
            setOrgGeometry([])
        }
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.analysis_modal_content} onClick={event => event.stopPropagation()}>
                <div>
                    <img src={analysis.organisation === 'invitro' ? invitro : city_lab} className={classes.logo}/> <br/>
                </div>
                <br/>
                <div>
                    <p className={classes.textik}><p className={classes.title}>{analysis.name}</p>
                        <br/> {analysis.description}
                    </p>
                    <br/>
                    <br/>
                    <p className={classes.textik}>
                        <p className={classes.title}> Назначение</p> <br/>
                        {analysis.purpose}
                    </p>
                    <br/>
                    <br/>
                    <p className={classes.textik}>
                        <p className={classes.title}> Подготовка</p> <br/>
                        {analysis.preparation}
                    </p>
                    <br/>
                    {mapIsLoading ?
                        <div>
                            <p className={classes.title}>Адреса</p>
                            <div className={classes.map}>
                                <YMaps>
                                    <Map
                                        defaultState={{
                                            center: [56.838011, 60.597474],
                                            zoom: 8,
                                        }}
                                    >
                                        {orgGeometry.map(geo =>

                                            <Placemark geometry={[parseFloat(geo[1]), parseFloat(geo[0])]}/>
                                        )}
                                    </Map>
                                </YMaps>;
                            </div>
                        </div> : <br/>
                    }
                    <div>
                        <button disabled className={classes.cost}>
                            {analysis.total_price} руб.
                        </button>
                        <a href={analysis.redirect}>
                        <button className={classes.redirect} onClick={() => {  window.location.replace(analysis.url);}}>
                            Переход к лаборатории
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AnalysisModal;