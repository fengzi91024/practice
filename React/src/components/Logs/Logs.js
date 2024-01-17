import React, {useState} from 'react';
import LogItem from "./LogItem/LogItem";
import "./Logs.css"
import Card from "../UI/Card/Card";
import LogFilter from "./LogFilter/LogFilter";
const Logs = (props) => {
    const [year,setYear] = useState(2024)

    //过滤数据
    let filterData = props.logsData.filter(item => item.date.getFullYear() === year)


    //创建一个修改年份的函数
    const  changeYearHandler =(year)=>{
        setYear(year)
    }

    const LogList = filterData.map((item,index) => <LogItem date={item.date} desc={item.desc} time={item.time} key={item.id} onDelLog={()=>{props.onDelLog(index)}}/>)

    return (
        <Card className="logs">
            <LogFilter year={year} onYearChange={changeYearHandler}></LogFilter>
            {
               LogList.length!=0 ? LogList : <p>日志列表为空!</p>
            }
        </Card>
    );
};

export default Logs;