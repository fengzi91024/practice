import React from "react";
import "./index.css";
import Logs from "./components/Logs/Logs";
import classes from "./App.module.css"
import LogsForm from "./components/LogsFrom/LogsForm";
import useFetchData from "./hooks/useFetchData";


const App = () => {
    const {logsData, removeData, addData} = useFetchData("http://127.0.0.1:2000/list")

    const optionClass = ["学习", "运动","阅读"];
    console.log(logsData)
    return (
        <div className={classes.app}>
            <LogsForm optionClass={optionClass} onAdd={addData}></LogsForm>
            <Logs optionClass={optionClass} removeData={removeData} logsData={logsData}/>
        </div>
    );
};


export default App;
