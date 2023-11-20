package Java.code.src.operator;

public class Demo3 {
	public static void main(String[] args) {
		double sum = test(4.5,5.5);
		double sum2 = test(5.5,5.4);
		if(sum > sum2){
			System.out.println("sum 的面积大于sum2");
		}else {
			System.out.println("sum2的面积大于sum");
		}
	}
	public static double test(double a,double b){
		double sum = a*b;

		return sum;
	}
	public static int test(int a,int b){
		int sum = a*b;

		return sum;
	}
}
