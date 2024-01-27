import React, { useState} from 'react';
import LogItem from "./LogItem/LogItem";
import classes from "./Logs.module.css"
import Card from "../UI/Card/Card";
import LogFilter from "./LogFilter/LogFilter";

const Logs = (props) => {
    const [year, setYear] = useState(2024)
    const [month, setMonth] = useState(1)
    const [sort, setSort] = useState("编程")
    // 创建option列表
    const optionYear = [2024, 2025]
    const optionMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    //过滤数据
    let filterData = props.logsData.filter(item => {
        // 修改时间格式
        item.date = new Date(item.date)
        // 过滤年 、 月 、 日志类型
        return item.date.getFullYear() === year && item.date.getMonth() === (month - 1) && item.logtype === sort
    })

    //创建一个修改年份的函数
    const changeYearHandler = (year) => {
        setYear(+year)
    }

    const changeMonthHandler = (month) => {
        setMonth(+month)
    }

    const changeClassHandler = (sort) => {
        setSort(sort)
    }

    const LogList = filterData.map(item => {
        return <LogItem date={item.date}
                        desc={item.desc}
                        count={item.count}
                        key={item.id}
                        logtype={item.logtype}
                        onDel={()=>{props.removeData("http://127.0.0.1:2000/"+item.id)}}
        />
    })


    return (<Card className={classes.logs}>
        <div className={classes.filterTime}>
            <div className={classes.filterDate}>
                <LogFilter time={year} onSelectChange={changeYearHandler} labelContent={'年份'}
                           option={optionYear}></LogFilter>
                <LogFilter labelContent={'月份'} option={optionMonth}
                           onSelectChange={changeMonthHandler}></LogFilter>
            </div>
            <LogFilter option={props.optionClass} labelContent={'分类'}
                       onSelectChange={changeClassHandler}></LogFilter>
        </div>
        {LogList.length != 0 ? LogList : <p>日志列表为空!</p>}
    </Card>);
};

export default Logs;