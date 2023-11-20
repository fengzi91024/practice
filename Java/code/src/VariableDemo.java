package Java.code.src;

public class VariableDemo {
    public static void main(String[] args) {
        //1.0基本用法
//    定义变量
        int a = 10;

        System.out.println(a);

//        2.参与计算
        int b = 30;
        int c = 20;
        System.out.println(b+c);

//        3.修改变量记录的值

        a = 50;
        System.out.println(a);

        System.out.println("=================");
//        一条定义多个变量
        int d = 100,e = 200, f = 300;


        System.out.println(d+e+f);
    }
}
