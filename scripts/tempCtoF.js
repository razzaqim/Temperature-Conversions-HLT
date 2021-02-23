function onDomContentLoaded(event) {
    let celToFahrForm = document.getElementById("celToFahrForm");
    celToFahrForm.addEventListener("submit", toFahr, false);
}

function toFahr(event) {
    console.log("toFahr() called");
    event.preventDefault();

	let tempInDegC = document.getElementById("tempInCelInput").value;
    let tempInDegF = ((tempInDegC / 5) * 9) + 32;

    document.getElementById("ftcCelTempSpan").innerHTML = tempInDegC;
    document.getElementById("ftcFahrTempSpan").innerHTML = tempInDegF;
}

document.addEventListener("DOMContentLoaded", onDomContentLoaded);