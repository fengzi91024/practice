import React from 'react';
import LogItem from "./LogItem/LogItem";
import "./Logs.css"
const Logs = () => {
    const logsData = [
        {
            id: "001",
            date: new Date(2024, 1, 14),
            desc: '学习React',
            time: 30
        },
        {
            id: "002",
            date: new Date(2024, 1, 14),
            desc: '学习TS',
            time: 30
        },
        {
            id: "003",
            date: new Date(2024, 1, 14),
            desc: '学习English',
            time: 30
        }

    ]
    const LogList =logsData.map(item => <LogItem date={item.date} desc={item.desc} time={item.time} key={item.id} />)
    
    return (
        <div className="logs">
            {
                LogList
            }
        </div>
    );
};

export default Logs;