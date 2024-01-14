import React from 'react';
import "./LogItem.css"
import MyDate from "./MyDate/MyDate";
const LogItem = (props) => {
    return (
        <div className="logs-item">
            <MyDate date={props.date}/>
            <div className="logs-item-desc">
                <h2>{props.desc}</h2>
                <div className="logs-item-time">{props.time}分钟</div>
            </div>
        </div>
    );
};

export default LogItem;