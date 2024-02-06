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
        // 开始加载
        setLoading(true);
        // 重置错误
        setError(null)
        try {
            const response = await axios.post(url, data)
            if (response.statusText !== "OK"){
                throw new Error ("添加失败")
                return
            }
            fetchData();

        } catch (error) {
            setError(error)
        }finally {
            setLoading(false)
        }
    }, []);

    // 删除日志
    const removeData = useCallback(async (url) => {
        // 开始加载
        setLoading(true);
        // 重置错误
        setError(null)
      try{
          const response = await axios.delete(url)
          if(response.statusText === "OK"){
              // 可以在这里调用 fetchData 以确保数据更新后重新加载
              fetchData();
              return
          }
          throw new Error("删除错误")
      }catch (error){
          setError(error)
      }finally{
            setLoading(false)
      }
    }, []);

    return { logsData, setLogsData, error, loading, addData, removeData, fetchData };
}

export default useFetchData;
