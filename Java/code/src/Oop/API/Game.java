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
