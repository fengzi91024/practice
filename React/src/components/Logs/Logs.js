import React from 'react';
import LogItem from "./LogItem/LogItem";
import "./Logs.css"
import Card from "../UI/Card/Card";
const Logs = (props) => {

    const LogList = props.logsData.map((item,index) => <LogItem date={item.date} desc={item.desc} time={item.time} key={item.id} onDelLog={()=>{props.onDelLog(index)}}/>)

    return (
        <Card className="logs">
            {
               LogList.length!=0 ? LogList : <p>日志列表为空!</p>
            }
        </Card>
    );
};

export default Logs;