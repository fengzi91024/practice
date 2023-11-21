package ui;

import javax.swing.*;

public class LoginJFame extends JFrame {

	public LoginJFame(){
		this.setSize(488,430);
		//设置界面的标题
		this.setTitle("拼图 登录");
		//设置界面置顶
		this.setAlwaysOnTop(true);
		//设置界面居中
		this.setLocationRelativeTo(null);
		//设置默认关闭模式
		this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
		this.setVisible(true);
	}
}
