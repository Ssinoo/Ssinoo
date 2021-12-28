let boo: boolean = true

// 数组 
let arr: Array<number> = [1, 2, 3]
let arr1: number[] = [1, 2, 3]

// null 
let _null: null = null

// ts中的或
let some_var: number | string | boolean = 123

// ts 与


// any
let any_var: any = 123

//void 
function fun(): void {

}
// 必须返回boolean值
function fun1(): boolean {

  return true

}

// 对象。使用接口来定义对象的类型
interface Iperson {
  name?: string  // 加? 是表示name可有
  age: number
}
let obj: Iperson = {
  name: "张三",
  age: 20,
}

// 接口继承
interface IA extends Iperson {
  like: boolean
}
let person: IA = {
  age: 12,
  like: true
}

// 任意k ： v
interface Iperson2 {
  [propNamr: string]: any
}
let person1: Iperson2 = {
  age: 12
}

// 枚举
enum Color {
  red,
  green,
  yellow
}
// 拿到的是索引
console.log(Color.red); 
// 反向映射,拿到的是value
console.log(Color[0]);

// 泛型
function func<T>(arg:T):void{

}

func<number>(123)