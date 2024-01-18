import React, {useState} from 'react';
import "./index.css"
import Logs from "./components/Logs/Logs";
import "./App.css"
import LogsForm from "./components/LogsFrom/LogsForm";

const App = () => {
    const [logsData, setLogsData] = useState(
        [
            {
                id: 1,
                date: new Date(2024, 1, 15),
                desc: '学习React',
                time: 120
            },
            {
                id: 2,
                date: new Date(2024, 1, 16),
                desc: '学习React',
                time: 121
            },
            {
                id: 3,
                date: new Date(2024, 1, 17),
                desc: '学习React',
                time: 121
            },
            {
                id: 4,
                date: new Date(2024, 1, 17),
                desc: '学习React',
                time: 120
            },
            {
                id: 5,
                date: new Date(2024, 1, 18),
                desc: '学习React',
                time: 120
            },
            {
            id: 6,
            date: new Date(2024, 1, 19),
            desc: '学习React',
            time: 121
            },
            {
                id: 7,
                date: new Date(2024, 1, 20),
                desc: '学习React',
                time: 121
            }

        ]
    )

    const wordData = [
        {
            id: 1,
            english: "command",
            chinese: "命令"
        },
        {
            id: 2,
            english: "pass",
            chinese: "通过"
        },
        {
            id: 3,
            english: "response",
            chinese: "响应"
        },
        {
            id: 4,
            english: "send",
            chinese: "发送"
        },
        {
            id: 5,
            english: "term",
            chinese: "学期"
        },
    ]

    // 接收提交的数据
    const saveLogHandler = (newLog) => {

        newLog.id = logsData.at(-1)?.id + 1

        setLogsData([
            ...logsData,
            newLog
        ])
    }

    //删除日志
    const delLogHandler = (id) => {
        setLogsData(prevState => prevState.filter(item=>item.id !== id)
        )
    }

    return (
        <div className={'app'}>
            <LogsForm onSave={saveLogHandler}></LogsForm>
            <Logs logsData={logsData} onDelLog={delLogHandler}/>
        </div>
    );
};

export default App;