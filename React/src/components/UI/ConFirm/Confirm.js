import React from 'react';
import "./Confirm.css"
import Card from "../Card/Card";
import Backdrop from "../BackDrop/Backdrop";


const Confirm = (props) => {
    return <Backdrop>
        <Card className={"confirm-bar"}>
            <div className={"confirm-desc"}>
                <p>{props.content}</p>
            </div>
            <div className={"confirm-btn"}>
                <button className={'ok'} onClick={props.onOK}>确认</button>
                <button className={'cancel'} onClick={props.onCancel}>取消</button>
            </div>
        </Card>
    </Backdrop>


};

export default Confirm;