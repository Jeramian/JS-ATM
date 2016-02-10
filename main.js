function ATM()
{
	function redirect()
	{
		var loggedUrl = "logged.html";
		window.location(url);
	}
	
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
			alert("Something went wrong! Please ask for assistance");
		}

}