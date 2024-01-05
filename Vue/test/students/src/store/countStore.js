import {defineStore} from "pinia";

export const useCountStore = defineStore("count",{
    //数据
    state:()=>({
        count:100,
        name:"猪八戒"
    }),

    //计算属性
    getters:{
        double:(state)=> state.count*2
    },

    //方法
    actions:{
        increment(){
            this.count++
        }
    }

})