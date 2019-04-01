var carPrice = 100000; 
document.getElementById('price').innerHTML = carPrice;
var interest = 0.0475;

var months;
var deposit;

$('#depositSlider').attr('max', carPrice/2);
$('#depositSlider').attr('min', carPrice/10);
$('#depositSlider').attr('value', carPrice/10);

$('#depositValue').html(carPrice/10);

// print initial results
$('#total-price').html(computeTotalPrice(12, carPrice/10));
$('#monthlyRepayment').html(computeMonthly(carPrice/10, 12));

$('#depositSlider').on('change', function(){
	deposit = $('#depositSlider').val(); 
	months = $('#monthSlider').val();

	$('#depositValue').html(deposit);

	$('#total-price').html(computeTotalPrice(months, deposit));
	$('#monthlyRepayment').html(computeMonthly(deposit, months));
});

$('#monthSlider').on('change', function(){

	deposit = $('#depositSlider').val(); 
	months = $('#monthSlider').val();

	// print changed monthy value
	$('#monthValue').html(months);

	// print results 
	$('#total-price').html(computeTotalPrice(months, deposit));
	$('#monthlyRepayment').html(computeMonthly(deposit, months));
});

function computeTotalPrice(month, deposited){
	var totalPrice = Math.round((carPrice-deposited) * Math.pow((interest + 1),month/12));
	return totalPrice;
}

function computeMonthly(deposited, month){
	var monthlyPayment = Math.round((computeTotalPrice(month, deposited)) / month);
	return monthlyPayment;
}

// Show interest on page
$('#interestRate').html(interest *100); 

