#### Date  时间类

- 用来描述时间，精确到

1. 如何创建日期对象？

    - Date date = new Date();

    - Date date = new Date(指定毫秒值)；
2. 如何修改时间对象中毫秒值

    - setTime(毫秒值)
3. 如何获取时间对象中的毫秒值

    - getTime();

#### SimpleDateFormat    格式化时间

-  解析：把字符串表示的时间变成Date对象。

y 年  M 月   d 日   H  时   m 分   s 秒

##### 类

- 构造方法
    - `public SimpleDateFormat() 构造一个SimpleDateFormat,使用默认格式`
    - `public SimpleDateFormat(String pattern) 构造一个SimpleDateFormat,使用指定格式`
    - `public final String format(Date date)   格式化（日期对象 -> 字符串）`
    - `public Date parse(String source)   解析(字符串——> 日期对象)`

#### Calender    日历

##### 类

##### ![image-20231204173816891](C:\Users\18058\Desktop\practice\Java\note\image\Calendar 日历类对象方法.png)

0纪元 1年  2月 3年周 4月周 5天	

![image-20231204173918567](C:\Users\18058\Desktop\practice\Java\note\image\Calendar 常用方法.png)


时间相关知识

- 格林威治时间（Greenwich Mean Time）简称 GMT
- 计算核心：地球自转一天是24小时，太阳直射时为正午12点

- 原子钟 ：利用铯原子的震动的频率计算出来的时间，作为世界标准时间（UTC）
- 中国标准时间：世界标准时间+8小时

![image-20231204180631220](C:\Users\18058\Desktop\practice\Java\note\image\jdk8的时间格式.png)

![image-20231204180748226](C:\Users\18058\Desktop\practice\Java\note\image\ZoneId.png)

![image-20231204180955517](C:\Users\18058\Desktop\practice\Java\note\image\时间戳.png)

![image-20231204181232147](C:\Users\18058\Desktop\practice\Java\note\image\image-20231204181232147.png)

![image-20231204181508953](C:\Users\18058\Desktop\practice\Java\note\image\image-20231204181508953.png)
