import {useState, useEffect, useCallback} from "react";
import axios from "axios";



// 自定义hooks
function useFetchData() {
    const [logsData, setLogsData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // 加载数据
    const fetchData = useCallback(async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(url)
            const resData = response.data.data
            const data = resData.map((item) => ({
                ...item,
                // 格式化日期
                date: new Date(item.date),
            }));
            setLogsData(data)
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [])



    // 添加数据
    const addData = useCallback(async (url, data) => {
        try {
            const response = await axios.post(url, data)
            const resData = response.data.data
            setLogsData( prevState => [...prevState, resData])
        } catch (error) {
            console.error("Error adding data:", error);
        }
    }, [logsData])
    //删除日志
    const delData = useCallback(async (url) => {
        const response = await axios.delete(url)
        const id = response.data.data.id
        setLogsData(prevState => prevState.filter(item => item.id !== id))

    }, [])

    return {logsData, setLogsData, error, loading, addData, delData,fetchData};
}

export default useFetchData;
