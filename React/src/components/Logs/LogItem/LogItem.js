import React from 'react';
import "./LogItem.css"
import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
const LogItem = (props) => {
    return (
        <Card className="logs-item">
            <MyDate date={props.date}/>
            <div className="logs-item-desc">
                <h2>{props.desc}</h2>
                <div className="logs-item-time">{props.time}分钟</div>
            </div>
        </Card>
    );
};

export default LogItem;