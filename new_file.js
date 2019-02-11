
/*
//js对象第一种封装
function createObject(name,sex){
var obj = new Object();
obj.name = name;
obj.sex= sex;
obj.showInfo = function(){
	document.write("姓名:"+this.name+"----性别-"+this.sex);
	console.log("姓名:"+this.name+"----性别-"+this.sex);
}
return obj;
}*/


//构造函数进行封装
/*var function Student(name,bjclass){
	this.name = name;
	this.bjclass = bjclass;
	this.showInfo = function(){
	document.write("姓名:"+this.name+"----性别-"+this.bjclass);
	//console.log("姓名:"+this.name+"----性别-"+this.sex);
}
}*/

function Animal(name){
	this.name = name;
	this.books = [js];
	this.sleep = function(){
		console.log("name"+this.name);
	}
}


Animal.prototype.eat = function(food){
	console.log(this.name+"正在吃"+food);
}

Animal.prototype.showBooks = function(books){
	console.log(this.books);
}

function Cat(){
	
}

Cat.prototype = new Animal();

//寄生组合继承
function Cat(name){
	Animal.call(this.name);
}

var pro = Object.create(Animal.prototype);	//复制Animal.prototype对象
pro.constructor = Cat;	//修改constructor的指向
Cat.prototype = pro;	//吧子类的portotype指向父类
