package ui;

import javax.swing.*;
import javax.swing.border.BevelBorder;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.Random;

public class GameJFame extends JFrame implements KeyListener, ActionListener {

	//初始化数据，通过二维数组对图片进行打乱
	int[][] data = new int[4][4];
	int x = 0;
	int y = 0;

	int[][] win ={
			{1,2,3,4},
			{5,6,7,8},
			{9,10,11,12},
			{13,14,15,0}
	};

	//计数器
	int step = 0;
	//图片路径
	String path = "PuzzleGame\\image\\animal\\animal3\\";

	//		创建选项下面的条目对象
	JMenuItem replayItem = new JMenuItem("重新游戏");
	JMenuItem reLoginItem = new JMenuItem("重新登录");
	JMenuItem closeItem = new JMenuItem("关闭游戏");

	JMenuItem accountItem = new JMenuItem("公众号");

	public GameJFame(){
		//初始化界面
		initJFrame();
		//初始化菜单
		initJMenuBar();

		//初始化数据
		initData();

		//初始化图片
		initImage();



	 	//让页面显示
		this.setVisible(true);
	}

	private void initData() {
		int[] arr = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};

		Random r = new Random();
		int temp = 0;
		//打乱数组
		for (int i = 0; i < arr.length; i++) {
			int index = r.nextInt(arr.length);

			temp = arr[i];

			arr[i] = arr[index];

			arr[index] = temp;
		}

		int index = 0;
		for (int i = 0; i < data.length; i++) {
			for (int j = 0; j < data[i].length; j++) {

				if (arr[index]==0){
					x =  i;
					y =  j;
				}
				data[i][j] = arr[index];
				index++;
			}
		}


	}

	private void initImage() {

		this.getContentPane().removeAll();

		if(victory()){
			JLabel winJLabel = new JLabel(new ImageIcon("C:\\Users\\18058\\Desktop\\practice\\JigsawPuzzleGame\\PuzzleGame\\image\\win.png"));
			winJLabel.setBounds(203,283,197,73);
			this.getContentPane().add(winJLabel);
		}

		JLabel stepCount = new JLabel("步数:"+step);
		stepCount.setBounds(50,30,100,20);
		this.getContentPane().add(stepCount);

		for (int i = 0; i < 4; i++) {
			for (int j = 0; j < 4; j++) {
				int num = data[i][j];
				//		创建一个图片ImageIcon 的对象
				ImageIcon icon = new ImageIcon(path+num+".jpg");
//		创建一个JLabel的对象（管理容器）
				JLabel jLabel = new JLabel(icon);
//      指定图片的位置
				jLabel.setBounds(105*j+83,105*i+134,105,105);
//		把管理容器添加到界面中

				jLabel.setBorder(new BevelBorder(BevelBorder.RAISED));
				this.getContentPane().add(jLabel);

			}
		}

		JLabel background = new JLabel(new ImageIcon("PuzzleGame\\image\\background.png"));

		background.setBounds(40,40,508,560);
		this.getContentPane().add(background);

		//刷新界面

		this.getContentPane().repaint();
	}

	private void initJMenuBar() {
		//初始化菜单
//		创建菜单对象
		JMenuBar jb = new JMenuBar();

//		创建菜单上面的两个选项（功能  关于我们）
		JMenu functionJm = new JMenu("功能");
		JMenu aboutJm = new JMenu("关于我们");



//		将每一项添加到对应的选项中
		functionJm.add(replayItem);
		functionJm.add(reLoginItem);
		functionJm.add(closeItem);

		aboutJm.add(accountItem);

		//给条目绑定事件
		replayItem.addActionListener(this);
		reLoginItem.addActionListener(this);
		closeItem.addActionListener(this);
		accountItem.addActionListener(this);



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

		this.addKeyListener(this);
	}

	@Override
	public void keyTyped(KeyEvent e) {

	}

	@Override
	public void keyPressed(KeyEvent e) {
		int code = e.getKeyCode();
		if(code==65){
			this.getContentPane().removeAll();

			JLabel all = new JLabel(new ImageIcon(path+"all.jpg"));
			all.setBounds(83,134,420,420);
			this.getContentPane().add(all);

			JLabel background = new JLabel(new ImageIcon("PuzzleGame\\image\\background.png"));

			background.setBounds(40,40,508,560);
			this.getContentPane().add(background);

			this.getContentPane().repaint();
		}
	}

	@Override
	public void keyReleased(KeyEvent e) {

		if(victory()){
			return;
		}

		int code = e.getKeyCode();
		switch (code){
			case 37:
			if(y<3){
				data[x][y] = data[x][y+1];
				data[x][y+1] = 0;
				y++;
				step++;
			}
			initImage();
			break;
			case 38:
				if (x<3){
					data[x][y] = data[x+1][y];
					data[x+1][y]=0;
					x++;
					step++;
				}
				initImage();
				break;
			case 39:
				if(y>0){
					data[x][y] = data[x][y-1];
					data[x][y-1] = 0;
					y--;
					step++;
				}
				initImage();
				break;
			case 40:
				if(x>0){
					data[x][y] = data[x-1][y];
					data[x-1][y] = 0;
					x--;
					step++;
				}
				initImage();
				break;
			case 65:
				initImage();
				break;

			case 87:
				data = new int[][]{
						{1,2,3,4},
						{5,6,7,8},
						{9,10,11,12},
						{13,14,15,0}
				};
				initImage();
				break;
		}
	}


	//判断data 数组中的数据是否win 数组中相同
	//如果全部相同，返回true 否则返回false
	public boolean victory(){
		for (int i = 0; i < data.length; i++) {
			//i 依次表示二维数组 data 里面的索引
			//data[i]:依次表示每一个一维数组
			for (int j = 0; j < data[i].length; j++) {
				if(data[i][j] != win[i][j]){
					return false;
				}
			}
		}

		return true;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();

		if(obj== replayItem){
			//计步器清零
			step = 0;
			//初始化数据
			initData();
			//重新加载图片
			initImage();
		} else if (obj == reLoginItem) {

			this.setVisible(false);

			new LoginJFame();

		} else if (obj == closeItem) {

			System.exit(0);

		}else if (obj == accountItem){
			//创建一个弹框
			JDialog jDialog = new JDialog();
			// 创建一个管理容器
			JLabel jLabel = new JLabel(new ImageIcon("\\PuzzleGame\\image\\about.png"));
			// 设置位置和宽度
			jLabel.setBounds(0,0,258,258);
			// 把图片添加到弹框中
			jDialog.getContentPane().add(jLabel);
			//设置弹框大小
			jDialog.setSize(344,344);
			//置顶
			jDialog.setAlwaysOnTop(true);
			jDialog.setLocationRelativeTo(null);
			//不关闭就无法操作下面的界面
			jDialog.setModal(true);
			// 让弹框显示出来
			jDialog.setVisible(true);
		}

	}
}
