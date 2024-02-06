import React, {useContext, useState} from 'react';
import classes from "./LogItem.module.css"
import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
import Confirm from "../../UI/ConFirm/Confirm";
import useFetch from "../../../hooks/useFetch";
import LogsContext from "../../../store/LogsContext";

const LogItem = ({date,desc,count,id}) => {
    const [showConfirm,setShowConfirm] = useState(false)

    const deleteHandler = () => {

        setShowConfirm(true)

    }
    // 定义取消的函数
    const cancelHandler=() =>{
        setShowConfirm(false)
    }
    const ctx = useContext(LogsContext)
    const {fetchData:removeData} = useFetch({
        url:`http://127.0.0.1:2000/${id}`,
        method:"DELETE"
    },ctx.fetchData)
    // 定义确定的函数
    const okHandler=()=>{
        removeData();
        setShowConfirm(false)
    }
    return (
            <Card className={classes.logsItem}>
                {showConfirm && <Confirm content={"该操作不可恢复！请确认"} onOK={okHandler} onCancel={cancelHandler}></Confirm>}
                <MyDate date={date}/>
                <div className={classes.logsItemDesc}>
                    <h2>{desc}</h2>
                    <div className={classes.logsItemTime}>{count}分钟</div>
                </div>
                <div className={classes.logsDel}>
                    <div className={classes.delete} onClick={deleteHandler}>x</div>
                </div>
            </Card>
    );
};

export default LogItem;