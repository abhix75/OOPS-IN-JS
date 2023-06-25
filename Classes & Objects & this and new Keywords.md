# Object-Oriented Programming System in JavaScript

# Classes & Objects


- #`BluePrint`--> Mental Model of how real life entities will look like.

```bash
Product        -
--> name         |
--> price        |  -----> Data Members 
--> rating       |         (PROPERTIES)
--> description  |
               -

  buyProduct() |  WishListProduct() | AddToCartProduct() ] ----> Member Function
        (BEHAVIOR)
  ```

  - In technical terms, the `BluePrint` is called as `Class`.

  - Using the `BluePrint` we can create a multiple `Objects`.

  - We can ```Uniquely``` identify two objects based on their ```Properties```, but their ```behavior``` is the same.

  ```

  class <name> {
    <Properties(Data Member)>
    <Behavior(`Member Function`)>
  }

  ```

- Using this above blueprint we can create real life entities.

- To create and manage entities we have 2 new keywords `new` and `this`.

## `this` Keyword

- Except 1 case, `this` keyword always refers to the calling site/context.

> That 1 case is : Inside arrow(=>) function `this` keyword doesnot refers to the calling context.
