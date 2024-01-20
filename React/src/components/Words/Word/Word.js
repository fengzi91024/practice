import React from 'react';
import Card from "../../UI/Card/Card";
import "./Word.css"
const Word = (props) => {
    return (
            <div className={"word"}>
                <div>{props.eng}</div>
                <div className={"noShow"}>{props.zh}</div>
            </div>
    );
};

export default Word;