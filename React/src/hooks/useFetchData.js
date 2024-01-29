import {useState, useCallback,useEffect} from "react";
import axios from "axios";

function useFetchData(url) {
    // 存储数据
    const [logsData, setLogsData] = useState([]);
    // 存储报错信息
    const [error, setError] = useState(null);
    // 加载中...
    const [loading, setLoading] = useState(false);

    // 加载数据
    const fetchData = useCallback(async () => {
        // 开始加载
        setLoading(true);
        // 重置错误
        setError(null)
        try {
            const response = await axios.get(url)
            console.log(response)
            if(response.statusText === 'OK' ){
                const data = response.data.data
                setLogsData(prevLogsData => prevLogsData = data);
                return
            }

            throw new Error("请求数据失败")

        } catch (err) {
            // 接收错误信息
            setError(err);
        } finally {
            // 加载结束
            setLoading(false);
        }
    }, [url])

    useEffect(()=>{
        fetchData();
    },[fetchData])
    // 添加数据
    const addData = useCallback(async (url, data) => {
        try {
            const response = await axios.post(url, data)
            const resData = response.data.data
            setLogsData(prevState => [...prevState, resData]);
                // 在这里调用 fetchData 可以确保数据更新后重新加载
                fetchData();
        } catch (error) {
            console.error("Error adding data:", error);
        }
    }, []);

    // 删除日志
    const removeData = useCallback(async (url) => {
        const response = await axios.delete(url)
        const id = response.data.data.id
        setLogsData(prevState => prevState.filter(item => item.id !== id));
        // 可以在这里调用 fetchData 以确保数据更新后重新加载
        fetchData();
    }, []);

    return { logsData, setLogsData, error, loading, addData, removeData, fetchData };
}

export default useFetchData;
