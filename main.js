let weightInPounds = 170;
let weightInKgs = 0;
let heightInInches = 71;
let heightInCm = 0;;
let age = 29;
let gender = "male";
let activityLevel = 1.375;
let BMR = 0;
let TDEE = 0;

//Convert pounds to Kgs
function poundsToKgs(weightInPounds){
    weightInKgs = weightInPounds / 2.2;
    return weightInKgs;
}

//Convert height in Inches to CM
function heightToCm(heightInInches){
    heightInCm = heightInInches * 2.54;
    return heightInCm;
}

//Men's BMR equation
function mensBmr(weightInKgs, heightInCm, age){
    BMR = 66.47 + (13.75 * weightInKgs) + (5.003 * heightInCm) - (6.755 * age);
    document.querySelector('.answer').innerHTML = BMR;
}

//Women's BMR equation
function womensBmr(weightInKgs, heightInCm, age) {
    BMR = 655.1 + (9.563 * weightInKgs) + (1.850 * heightInCm) - (4.676 * age);
    return BMR;
}

mensBmr(weightInKgs, heightInCm, age);