// Challenge 1: Student Grade Generator
function grade() {
    let result;
    let marks = prompt("Please Enter Your Marks");
    if (marks > 79){
        result = "A";
    }else if(marks>= 60 && marks <= 79){
        result = "B";
    }else if(marks>49 && marks <= 59){
        result = "C";
    }else if(marks >= 40 && marks <=49){
        result = "D";
    }else if(marks <40 ){
        result= "E";
    }
    document.getElementById("demo").innerHTML=result;
}

