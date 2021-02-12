// First of all, create a fucntion to calculate the tip

function tipCalculator () {
    let billAmount_div = document.getElementById("bill-amount").value;
    let serviceQuality_label = document.getElementById("service-quality").value;
    let peopleNum_form = document.getElementById("num-people").value;

    //Make sure input is valid
    if (billAmount_div === " " || serviceQuality_label === 0) {
        alert("Please enter valid values");
        return;
    }

    //Check to see if number of people are valid
    if (peopleNum_form === " " || peopleNum_form <= 1) {
        peopleNum_form = 1;
        // This hides the word  "each" if number of people bar is empty or equals 1
        document.getElementById("each").style.display = "none";
    }
    else {
        // This shows it in block form
        document.getElementById("each").style.display = "block";
    }

    //Now to calculate the tip
    let total = (billAmount_div * serviceQuality_label) / peopleNum_form;
    //round to two decimal places
    total = Math.round(total * 100)/100;
    //Allows two digits after decimal point
    total = total.toFixed(2);

    //Now display the tip on browser
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
};

//hide the tip amount when it is loading
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Now set calculate-button to call function on click
document.getElementById("calculate-button").onclick = function () {
    tipCalculator();
};