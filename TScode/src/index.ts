export{}
let arr:string[] = ["1"]
let a:number = 2


function sum(a:number,b:number):number{
    return a + b
}


let result:number =sum(12,23)

let c:unknown = 423;

// 断言
console.log(c as number);

c = "jfdsa"

// 类型守卫
if(typeof c == "string"){
    console.log(c.length);
    
}