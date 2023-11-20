package Java.code.src.Game;

import java.util.ArrayList;

public class Play {
    public static void main(String[] args) {
        ArrayList<Role> list= new ArrayList<>();

        Role r1 = new Role("张三",100);
        Role r2 = new Role("李四",100);


//        向集合添加数据
        list.add(r1);
        list.add(r2);
//      查询集合
        select(list);
        System.out.println("=============删除后");

//    删除元素
        list.remove(1);

        select(list);

    }
    public static void select(ArrayList<Role> list){
        //      遍历集合
        for (int i = 0; i < list.size(); i++) {
            if (list.size()==0){
                System.out.println("空数组");
            }
            Role q =list.get(i);
            System.out.println(q.getName()+","+q.getBlood());
        }
    }

}
