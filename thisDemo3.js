const iphone={
    name: "iphone",
    price: 100000,
    rating: 4.7,
    display: function () {
        let iphoneRed ={
            name:"Iphone Red",
            price:110000,
            print: function () {
                console.log("display()::print(): ",this);
            },
            print2: () => {
                /** 
                * Q. What is happening with `this` keyword inside arrow function???
                 * 
                 * Ans: Inside Arrow function `this` keyword does not refers to the calling context.
                 *      By default, inside an arrow function `this` is resolved lexically.
                 *      Through lexical scoping, the `this` keyword will be resolved.
                 *      
                 *      print2() function is a arrow function so it  doesnot know about `this` keyword. we will go one step outside.
                 *      Is this  display() function actually having any idea about the `this` keyword?? 
                 *      Ans:------->Yes<--------
                 *      display() function is the normal function not the arrow function so here we have  some idea about `this` keyword that here `this` keyword actually poniting to the calling context.
                 *      and here the calling context is the iphone object.
                 */
                console.log("diplay()::print2(): ",this);
            },
        };
        iphoneRed.print();
        iphoneRed.print2();
    },

    display2: ()=>{
        let iphoneRed ={
            name:"Iphone Red",
            price:110000,
            print: function () {
                console.log("display2()::print(): ",this);
            },
            print2: () => {

                /**
                 * Q. If you make display() function as an arrow function, what will happen???
                 * 
                 * Ans: print2() function doesnot know about `this` keyword.so we will go one step outside.
                 *      Is the display2() function actually having any idea about `this` keyword?? No, because it is an arrow function.We will go one step outside.
                 *      Now youn will go to global scope, you have a global `this` object which is an empty object { }. 
                 *        so it prints ->[display2()::print2(): {}]
                 *      **So we use arrow function occaionally**
                 */
                console.log("diplay2()::print2(): ",this);
            },
        };
        iphoneRed.print();
        iphoneRed.print2();
    },
};
iphone.display();
iphone.display2();