<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#welcome-to-pkgname----version-pkgversion)

# ➤ Welcome to @dbidwell94/vanilact -- version 1.0.30

### To install as a dependency, run: npm install --save dbidwell94/vanilact

### How to use?

```javascript
/*
  Import vanilact classes! Classes are named after HTML components
  and always start with a capital letter
*/
import { Div, P, H1 } from "@dbidwell94/vanilact"; // Some of the classes available with vanilact

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

Vanilact will NOT work without being built down to ES6 syntax. For that, it is recommended
to you a package bundler such as ![parcel-bundler](https://github.com/parcel-bundler/parcel)

![GitHub package.json version](https://img.shields.io/github/package-json/v/dbidwell94/vanilact?style=for-the-badge) ![GitHub issues](https://img.shields.io/github/issues/dbidwell94/vanilact?style=for-the-badge) ![GitHub top language](https://img.shields.io/github/languages/top/dbidwell94/vanilact?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/dbidwell94/vanilact?style=for-the-badge) [![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](https://www.firsttimersonly.com/)
