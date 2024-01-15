import React, {useState} from 'react';
import Card from "../UI/Card/Card";
import "./LogsForm.css"
const LogsForm = (props) => {

    // 定义一个State 存储数据
    const [formData,setFormData] = useState({
        inputDate:"",
        inputDesc:"",
        inputTime:""
    })

    //获取日期的值
    const dateChangeHandler = (e)=>{
        setFormData({
            ...formData,
            inputDate: e.target.value
        })
    }
    //获取内容的值
    const descChangeHandler = (e)=>{
        setFormData({
            ...formData,
            inputDesc: e.target.value
        })
    }
    //获取时长的值
    const timeChangeHandler = (e)=>{
        setFormData({
            ...formData,
            inputTime:e.target.value
        })
    }


    const formSubmitHandler = (e)=>{
        //     取消表单的默认行为
        e.preventDefault();

        //     获取表单项的数据日期、内容、时长
        const newLog = {
            date:new Date(formData.inputDate),
            desc:formData.inputDesc,
            time:+formData.inputTime
        }

        props.onSave(newLog);

    //     清空表单
            setFormData({
                inputDate: "",
                inputDesc: "",
                inputTime: ""
            })

    }
    return (
        <Card className={'logs-form'}>
            <form onSubmit={formSubmitHandler}>
                <div className={"form-item"}>
                    <label htmlFor="date">日期</label>
                    <input id={"date"} onChange={dateChangeHandler} value={formData.inputDate} type="date" />
                </div>
                <div className={"form-item"}>
                    <label htmlFor="desc">内容</label>
                    <input id={"desc"} onChange={descChangeHandler} value={formData.inputDesc} type="text"/>
                </div>
                <div className={"form-item"}>
                    <label htmlFor="time">时长</label>
                    <input id={"time"} onChange={timeChangeHandler} value={formData.inputTime} type="number"/>
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;