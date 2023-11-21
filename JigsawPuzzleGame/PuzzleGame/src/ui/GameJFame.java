package ui;

import javax.swing.*;

public class GameJFame extends JFrame {

	public GameJFame(){
		initJFrame();


		initJMenuBar();

		initImage();


		//让页面显示
		this.setVisible(true);
	}

	private void initImage() {
		int number = 1;
		for (int i = 0; i < 4; i++) {
			for (int j = 0; j < 4; j++) {
				//		创建一个图片ImageIcon 的对象
				ImageIcon icon = new ImageIcon("E:\\practice\\JigsawPuzzleGame\\PuzzleGame\\image\\animal\\animal3\\"+number+".jpg");
//		创建一个JLabel的对象（管理容器）
				JLabel jLabel = new JLabel(icon);
//      指定图片的位置
				jLabel.setBounds(105*j,105*i,105,105);
//		把管理容器添加到界面中
				this.getContentPane().add(jLabel);
				number++;
			}
		}



	}

	private void initJMenuBar() {
		//初始化菜单
//		创建菜单对象
		JMenuBar jb = new JMenuBar();

//		创建菜单上面的两个选项（功能  关于我们）
		JMenu functionJm = new JMenu("功能");
		JMenu aboutJm = new JMenu("关于我们");

//		创建选项下面的条目对象
		JMenuItem replayItem = new JMenuItem("重新游戏");
		JMenuItem reLoginItem = new JMenuItem("重新登录");
		JMenuItem closeItem = new JMenuItem("关闭游戏");

		JMenuItem accountItem = new JMenuItem("公众号");

//		将每一项添加到对应的选项中
		functionJm.add(replayItem);
		functionJm.add(reLoginItem);
		functionJm.add(closeItem);

		aboutJm.add(accountItem);

//		将功能添加到菜单中
		jb.add(functionJm);
		jb.add(aboutJm);

//		整个界面设置菜单
		this.setJMenuBar(jb);
	}

	private void initJFrame() {
		//设置界面的宽高
		this.setSize(603,680);
		//设置界面的标题
		this.setTitle("拼图单机版 v1.2");
		//设置界面置顶
		this.setAlwaysOnTop(true);
		//设置界面居中
		this.setLocationRelativeTo(null);
		//设置默认关闭模式
		this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
		//取消默认的居中放置，只有取消了才会按照XY轴的形式添加组件
		this.setLayout(null);
	}
}
