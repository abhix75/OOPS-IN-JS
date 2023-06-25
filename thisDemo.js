let iphone = {
    name: "Iphone 14 pro",
    price: 100000,
    description: "The new Apple 14 Pro",
    rating: 4.8,

    display() {
        console.log("First Display ",this);
    },
};

let mackbook = {
    name: "mackbook M2",
    price: 100000,
    description: "The new Apple Mackbook M2",
    rating: 4.8,

    display() {
        console.log("Second Display ",this);
    },
};

iphone.display(); //Calling display function in the context of iphone so that this is refering to the calling context.
mackbook.display(); //calling the display function in the context of mackbook so that rhsi is refering to the calling context.
console.log(this); // this will return a empty object {}
