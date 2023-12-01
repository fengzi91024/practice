### API

- （Application Programming Interface）:应用程序编程接口
- JavaAPI : 指JDK 提供的各种功能的java 类



#### BigInteger

- 对象一旦创建，内部记录的值不能发生改变

​	在Java中，整数有四种类型：byte,short,int,long

​	底层占用字节个数，byte1个字节，short 2个字节，int4个字节，long8个字节

![image-20231128160119938](C:\Users\18058\Desktop\practice\Java\note\image\BigInteger.png)

`public static BigInteger valueOf(long val)    静态方法获取BigInteger 的对象 ，内部有优化`

![image-20231128161033761](C:\Users\18058\Desktop\practice\Java\note\image\小结.png)

![image-20231128161131153](C:\Users\18058\Desktop\practice\Java\note\image\BigIntger方法.png)

#### BigDecimal

- 表示较大的小数和解决运算精度失真问题

![image-20231129112011141](C:\Users\18058\Desktop\practice\Java\note\image\BigDecimal.png)

