import React, {useState} from 'react';
import "./index.css"
import Logs from "./components/Logs/Logs";
import "./App.css"
import LogsForm from "./components/LogsFrom/LogsForm";
const App = () => {
    const [logsData,setLogsData] = useState(
        [
            {
                id: 1,
                date: new Date(2024, 1, 15),
                desc: '学习React',
                time: 120
            }

        ]
    )

    // 接收提交的数据
    const saveLogHandler = (newLog)=>{

        newLog.id = logsData.at(-1)?.id + 1

        setLogsData([
            ...logsData,
            newLog
        ])
    }

    return (
        <div className={'app'}>
            <LogsForm onSave={saveLogHandler}></LogsForm>
            <Logs logsData={logsData}/>
        </div>
    );
};

export default App;