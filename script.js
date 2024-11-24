// Function to calculate diabetes risk based on user inputs
function calculateRisk() {
    // Get the values from the form
    let age = document.getElementById("age").value;
    let bmi = document.getElementById("bmi").value;
    let familyHistory = document.getElementById("family-history").value;
    let physicalActivity = document.getElementById("physical-activity").value;
    let diet = document.getElementById("diet").value;

    // Basic validation to ensure all fields are filled
    if (age == "" || bmi == "" || familyHistory == "" || physicalActivity == "" || diet == "") {
        alert("Please fill in all fields.");
        return;
    }

    // Risk calculation logic (simplified for the example)
    let risk = 0;

    // Age factor
    if (age >= 45) {
        risk += 2;
    } else if (age >= 30) {
        risk += 1;
    }

    // BMI factor
    if (bmi >= 30) {
        risk += 3;
    } else if (bmi >= 25) {
        risk += 2;
    } else if (bmi >= 18.5) {
        risk += 1;
    }

    // Family history factor
    if (familyHistory === "yes") {
        risk += 2;
    }

    // Physical activity factor
    if (physicalActivity === "no") {
        risk += 2;
    } else if (physicalActivity === "sometimes") {
        risk += 1;
    }

    // Diet factor
    if (diet === "poor") {
        risk += 2;
    } else if (diet === "average") {
        risk += 1;
    }

    // Determine the risk level based on the total score
    let riskLevel = "";
    if (risk >= 6) {
        riskLevel = "High Risk";
    } else if (risk >= 4) {
        riskLevel = "Moderate Risk";
    } else {
        riskLevel = "Low Risk";
    }

    // Display the result
    document.getElementById("risk-level").innerHTML = "Risk Level: " + riskLevel;
}
