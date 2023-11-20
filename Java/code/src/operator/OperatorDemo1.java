package Java.code.src.operator;

import java.util.Random;

public class OperatorDemo1 {
	public static void main(String[] args) {
		int[] arr = {1,2,3,4,5};
		Random r = new Random();

		for (int i = 0; i < arr.length; i++) {
			int randomIndex = r.nextInt(arr.length);
			System.out.println(randomIndex);
			int temp = arr[i];

			arr[i] = arr[randomIndex];

			arr[randomIndex] = temp;
		}

		for (int i = 0; i < arr.length; i++) {
			System.out.print(arr[i] + " ");
		}
	}

}
