import React from 'react';
import classes from "./AnalyzeInDiaryModal.module.css";
import logo from "../logo.png";

const AnalyzeInDiaryModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.modal]


    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join('')} onClick={() => setVisible(false)}>
            <div className={classes.modal_content} onClick={event => event.stopPropagation()}>
            </div>
        </div>
    );
};

export default AnalyzeInDiaryModal;