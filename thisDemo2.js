const iphone = {
    name: "Iphone 14 pro",
    price: 100000,
    description: "The new Apple 14 Pro",
    rating: 4.8,

    display: () => {
        /**Inside arrow function  `this` keyword doesnot refers to the calling context */
        console.log(this);
    },
};

const mackbook = {
    name: "mackbook M2",
    price: 100000,
    description: "The new Apple Mackbook M2",
    rating: 4.8,

    display: function () {
        console.log(this);
    },
};

iphone.display(); 
mackbook.display(); 

