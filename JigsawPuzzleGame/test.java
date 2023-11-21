import java.util.Random;

public class test {
	public static void main(String[] args) {
		//打乱数组
		//数组
		int[] arr = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};

		//随机数
		Random r = new Random();

		for (int i = 0; i <arr.length; i++) {
			//创建一个随机索引
			int index = r.nextInt(arr.length);

			int temp = arr[i];
			arr[i] = arr[index];
			arr[index] = temp;
		}

		//遍历数组
		
	}
}
