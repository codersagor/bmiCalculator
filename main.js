function calculateBMI() {
    let weight = parseFloat(document.getElementById('weightInput').value);
    let height = parseFloat(document.getElementById('heightInput').value);
    let result = document.getElementById('result');
    console.log(typeof (weight), typeof (height))
    let bmi = weight / (height * height);

    result.innerHTML = bmi.toFixed(2)

}