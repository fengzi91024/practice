package Java.code.src.Game;

public class Role {
	private String name;
	private int blood;

	public Role() {
	}

	public Role(String name, int blood) {
		this.name = name;
		this.blood = blood;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getBlood() {
		return blood;
	}

	public void setBlood(int blood) {
		this.blood = blood;
	}

}
