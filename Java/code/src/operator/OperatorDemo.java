package Java.code.src.operator;

import java.util.Scanner;

public class OperatorDemo {
	public static void main(String[] args) {
////	    加法
//		System.out.println(5+6);
////	    减法
//		System.out.println(6-4);
////		乘法
//		System.out.println(5*4);
////		除法
//		System.out.println(10/3);
////      10/3 等于 3   要想有小数就要带入小数位
//		System.out.println(10.0/3);
////		取模
//		System.out.println(5%3);

//		键盘录入
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();

		for (int i = 0; i < 100; i++) {
			if( i/10%10 ==3 ||i%10==3){
				continue;
			}
			System.out.println(i);
		}
	}
}
