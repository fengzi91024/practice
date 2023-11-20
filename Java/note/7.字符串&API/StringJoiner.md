StringJoiner 

- StringJoiner 也可以看成容器，创建之后里面的内容是可变的
- 作用：提高字符串的操作效率，而且代码编写特别简洁



### 构造方法

- public StringJoiner(间隔符号)  创建一个StringJoiner对象，指定拼接时的间隔符号

- String StringJoiner(间隔符号，开始符号，结束符号)  创建一个StringJoiner对象

- prefix:表示之前的符号，suffix :表示结束符号  delimiter 表示间隔符号

### 成员方法

- public StringJoiner add(添加的内容)  添加数据，并放回对象本身

- public int length()                返回长度(字符出现的个数)

- public String  toString()           返回一个字符串（该字符串就是拼接后的结果）