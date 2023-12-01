package Java.code.src.Regex;

public class Test {
	public static void main(String[] args) {

		String[] phone = {"13112345678","13712345667","139456790271"};


		for (int i = 0; i < phone.length; i++) {
			String item = phone[i];

			System.out.println(item.matches("1[3-9]\\d{9}"));
		}

	}
}
