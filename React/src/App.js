import React, { useEffect, useState } from "react";
import "./index.css";
import Logs from "./components/Logs/Logs";
import "./App.css";
import LogsForm from "./components/LogsFrom/LogsForm";
import useFetchData from "./hooks/useFetchData";


const App = () => {

  const {logsData} = useFetchData("http://127.0.0.1:2000/list")
  const optionClass = ["学习", "运动"];




  // 接收提交的数据
  const saveLogHandler = (newLog) => {
    newLog.id = logsData.at(-1)?.id + 1;

    setLogsData([...logsData, newLog]);
  };

  //删除日志
  const delLogHandler = (id) => {
    setLogsData((prevState) => prevState.filter((item) => item.id !== id));
  };
  
  return (
    <div className={"app"}>
      <LogsForm onSave={saveLogHandler} optionClass={optionClass}></LogsForm>
      <Logs
        logsData={logsData}
        onDelLog={delLogHandler}
        optionClass={optionClass}
      />
    </div>
  );
};


export default App;
