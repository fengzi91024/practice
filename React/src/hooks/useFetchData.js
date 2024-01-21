import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchData(url,method,data=null) {
  const [logsData, setLogsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 设置axios 配置项
        const config = {
          //  请求地址
          url:url,
          // 请求方式
          method:method
        }

        // 判断请求方式来确认是否添加请求体
        if((method === 'POST' || method === 'PUT') && data !== null){
            config.data = data
        }
        // response 获取响应参数
        const response = await axios(config);
        // 解析JSON 格式的数据
        let fetchedData = JSON.parse(response.data.data);
        fetchedData = fetchedData.map(item => ({
          ...item,
          // 格式化日期
          date: new Date(item.date)
        }));
        // 数据传递
        setLogsData(prevLogsData => prevLogsData =fetchedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url,method,data]);

  return { logsData,setLogsData, error, loading };
}

export default useFetchData;