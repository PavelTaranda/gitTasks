var s;
var inputString=prompt('Введите вашу строку','');
function newString(someString){
	return 'Вы ввели'+" "+someString+" "+'полученая строка'+" "+someString;
}
console.log(newString(inputString));