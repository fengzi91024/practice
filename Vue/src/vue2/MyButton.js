export default {
    data() {
        //返回对象属性
        return {

            count: 0
        }
    },

        //创建模板
        template:`<div>
        <button type="button" @click="count++">点我一下</button>
        <span>{{count}}</span>
        </div>`
}