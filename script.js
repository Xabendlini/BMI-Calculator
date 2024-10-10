const btnEl = document.getElementById("btn");
const bmiResultEl = document.getElementById("bmi-result"); 
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = parseFloat(document.getElementById("height").value) / 100; 
  const weightValue = parseFloat(document.getElementById("weight").value);

  if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
    bmiResultEl.textContent = "Please enter valid height and weight values.";
    weightConditionEl.textContent = "";
    return;
  }

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiResultEl.textContent = `Your BMI is: ${bmiValue.toFixed(2)}`;

  if (bmiValue < 18.5) {
    weightConditionEl.textContent = "Underweight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.textContent = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.textContent = "Overweight";
  } else if (bmiValue >= 30) {
    weightConditionEl.textContent = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);