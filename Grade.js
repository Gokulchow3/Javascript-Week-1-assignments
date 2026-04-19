//Grade - using if else condition

function grade(score){
    switch (true) {
        case (score >= 90):
            console.log("Grade: A");
            break;
        case (score >= 80):
            console.log("Grade: B");
            break;
        case (score >= 65):
            console.log("Grade: C");
            break;
        case (score >= 50):
            console.log("Grade: D");
            break;
        default:
            console.log("Grade: E");
    }
}
grade(65)
