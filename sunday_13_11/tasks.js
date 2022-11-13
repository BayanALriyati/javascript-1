
    // Task 1


// let myNums = [2,5,100];
// let doubleValues = myNums.map(function (element) {
//   return element * 2;
// });
// console.log(doubleValues);




    //  Task 2 


    // let myNums = [2,5,100];
    // let stringItUp = myNums.map(function (element) {
    //   return element.toString();
    // });
    // console.log(stringItUp);
  



    //   Task 3
    // let myStrings =["john", "JACOB", "jinGleHeimer", "schmidt"];
    // let capitalizeNames=myStrings.map(function (element) {
    //     return element.toLocaleLowerCase();
    // });
    // console.log(capitalizeNames);


    // let myString = ["john", "JACOB", "jinGleHeimer", "schmidt"];

    // let capitalizeNames= myString.map(function (element,index ) {

    // return element[0].toUpperCase() + element.slice(1);
    // })
    //  console.log(capitalizeNames);



    //  Task  4

    // let object =([
    //        {
    //            name: "Angelina Jolie",
    //           age: 80
    //       },
    //       {
    //            name: "Eric Jones",
    //            age: 2
    //        },
    //        {
    //            name: "Paris Hilton",
    //            age: 5
    //        },
    //        {
    //            name: "Kayne West",
    //            age: 16
    //        },
    //        {
    //            name: "Bob Ziroll",
    //            age: 100
    //        }
    //             ])
        
      
    // let namesOnly= object.map(function (element) {

    //     return element.name;
    //     })
    //      console.log(namesOnly);  

 

    //   Task  5

//     let object2 =([
//         {
//             name: "Angelina Jolie",
//            age: 80
//        },
//        {
//             name: "Eric Jones",
//             age: 2
//         },
//         {
//             name: "Paris Hilton",
//             age: 5
//         },
//         {
//             name: "Kayne West",
//             age: 16
//         },
//         {
//             name: "Bob Ziroll",
//             age: 100
//         }
//              ])
     
   
//  let makeStrings= object2.map(function (element,index ,array ) {

//       if( element.age >= 18){
//            return(element.name + ' can go to The Matrix')
//       }
//       else {
//            return(element.name + ' is under age!!')
//       }
//      })
//       console.log(makeStrings);  
    
    

//      Task  6


    // let object =([
    //        {
    //            name: "Angelina Jolie",
    //           age: 80
    //       },
    //       {
    //            name: "Eric Jones",
    //            age: 2
    //        },
    //        {
    //            name: "Paris Hilton",
    //            age: 5
    //        },
    //        {
    //            name: "Kayne West",
    //            age: 16
    //        },
    //        {
    //            name: "Bob Ziroll",
    //            age: 100
    //        }
    //             ])
        
      
    // let namesOnly= object.map(function (element) {

    //     return element.name;
    //     })
    //      console.log(namesOnly);  

 

    //   Task  5

//     let object2 =([
//         {
//             name: "Angelina Jolie",
//            age: 80
//        },
//        {
//             name: "Eric Jones",
//             age: 2
//         },
//         {
//             name: "Paris Hilton",
//             age: 5
//         },
//         {
//             name: "Kayne West",
//             age: 16
//         },
//         {
//             name: "Bob Ziroll",
//             age: 100
//         }
//              ])
     
   
//  let makeStrings= object2.map(function (element,index ,array ) {

//     return('<h1>'+element.name+'</h1>'+"<h2>"+element.age+'</h2>')
      
//      })
//       console.log(makeStrings);  



//   Task  8



// let myNums = [1,-2,-3];


// let doubleValues = myNums.map(function (element , index) {
//   return element * index;
// });
// console.log(doubleValues);


//   Task   9 

// let myNums = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];


// let extractKey = myNums.map(function (element , index) {
//   return element.name;
// });
// console.log(extractKey);


//   Task  10

let myNums = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}];


let extractFullName = myNums.map(function (element , index) {
  return (element.first +" " + element.last);
});
console.log(extractFullName);
