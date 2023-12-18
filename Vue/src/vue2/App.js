import MyButton from "./components/MyButton";
//创建一个根组件
export default {
    data(){
        //返回对象属性
        return {
            message:"我爱Vue",
        }

    },
    //注册子组件
    components:{
        MyButton
    },
    //创建模板
    template:`
      <h1>{{message}}</h1>
      <MyButton></MyButton>
    `
}