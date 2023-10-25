// numbers practice
// const max = 57
// const actual = max - 13
// const percentage = actual/max
// console.log(`My percentage is now ${percentage}`);

// Data types

// let message = "hello";
// message = 124555;
// console.log(message)

// let isGrater= 4 < 1;

// alert(isGrater)

// const button = document.querySelector("button");
// function greet(){
//     const name = prompt("What is your name");
//     const greeting = document.querySelector("greeting");
//     greeting.textContent = `hello ${name}, nice to see you! nice to see you!`;

// }
//         button.addEventListener("click", greet);

// const ATAFORM = ["immamu","aliyu", "ismail", "barde"];
// const text = ATAFORM.substr(3, 4);
// console.log(text)

// let str = "Hello!";
// let newStr = str.substring(0, 12);
// console.log(newStr);

// let str = "Hello, hello, hello!";
// let newStr = str.replace(/hello/gi, "yyy");
// console.log(newStr);

// let str = "hello";
// let paddedStr = str.padStart(10, " ");
// console.log(paddedStr); // Output: "     hello"

// paddedStr = str.padEnd(10, "-");
// console.log(paddedStr); // Output: "hello-----"

// function MyClass(parameter1, parameter2) {
//     this.property1 = parameter1;
//     this.property2 = parameter2;
//   }

// const hour = new Date().getHours();

// document.getElementById("demo").innerHTML = greeting;

// let age = "myage";

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "monday";
//     break;
//   case 1:
//     day = "tuesady";
//     break;

//   case 2:
//     day = "wednesday";
//     break;

//   case 3:
//     day = "thursday";
//     break;

//   case 4:
//     day = "friday";
//     break;

//   case 5:
//     day = "saturday";
//     break;

//   case 6:
//     day = "sunday";
//     break;

//     default:
//         day = "wrong method"
// }

// console.log(day);


// const myText = "I am a string";
   
// const newString = myText.replace("string", "developer");
// console.log(newString)

// const myArray = ["i", "love", "chocolate", "frogs"];
// const joinString = myArray.join("");
// console.log(joinString)
 
// const myNumber = Math.random();
// console.log(myNumber)

        // function myfunction(){
        //     alert("hello")
        // }
    


    //    function hello(name = "chris"){
    //     console.log(`hello ${name}`)
    //    }

    //    hello("aliyu")  

    // (function () {
    //     alert("hello");
    // });

    // console.log(function)

    // function logKey(event){
    //     console.log(`your pressed "${event.key}".`);
    // }

    // textBox.addEventListener("keydown", function (event) {
    // console.log(`your pressed "${event.key}".`);
    // });

    // function foo(){
    //     console.log("hello");
    // }

    // const f = function foo(){
    //     console.log("hello");
    // }

    // f()

//   const name =   function greet(name) {
//         console.log(`Hello, ${name}!`);
//       }
//       greet();

        // function foo(){
        //     console.log("hello")
        // };

        // const f = function foo(){
        //     console.log("hello")
        // };
        // f()
    //    const original = [1, 2, 3];
    //    const doubled = original.map(item => item * 2);
    //    console.log(doubled)
    
    // const textbox = document.querySelector("#text");
    // const Output = document.querySelector("#output");

    // textbox.addEventListener("keydown", (event) => {
    //     Output.textContent = `your pressed "${event.key}".`;
    // });

        // function a(){
        //     const y = 2;
        //     output(y)
            
        // }
      

        // function b(){
        //     const z = 3;
        //     output(z)
        // }


        // const myText = "The weather is cold";
        // const newString = myText.replace("cold", "masha ALLAH");
        // console.log(newString)

        
    //    function add7(number){
    //     return number + 7
    
    //    }
        // function multiply(number1, number2)
        // {
        //     return number1 * number2;
        // }
        // console.log(multiply)
     
    //     function capitalize(string) {
    // return string.charAt(0).toUpperCase() + 
    // string.slice(1).toLowerCase();
    //     }
    //     console.log(capitalize("hELLO wORLD"));

    // function lastLetter(string) {
    //     return string.charAt(string.length - 1);
    // }

            // project 1
    // const panels = document.querySelectorAll('.panel');

    // panels.forEach(panel =>{
    //     panel.addEventListener('click', () => {
    //         removeclasses()
    //         panel.classList.add('active')

    //     })
    // })

    //         function removeclasses(){
    //             panels.forEach(panel => {
    //                 panel.classList.remove('active')
    //             } )
    //         }

            //  const prograssline = document.querySelector('#progress-line');
            //  const circles  = document.querySelectorAll('.circle');
            //  const prev = document.querySelector('.prev');
            //  const next = document.querySelector('.next');

            //  let currentActive = 1;  

            //  next.addEventListener('click', () => {
            //     currentActive++
            //     if(currentActive > circles.length){
            //         currentActive = circles.length
            //     }
                    
            //         update()
            //  })


            //  prev.addEventListener('click', () => {
            //     currentActive--
            //     if(currentActive < 1){
            //         currentActive = 1
            //     }
               
            //         update()
            //  })

            //  function update(){
            //     circles.forEach((circle, idx) => {
            //         if(idx < currentActive){
            //             circle.classList.add('active')
            //         }else{
            //             circle.classList.remove('active')
            //         }
            //     }) 

            //      const actives = document.querySelectorAll('.active')
            //      prograssline.style.width = (actives.length -1) / (circles.length -1 ) * 100 + "%"

            //      if(currentActive === 1){
            //         prev.disabled = true
                    

                 
            //  }else if(currentActive === circles.length){
            //     next.disabled = true
            //  } else{
            //     prev.disabled = false
            //     next.disabled = false
            //  }
            //  }


        //     let answer = parseInt(prompt("please enter the number you woild like ti fizzbuzz to:"));
        //    for(let i = 1; i <= answer; i++){
        //    if (i % 3 === 0 && i % 5 === 0) {
        //     console.log("fizzBuzz");
        //    } else if (i % 3 === 0){
        //     console.log("Fizz")
        //    }  else if(i % 5 === 0){
        //     console.log("Buzz");
           
            
            
        //    } else{
        //     console.log(i)
        //    }
        //    }

                     

        
    

       





    

          
      