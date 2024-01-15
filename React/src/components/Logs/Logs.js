import React from 'react';
import LogItem from "./LogItem/LogItem";
import "./Logs.css"
import Card from "../UI/Card/Card";
const Logs = (props) => {

    const LogList = props.logsData.map(item => <LogItem date={item.date} desc={item.desc} time={item.time} key={item.id} />)
    
    return (
        <Card className="logs">
            {
                LogList
            }
        </Card>
    );
};

export default Logs;