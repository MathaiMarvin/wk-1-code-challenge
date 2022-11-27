// Challenge 1: Student Grade Generator
function grade() {
    //A variable result that will store what needs to be outputted for the different categories of marks
    let result;
    //A varaible with the prompt asking the user for their grade
    let marks = prompt("Please Enter Your Marks"); 

    //An if statement to help group the mark passed by user to corresponding grade 
    if (marks > 79 && marks <=100){
        result = "Grade is: A";
    }else if(marks>= 60 && marks <= 79){
        result = "Grade is: B";
    }else if(marks>49 && marks <= 59){
        result = "Grade is: C";
    }else if(marks >= 40 && marks <=49){
        result = "Grade is: D";
    }else if(marks <40 ){
        result= "Grade is: E";
    }
    //The use of DOM and we output the result of the grade to user in html page.
    document.getElementById("demo").innerHTML=result;
}


//Challenge 2: SPEED DETECTOR (TOY PROBLEM)
function speedOfCar(speed){
    if(speed<70){
        return result = "Ok"
    }else{
           
           if (((speed-70)/5)>12){
            return result= "License suspended";
           }else {
            return result="Points:" + ((speed-70)/5);
           }
        }
}
        
console.log(speedOfCar(131));
