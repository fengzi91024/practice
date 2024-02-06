import React, {useEffect, useState} from "react";
import "./index.css";
import Logs from "./components/Logs/Logs";
import classes from "./App.module.css"
import LogsForm from "./components/LogsFrom/LogsForm";
import useFetch from "./hooks/useFetch";
import LogsContext from "./store/LogsContext"


const App = () => {
    const[isShowForm,setIsShowForm] = useState(false)
    const {data:logsData,loading,error,fetchData} = useFetch({
        url:"http://127.0.0.1:2000/list",
        method:'GET'
    })
    const optionClass = ["编程", "运动","阅读"];
    useEffect(()=>{
        fetchData();
    },[])
    const formHandler ={
    }
    return (
      <LogsContext.Provider value={{fetchData,optionClass}}>
          <div className={classes.app}>
              {!isShowForm && <LogsForm></LogsForm>}
              {(!loading && !error) && <>
                  <Logs logsData={logsData}/>
                  </>
              }

              {loading && <p>数据加载中</p>}
              {error && <p>数据加载异常！</p>}

          </div>
      </LogsContext.Provider>
    );
};


export default App;
