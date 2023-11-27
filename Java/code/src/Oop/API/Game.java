package Java.code.src.Oop.API;

public class Game {

	String name ;

	int age;


	public Game() {
	}

	public Game(String name, int age) {
		this.name = name;
		this.age = age;
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

	/**
	 * 获取
	 * @return age
	 */
	public int getAge() {
		return age;
	}

	/**
	 * 设置
	 * @param age
	 */
	public void setAge(int age) {
		this.age = age;
	}

	public String toString() {
		return "Game{name = " + name + ", age = " + age + "}";
	}
	
}
