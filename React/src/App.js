import React, {useEffect, useState} from 'react';
import "./index.css"
import Logs from "./components/Logs/Logs";
import "./App.css"
import LogsForm from "./components/LogsFrom/LogsForm";
import axios from "axios";

const App = () => {
    const [logsData, setLogsData] = useState([])

    const optionClass = ["学习", "运动"]

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get('http://127.0.0.1:2000/list')
                let data=JSON.parse(response.data.data)
                for (let item of data) {
                    item.date=new Date(item.date)
                }
                setLogsData(data);
            }catch (error){
                console.log('Error fetching data',error)
            }
        };
        fetchData()
    },[]);

    // const wordData = [
    //     {
    //         id: 1,
    //         english: "command",
    //         chinese: "命令"
    //     }
    // ]

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
            <LogsForm onSave={saveLogHandler} optionClass={optionClass} fetchData={fetchData}></LogsForm>
            <Logs logsData={logsData} onDelLog={delLogHandler} optionClass={optionClass}/>
        </div>
    );
};

export default App;