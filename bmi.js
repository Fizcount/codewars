function bmi(weight, height) {
    let heights = height * height;
    let bmi = weight / heights;
    if (bmi <= 18.5){
        return "Underweight"
    }else if(bmi <= 25){
        return "Normal"
    }else if (bmi <= 30){
        return "Overweight"
    } else if (bmi > 30){
        return "Obese"
    }

}