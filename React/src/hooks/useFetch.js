import {useState, useCallback,useEffect} from "react";
import axios from "axios";
/*
* {
*   url,
*   method
* }
*
* */
function useFetch(config,cb) {
    // 存储数据
    const [data, setData] = useState([]);
    // 存储报错信息
    const [error, setError] = useState(null);
    // 加载中...
    const [loading, setLoading] = useState(false);
    // 加载数据
    const fetchData = useCallback(async (body=null) => {
        // 开始加载
        setLoading(true);
        // 重置错误
        setError(null)
        try {
            // 判断是否有请求体有则向配置项添加data属性
            body ? config.data =body : null
            const response = await axios(config)
            // 判断是否加载成功，返回
            if(response.statusText === 'OK' ){
                setData(response.data.data);
                cb && cb();
                return
            }
            // 加载失败，抛出异常
            throw new Error("请求数据失败")

        } catch (err) {
            // 接收错误信息
            setError(err);
        } finally {
            // 加载结束
            setLoading(false);
        }
    }, [])




    return { data, setData, error, loading,fetchData };
}

export default useFetch;
