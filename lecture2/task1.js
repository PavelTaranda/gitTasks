var firstOperand,secondOperand;
firstOperand=prompt('Введите ваше число','');
secondOperand=prompt('Введите второе число','');
function check(a,b) {
	if(a>b){return true;}
	else return false;
}
console.log(check(firstOperand,secondOperand));
var s;
var inputString=prompt('Write your string','string not find');
function newString(someString){
	return 'Вы ввели'+" "+someString+" "+'полученая строка'+" "+someString;
}
alert(newString(inputString));
