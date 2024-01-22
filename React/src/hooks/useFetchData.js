import { useState, useEffect } from "react";
import axios from "axios";

function checkData(resData, setLogsData) {
  // 数据时间格式化
  const data = formatDate(resData);
  // 数据传递
  setLogsData((prevLogsData) => (prevLogsData = data));
}

const addLog = (resData,setLogsData) => {
  setLogsData((prevLogsData) => [...prevLogsData, resData]);
};

//处理响应中的时间格式
function formatDate(data) {
  data = data.map((item) => ({
    ...item,
    // 格式化日期
    date: new Date(item.date),
  }));
  return data;
}
// 自定义hooks
function useFetchData(url, method, data = null) {
  const [logsData, setLogsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 设置axios 配置项
        const config = {
          //  请求地址
          url: url,
          // 请求方式
          method: method,
        };

        // 判断请求方式来确认是否添加请求体
        if ((method === "POST" || method === "PUT") && data !== null) {
          config.data = data;
        }
        // response 获取响应参数
        const response = await axios(config);
        // 获取返回的响应数据
        const resData = response.data.data;
        // checkData(resData,setLogsData)
        addLog(resData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, data]);

  return { logsData, setLogsData, error, loading };
}

export default useFetchData;
