# Welcome to {{pkg.name}} -- version {{pkg.version}}

## To install as a dependency: run npm install --save dbidwell94/vanilact

### How to use?

```javascript
/*
  Import vanilact classes! Classes are named after HTML components
  and always start with a capital letter
*/
import { Div, P, H1 } from "vanilact"; // Some of the classes available with vanilact

// Define where you want to inject your components
const injectionPoint = document.querySelector("#somewhereToInject");

/*
  Create a new Div component and give it a class and id! (all parameters are optional. 
  If no parameters are needed, constructor needs an EMPTY object)
*/

/*
 view required or optional parameters by pressing ctl(or cmd for Mac) + space in VSCode
*/

const newDiv = new Div({ className: "new-class" });

// Create a new heading component with text content and a classname

const newHeading = new H1({ text: "Hello World!", className: "hello-heading" });

// Nest the neading into the newDiv component!

newDiv.addChild(newHeading); // You can keep calling addChild multiple times without errors!

// Add the new component to the DOM!

injectionPoint.appendChild(newDiv.getElement());
```

![GitHub package.json version](https://img.shields.io/github/package-json/v/dbidwell94/vanilact?style=for-the-badge) ![GitHub issues](https://img.shields.io/github/issues/dbidwell94/vanilact?style=for-the-badge) ![GitHub top language](https://img.shields.io/github/languages/top/dbidwell94/vanilact?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/dbidwell94/vanilact?style=for-the-badge)
