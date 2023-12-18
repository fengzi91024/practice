import React from 'react';
import "./App.css"
const App = () => {
    return (
        <div className={"login-form"}>
            <h2>登录</h2>
            <div>
                <input type="text" id={"username"} placeholder={"请输入用户名"}/>
            </div>
            <div>
                <input type="text" id={"password"} placeholder={"请输入密码"}/>
            </div>
            <button>登录</button>
        </div>
    );
};

export default App;