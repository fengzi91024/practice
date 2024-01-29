import React from "react";
import "./index.css";
import Logs from "./components/Logs/Logs";
import classes from "./App.module.css"
import LogsForm from "./components/LogsFrom/LogsForm";
import useFetchData from "./hooks/useFetchData";


const App = () => {
    const {logsData, removeData, addData,loading,error} = useFetchData("http://127.0.0.1:2000/list")
    const optionClass = ["编程", "运动","阅读"];
    return (
        <div className={classes.app}>
            {
                (!loading && !error) &&
                <>
                    <LogsForm optionClass={optionClass} onAdd={addData}></LogsForm>
                    <Logs optionClass={optionClass} removeData={removeData} logsData={logsData}/>
                </>
            }
            {
                loading && <p>数据加载中</p>
            }
            {
                error && <p>数据加载异常！</p>
            }
        </div>
    );
};


export default App;
