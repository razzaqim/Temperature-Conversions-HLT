// Setup function.
// Because it looks for elements in the DOM it can only be called 
// after the DOM has been created.
function onDomContentLoaded(event) {
    let fahrToCelForm = document.getElementById("fahrToCelForm");

    // In the Fahrenheit to Celsius form:
    // When a button/input of type="submit" is pressed, call our 
    // toCelsius() function.
    fahrToCelForm.addEventListener("submit", toCelsius, false);

}

// Convert from Fahrenheit to Celsius.
function toCelsius(event) {
    console.log("toCelsius() called");

    // Prevent the form from actually being submitted anywhere.
    event.preventDefault();

    // Do conversion and display result.

	let tempInDegF = document.getElementById("tempInFahrInput").value;
    let tempInDegC = (tempInDegF - 32) * 5 / 9;

    document.getElementById("ftcFahrTempSpan").innerHTML = tempInDegF;
    document.getElementById("ftcCelTempSpan").innerHTML = tempInDegC;
}

// When the DOM is ready for us to use, call our setup function.
document.addEventListener("DOMContentLoaded", onDomContentLoaded);
