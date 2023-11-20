package Java.code.src.operator;

public class Demo4 {
	public static void main(String[] args) {
		int[] arr = {1,2,3,4,5,6};
		array(arr);
	}
	public static void array(int[] arr){
		System.out.print("[");
		for (int i = 0; i < arr.length; i++) {
			if(i == arr.length -1){
				System.out.print(arr[i]);
			}else {
				System.out.print(arr[i]+",");
			}
		}
		System.out.print("]");
	}
}
