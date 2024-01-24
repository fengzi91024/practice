import React, {useContext, useState} from 'react';
import classes from "./LogItem.module.css"
import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
import Confirm from "../../UI/ConFirm/Confirm";

const LogItem = (props) => {
    const [showConfirm,setShowConfirm] = useState(false)
    const {date,desc,count,logtype} = props

    const deleteHandler = () => {

        setShowConfirm(true)

    }
    // 定义一个取消的函数
    const cancelHandler=() =>{
        setShowConfirm(false)
    }
    // 定义一个确定的函数
    const okHandler=()=>{
        props.onDel();
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
                <div className={classes.logsSort}>
                    <span>{logtype}</span>
                </div>
            </Card>
    );
};

export default LogItem;