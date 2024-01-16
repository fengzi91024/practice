import React, {useState} from 'react';
import "./LogItem.css"
import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
import Confirm from "../../UI/ConFirm/Confirm";

const LogItem = (props) => {
    const [showConfirm,setShowConfirm] = useState(false)
    const deleteHandler = () => {

        setShowConfirm(true)

    }
    // 定义一个取消的函数
    const cancelHandler=() =>{
        setShowConfirm(false)
    }
    // 定义一个确定的函数
    const okHandler=()=>{
        props.onDelLog();
    }

    return (
            <Card className="logs-item">
                {showConfirm && <Confirm content={"该操作不可恢复！请确认"} onOK={okHandler} onCancel={cancelHandler}></Confirm>}
                <MyDate date={props.date}/>
                <div className="logs-item-desc">
                    <h2>{props.desc}</h2>
                    <div className="logs-item-time">{props.time}分钟</div>
                </div>
                <div>
                    <div className={'delete'} onClick={deleteHandler}>x</div>
                </div>
            </Card>
    );
};

export default LogItem;