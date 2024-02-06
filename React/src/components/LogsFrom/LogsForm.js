import React, {useContext, useState} from 'react';
import Card from "../UI/Card/Card";
import classes from "./LogsForm.module.css"
import useFetch from "../../hooks/useFetch";
import LogsContext from "../../store/LogsContext";
const LogsForm = (props) => {
    // 定义一个State 存储数据
    const [formData,setFormData] = useState({
        inputDate:"",
        inputDesc:"",
        inputCount:"",
        selectType:"编程"
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
    const countChangeHandler = (e)=>{
        setFormData({
            ...formData,
            inputCount:e.target.value
        })
    }

    // 获取分类
    const sortChangeHandler = (e)=>{
        console.log(e.target.value)
        setFormData({
            ...formData,
            selectType: e.target.value
        })
    }
    const ctx =useContext(LogsContext)
    const{fetchData:onAdd} =useFetch({
        url:"http://127.0.0.1:2000/add",
        method:"POST"
    },ctx.fetchData)
    const  formSubmitHandler = async(e)=>{
        //     取消表单的默认行为
        e.preventDefault();

        //     获取表单项的数据日期、内容、时长
        const newLog = {
            date:new Date(formData.inputDate),
            desc:formData.inputDesc,
            count:+formData.inputCount,
            logtype:formData.selectType
        }

        onAdd(newLog)

    //     清空表单
            setFormData({
                inputDate: "",
                inputDesc: "",
                inputCount: "",
                selectType: "编程"
            })
        
    }

    let optionList = ctx.optionClass.map((item,index) => <option key={index}>{item}</option>)

    return (
        <Card className={classes.logsForm}>
            <form onSubmit={formSubmitHandler}>
                <div className={classes.formItem}>
                    <label htmlFor="date">日期</label>
                    <input id={"date"} onChange={dateChangeHandler} value={formData.inputDate} type="date" />
                </div>
                <div className={classes.formItem}>
                    <label htmlFor="desc">内容</label>
                    <input id={"desc"} onChange={descChangeHandler} value={formData.inputDesc} type="text"/>
                </div>
                <div className={classes.formItem}>
                    <label htmlFor="time">时长</label>
                    <input id={"time"} onChange={countChangeHandler} value={formData.inputCount} type="text"/>
                </div>
                <div className={classes.formItem}>
                    <label htmlFor="sort">分类</label>
                    <select id="sort" onChange={sortChangeHandler} value={formData.selectType}>
                        {optionList}
                    </select>

                </div>
                <div className={classes.formBtn}>
                    <button>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default React.memo(LogsForm);