# Object

- object 是Java中的顶级父类。所有的类都直接或间接的继承Object类
- object类中的方法可以被所有子类访问。



##### Object的构造方法

`public Object 空参构造`



##### Object的成员方法

`public String toString()    返回对象的字符串表示形式`

- 重写toString，以便查看详细的对象数据

```java
package Java.code.src.Oop.API;

public class Game {

	String name ;

	public Game() {
	}

	public Game(String name) {
		this.name = name;
	}

	/**
	 * 获取
	 * @return name
	 */
	public String getName() {
		return name;
	}

	/**
	 * 设置
	 * @param name
	 */
	public void setName(String name) {
		this.name = name;
	}

	public String toString() {
		return "Game{name = " + name + "}";
	}
}

```



`public boolean equals(Object obj)   比较俩个对象是否相等`

`protected Object clone(int a)   对象克隆`





#### 对象克隆

> 把A对象的属性值完全拷贝给B对象，也叫对象拷贝，对象复制

- 浅克隆
- `protected Object clone(int a)   对象克隆`
- clone 只能在本包和其他包的子类，因为不能在lang包下写所以需要在子类重写

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

- 深拷贝

    基本数据类型拷贝，字符串复用，引用数据类型会重新创建新的

    运用数据转换，Json 转换为深拷贝

    ```java
    Gson gson = new Gson();
    
    String s = gson.toJson(u1);
    
    User user = gson.fromJson(s,User.class);
    
    sout(user);
    ```

    

##### Objects 

- Objects 是一个工具类，提供了一些方法去完成一些功能。

`public static boolean equals(Object a,Object b)  先做非空判断，比较两个对象  `

`public static boolean isNull(Object obj)  判断对象是否为null,为null 返回true,反之亦然`

`public static boolean nonNull(Object obj)    判断对象是否为null,跟isNull的结果相反`

