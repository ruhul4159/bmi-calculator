// Get the input fields and the button
var weightInput = document.getElementById("weightInput");
var heightInput = document.getElementById("heightInput");
var calculateBtn = document.getElementById("calculateBtn");

// Add event listener to the button
calculateBtn.addEventListener("click", function() {
	// Get the values from the input fields
	var weight = parseFloat(weightInput.value);
	var height = parseFloat(heightInput.value) / 100; // Convert height from cm to m

	// Calculate the BMI
	var bmi = weight / (height * height);

	// Display the result
	document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(1);
});
