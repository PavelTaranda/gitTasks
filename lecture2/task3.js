function checkNullandUndefined(randString){
if (typeof randString === 'undefined')
	{
   		alert('undefined');
	}
	else if(typeof(randString)=== null)
	{
		alert('null');
	}
	else alert('Другой тип');
}
checkNullandUndefined(inputString);