var carPrice = 100000; //set car price
$('#price').html(carPrice); //dynamically display car price
var interest = 0.0475; //set interest rate

var months;
var deposit;

//default values
$('#depositSlider').attr('max', carPrice/2);
$('#depositSlider').attr('min', carPrice/10);
$('#depositSlider').attr('value', carPrice/10);
$('#depositValue').html(carPrice/10);

// print initial results with default input
displayComputedValue(12, carPrice/10);

$('#depositSlider').on('change', function(){
	deposit = $('#depositSlider').val(); 
	months = $('#monthSlider').val();

	$('#depositValue').html(deposit); //print changed deposit value
	displayComputedValue(months, deposit); //print computed plans
});

$('#monthSlider').on('change', function(){
	deposit = $('#depositSlider').val();
	months = $('#monthSlider').val();

	$('#monthValue').html(months); //print changed monthy value
	displayComputedValue(months, deposit); //print computed plans
});

function computeTotalPrice(month, deposited){
	var totalPrice = Math.round((carPrice-deposited) * Math.pow((interest + 1),month/12));
	return totalPrice;
}

function computeMonthly(deposited, month){
	var monthlyPayment = Math.round((computeTotalPrice(month, deposited)) / month);
	return monthlyPayment;
}

function displayComputedValue(month, deposited){
	$('#total-price').html(computeTotalPrice(month, deposited));
	$('#monthlyRepayment').html(computeMonthly(deposited, month));
}

// Show interest on page
$('#interestRate').html(interest * 100);