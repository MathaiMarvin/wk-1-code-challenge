// Challenge 1: Student Grade Generator
//The code below executes a prompt for the user to input their marks on the webpage and the marks are graded accordingly 
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
        result= "Grade is: E";5
    }
    //The use of DOM and we output the result of the grade to user in html page.
    document.getElementById("demo").innerHTML=result;
}


//Challenge 2: SPEED DETECTOR (TOY PROBLEM)
function speedOfCar(speed){
    if(speed<70){
        //This returns the output of Ok when the speed is below 70
        return result = "Ok"
    }else{
           
           if (((speed-70)/5)>12){
            //for speed that generate more than 12 demerit points the output is license suspended
            return result= "License suspended";
           }else {
            //This generates the demerit points
            return result= "Demerit Points:" + Math.round((speed-70)/5);
           }
        }
}
        
console.log(speedOfCar(124));

// Challenge 3: Net Salary Calculator (Toy Problem)

//Begin by defining the variables
let individualSalary;
let benefits;
let NHIF;
let nssf;
let tax;
function calculatedSalary(individualSalary, benefits){
    let gross = individualSalary + benefits;
    let nssf = gross * 0.06;
    // calculation of tax
if (gross <= 24000) {
        tax = (gross*0.1)
    }
    else if (gross >= 32333) {
       tax = (gross*0.3)
    }
    else if (gross >= 24001) {
        tax = (gross*0.25)
    }
//NHIF deduction
        if (gross <= 5999 ){
            NHIF = (150)}
        else if (gross > 6000 && gross <= 7999) {
            NHIF = (300)}
        else if( gross > 8000 && gross <= 11999){
            NHIF = (400)}
        else if ( gross > 12000 && gross <= 14999) {
            NHIF = (500) }
        else if (gross > 15000 && gross <= 19999) {
            NHIF = (600) }
        else if(gross > 15000 && gross <= 24999) {
            NHIF =  (750)}
        else if( gross > 25000 && gross <= 29999){
            NHIF = (850)}
        else if (gross > 30000 && gross <= 34999) {
            NHIF = (900) }
        else if (gross > 35000 && gross <= 39999) {
            NHIF = (950) }
        else if (gross > 40000 && gross <= 44999) {
            NHIF =(1000) }
        else if (gross > 45000 && gross <= 49999) {
            NHIF = (1100) }
        else if  (gross > 50000 && gross <= 59999){
            NHIF = (1200) }
        else if (gross > 60000 && gross <= 69999) {
            NHIF = (1300) }
        else if (gross > 70000 && gross <= 79999) {
            NHIF = (1400) }
        else if  (gross > 80000 && gross <= 89999) {
            NHIF = (1500) }
        else if (gross > 90000 && gross <= 99999) {
            NHIF = (1600) }
        else if (gross >= 100000) {
            NHIF = (1700)}
    console.log('Gross salary:', gross)
    console.log('PAYE deductions:', tax)
    console.log('nssf deduction:', nssf)
    console.log('NHIF deduction:', NHIF)
    console.log('Taxes: PAYE + nssf + NHIF :', (nssf + tax + NHIF ))
    let netSalary = 'Net Salary:  ' + (gross - (nssf + tax + NHIF ))
    return netSalary;
}
console.log(calculatedSalary(65000,6000));