
1
function tellFortune(jobTitle, geoLocation, partners, children) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partners + ' ' + ' with ' + children + 'children .';
    console.log(future);
}

tellFortune('engineer', 'aqaba', 'noor', 3);
tellFortune('doctor', 'kark', 'fatmia', 7);
tellFortune('teacher', 'amman', 'ashwaq', 0);


// // 

2
function calculateDogAge( age) {
    var result= 7*age ;
    console.log('Your doggie is '  + result +  ' years old in dog');
}

calculateDogAge(3);
calculateDogAge(7);
calculateDogAge(8);


// // 

3
function calculateSupply ( age , amount) {
    var maxage= 100;
    var result=(amount * 365) * (maxage - age)
    console.log('You will need '  + result +  ' cups of tea to last you until the ripe old age of 100');
}

calculateSupply (27 , 6);
calculateSupply (70 , 6);


// // 

4
function greet ( name) {
     var greet='Hello ' + name
     console.log( greet );
}

greet ("Bayan");
greet ("Ahmad");


// // // 

5
function double(i) {
    return 2 * i;
  }
  
  function double(a) {
    return 2 * a;
  }
  double(7)
  
  function double(i) {
    return 2 * i;
   
  }
  double()


// // // 

// // 6




7
function cube( number ) {
    var ruslt= (Math.pow(number,3)) ;
    console.log(ruslt);
}

cube(3);
cube(7);


// // 

8

function multiplyBy(num1,num2)
{
        result=num1*num2
        console.log(result);
}   
// multiplyBy(prompt(),prompt())
multiplyBy(100,50)
multiplyBy(10,2)


// // 

9
function canIGetADrivingLicense (age) {

    if (age >= 20){

        console.log(`yes you can`)
    }
    else if (age < 20) {


        i= 20-age
        console.log(`please come back after ${i} years to get one`)
    }

}
// canIGetADrivingLicense(prompt())
canIGetADrivingLicense (30)
canIGetADrivingLicense (10)

// // // 

10

function sameLength (a , b) {

    if (a.length == b.length){

        console.log(`True`)
    }
    else {
        console.log(`False`)
    }

}
// sameLength(prompt() , prompt())
sameLength('tree' , 'clue')
sameLength('tree' , 'car')

// // // 

11

function largerNubmer (number1 , number2) {

    if (number1 > number2){

        console.log(number1)
    }
    else {
        console.log(number2)
    }

}
// largerNubmer(prompt() , prompt())
largerNubmer( 1 , 2)


// // // 

12

function smallerNubmer (number1 , number2 ,number3) {

    if ((number1 < number2) && (number1 < number1)){

        console.log(number1)
    }
    else if ((number2 < number3) && (number2 < number1))
        {
        console.log(number2)
    }
    else
        console.log(number3)
    

}
// smallerNubmer(prompt() , prompt() , prompt())
smallerNubmer( 20 , 10 , 8)


// // 

// 14

// Ex: longerString("air","school","car","by","github")

let a="air";
let b="school";
let c="car";
let d="by";
let e="github";
function longerString(a,b,c,d,e){
if ((a.length > b.length) &&  (a.length > c.length) && (a.length > d.length) && (a.length > e.length)){
    console.log (a)
}
else if ((b.length > a.length) && (b.length > c.length) && (b.length > d.length) && (a.length > e.length)){
    console.log (b)
}
else if ((c.length > a.length) && (c.length > b.length) && (c.length > d.length) && (c.length > e.length)){
    console.log (c)
}
else if ((d.length > a.length) && (d.length > b.length) && (d.length > c.length) && (d.length > e.length)){
    console.log (d)
}
else {
    console.log (e)
}
}
longerString(a,b,c,d,e)








