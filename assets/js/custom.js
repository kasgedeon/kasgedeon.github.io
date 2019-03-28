var carPrice = 100000; 
document.getElementById('price').innerHTML = carPrice;
var interest = 0.0475;

var months;
var deposit;

$('#depositSlider').attr('max', carPrice/2);
$('#depositSlider').attr('min', carPrice/10);
$('#depositSlider').attr('value', carPrice/10);


document.getElementById("depositValue").innerHTML = carPrice/10;

// print initial results
document.getElementById("total-price").innerHTML = computeTotalPrice(12, carPrice/10);
document.getElementById("monthlyRepayment").innerHTML = computeMonthly(carPrice/10, 12)

document.getElementById("depositSlider").addEventListener("change", function(){
	deposit = document.getElementById("depositSlider").value;
	months = document.getElementById("monthSlider").value;

	document.getElementById("depositValue").innerHTML = deposit;
	
	// print results 
	document.getElementById("total-price").innerHTML = computeTotalPrice(months, deposit);
	document.getElementById("monthlyRepayment").innerHTML = computeMonthly(deposit, months)
});

document.getElementById("monthSlider").addEventListener("change", function(){

	months = document.getElementById("monthSlider").value;
	deposit = document.getElementById("depositSlider").value;

	// print changed monthy value
	document.getElementById("monthValue").innerHTML = months;

	// print results 
	document.getElementById("total-price").innerHTML = computeTotalPrice(months, deposit);
	document.getElementById("monthlyRepayment").innerHTML = computeMonthly(deposit, months)
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
document.getElementById("interestRate").innerHTML = interest *100;

// var totalPrice = carPrice * Math.pow((interestRate + 1),months/12);
// var monthlyPayment = (totalPrice-deposit) / months; 

// Show Total price on page and monthly payment
// document.getElementById("total-price").innerHTML = totalPrice;
// document.getElementById("monthlyRepayment").innerHTML = monthlyPayment;





// $(document).ready(function(){
//     $("#depositSlider").slider();
// 	$("#depositSlider").on("slide", function(slideEvt) {
// 		$("#depositSliderSliderVal").text(slideEvt.value);
// 		});
//   });