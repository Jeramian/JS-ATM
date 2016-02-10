var balance;

var info = document.createElement('p');
var balanceText = document.createTextNode('Your current balance is:', balance);
info.appendChild(balanceText);

function redirect()
{
	var loggedUrl = "http://jeramian.github.io/JS-ATM/logged.html";
	document.location.href = loggedUrl;
}
function errorAlert()
{
	alert("Something went wrong! Please ask for assistance");
}
function success()
{
	alert("Hey! Im working");
}
function logoutRedirect()
{
	var logoutUrl = "index.html";
	document.location.href = logoutUrl;
}
function balance()
{

}
function withdrawl()
{

}
function deposit()
{

}

function ATM()
{
	event.preventDefault();
	var accounts = {cardNumber:"123456", pin:"123", balance:"$12.00"};

	var cardNumber = document.getElementById('card').value;
	var pinNumber = document.getElementById('pin').value;

	if(cardNumber == "123456" && pinNumber == "123")
		{
			redirect();
		}
	else
		{
			errorAlert();
		}
}

function optionSelect()
{
	event.preventDefault();
	var menu =  document.getElementById('optSel').value;

	if(menu == 1)
	{
		success();
	}
	else if(menu == 2)
	{
		success();
	}
	else if(menu == 3)
	{
		success();
	}
	else if(menu == 4)
	{
		success();
	}
	else
	{
		errorAlert();
	}
}
