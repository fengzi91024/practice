import React, { useEffect, useState } from "react";
import "./index.css";
import Logs from "./components/Logs/Logs";
import "./App.css";
import LogsForm from "./components/LogsFrom/LogsForm";
import useFetchData from "./hooks/useFetchData";


const App = () => {

  const {logsData,delData,fetchData,setLogsData,} = useFetchData()
  const optionClass = ["学习", "运动"];
  useEffect(()=> {
    fetchData("http://127.0.0.1:2000/list");
  },[])



  return (
    <div className={"app"}>
      <LogsForm  optionClass={optionClass}></LogsForm>
      <Logs
        logsData={logsData}
        onDelLog={delData}
        optionClass={optionClass}
      />
    </div>
  );
};


export default App;
