//引入其他的模块
//语法：import xxxx from "路径"
import {foo, bar, arr} from "./module1"
import {fun, fun2} from "./module2"
import module3 from "./module3";
import $ from "jquery"

//console.log(module1, module2);

foo();
fun();
bar();
fun2();
module3.foo();

$("body").css("background","red");
