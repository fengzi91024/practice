# Object

- object 是Java中的顶级父类。所有的类都直接或间接的继承Object类
- object类中的方法可以被所有子类访问。

##### 

##### Object的构造方法

`public Object 空参构造`



##### Object的成员方法

`public String toString()    返回对象的字符串表示形式`

`public boolean equals(Object obj)   比较俩个对象是否相等`

`protected Object clone(int a)   对象克隆`





#### 对象克隆

`protected Object clone(int a)   对象克隆`

> 把A对象的属性值完全拷贝给B对象，也叫对象拷贝，对象复制

- 浅克隆

```java
public class MyClass implements Cloneable {
    // 类的属性和方法

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}


// 使用clone方法
public class TestClone {
    public static void main(String[] args) {
        MyClass original = new MyClass();
        try {
            MyClass copy = (MyClass) original.clone();
            // 现在copy是MyClass类型的实例
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
    }
}
```





##### Objects 

- Objects 是一个工具类，提供了一些方法去完成一些功能。

`public static boolean equals(Object a,Object b)  先做非空判断，比较两个对象  `

`public static boolean isNull(Object obj)  判断对象是否为null,为null 返回true,反之亦然`

`public static boolean nonNull(Object obj)    判断对象是否为null,跟isNull的结果相反`

