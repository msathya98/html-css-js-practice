# html-css-js-practice

## HTML

### 1.Types of elements inn HTML?
-There are mainly two types in HTML elements 
-1.Block-level Elements

-A block-level element always starts on a new line. Block-level element always takes up the full width available. It has a top and a bottom ---margin, whereas an inline element does not.

-Example: div, address, h1, aside, main, nav etc


- 2.Inline Elements

-An inline element does not start on a new line. An inline element only takes up as much width as necessary. 
-Example:

<span> tag is good example for Inline-element.
 a, button, label, textarea, input etc.

### 2 What are semantic Elements- significance?
1. Semantic Elements in HTML

A semantic element clearly describes its meaning to both the browser and the developer.
Non-semantic elements tells nothing about the content. Like <div> <span>
But in HTML there are some semantic elements that can be used to define different parts of a web page:  

Example: <article>, <details>, <footer>, <header>, <main>, <nav> etc

### 3.Why <!Doctype html>? What happens if we didn’t Include it?
<!Doctype html> is the line of code written in the HTML program. It tells the web browser about the version of that html5. For Each html versions this code is different.

If document type is not included, browser will go to Quirks mode. Quirks mode depends upon the web browser version, If it  is older version then this will not support HTML5 tags. 

### 4. How a webpage loaded. Architecture of Flow?

* First You type maps.google.com or any webpage into the address bar of your browser.

* The browser checks the cache for a DNS record to find the corresponding IP address of maps.google.com.
First it checks the browser cache, if it is not found then checks in OS cache the on Router cache,  if  still it not found that IP address then it checks on ISP cache.

* If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server that hosts maps.google.com.

*  The browser initiates a TCP connection with the server.
* Browser will establish TCP connection to send data packets between computer and the server.

* The browser sends an HTTP request to the webserver.

* The server handles the request and sends back a response.

* Then the server sends out an HTTP response which contains the web page we requested.

### 5.Local Storage and Cookies:
Cookies:

A cookie is a small amount of data that are stored on a user’s system or web browser. The main aspect of a Cookie is to remember and store information about you, similar to a precedence file created by the software application. Cookies save that data which needs to be sent back to the server with next requests. The expiration of Cookie depending on the expiration duration and can be set from server-side and client-side too. 

Local Storage:

A hard drive or solid state drive directly attached to the device being referenced. Local Storage would be used to contrast the storage in that unit from the storage on servers in the local network or on the Internet (like cloud storage). This stores data without the expiry time limit, and gets erased via JavaScript, or you can also clear it by deleting the Browser Cache.

### Name the headers in an http request?
HTTP headers:

The HTTP headers are used to pass additional information between the clients and the server through the request and response header. 

There are four types of HTTP headers:

General Header: This type of headers applied on Request and Response headers both but with out affecting the database body.

Request Header: This type of headers contains information about the fetched request by the client.

Response Header: This type of headers contains the location of the source that has been requested by the client.

Entity Header: This type of headers contains the information about the body of the resources like MIME type, Content-length.

### Geolocation API?
The Geolocation is one of the best HTML5 API which is used to identify the user's geographic location for the web application.
This new feature of HTML5 allows you to navigate the latitude and longitude coordinates of the current website's visitor. These coordinates can be captured by JavaScript and send to the server which can show your current location on the website

Syntax:
1. geo=navigator. geolocation;   

Geolocation Methods:

A. getCurrentPosition()
It identifies the device or the user's current location and returns a position object with data.

B. watchPosition()
Return a value whenever the device location changes.

C.clearWatch()
It cancels the previous watchPosition() call


### How to specify headers in an HTML page?

HTML headings are titles or subtitles that you want to display on a webpage.

There are 6 headings tags from h1 to h6

h1 defines the most important heading. h6 defines the least important heading.

Example:

<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading  4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>



## CSS

### 2.Positioning properties:

CSS positioning properties are:

1.Bottom:
It is used to set the bottom margin edge for a positioned box.

2.Clip:
It is used to clip an absolutely positioned element.

3.Cursor
It is used to specify the type of cursors to be displayed.

4.Left
It sets a left margin edge for a positioned box.

5.Right
It is used to set a right margin edge for a positioned box.

6.Top
It is used to set a top margin edge for a positioned box.

7.Overflow:
This property is used to define what happens if content overflow an element's box.


### 3.Box-sizing: Content-Box and Border-Box
Box-sizing:

The box-sizing property defines how the width and height of an element are calculated: should they include padding and borders, or not. By default it has a value as content-box .

Syntax:
box-sizing: content-box | border-box| initial | inherit;

Content-box and Border-box are the two major property values of Box-sizing.

Content-box:
Default. The width and height properties (and min/max properties) includes only the content. Border and padding are not included

Border-box:
The width and height properties (and min/max properties) includes content, padding and border.



### 4.display and visibility:
1.display:

The display property specifies the display behaviour (the type of rendering box) of an element.
In HTML, the default display property value is taken from the HTML specifications or from the browser/user default style sheet. The default value in XML is inline, including SVG elements.

CSS Syntax:
Display: value;

A. Inline:
Displays an element as an inline element (like <span>). Any height and width properties will have no effect.

B. Block:
Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width.

C. Inline-block:
Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values

2.visibility:
The visibility property specifies whether or not an element is visible.  Default value of visibility is visible.

CSS syntax:
visibility: visible | hidden | collapse|initial|inherit;

A. visible:
This is Default value. The element is visible.

B. hidden:
 The element is hidden (but still takes up space).


### 6. Media queries - Write only standard numbers for phone, tablet and Desktop?
Media Query:
Media query is a CSS technique introduced in CSS3. It uses the @media rule to include a block of CSS properties only if a certain condition is true.

Example:

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

-> If the browser window is 600px or smaller, the background color will be lightblue:

For phones:

@media only screen and (min-width: 250px) {
  /* For phones: */
Body{
Background-color: blue;
}

For Tablets:

@media only screen and (min-width: 600px) {
  /* For tablets: */
Body{
Background-color: green;
}

For Desktop:

@media only screen and (min-width: 768px) {
  /* For Desktops: */
Body{
Background-color: blue;
}


## JS

### 1. What is Closure?
A closure is a function which having access to the parent scope and access the variables, even after the parent function has closed.

### 2. Significance of Arrow functions in ES6?
Arrow Function:

Arrow functions are anonymous functions. They don't return any value and can declare without the function keyword. Arrow functions cannot be used as the constructors. The context within the arrow functions is lexically or statically defined.

Arrow functions do not include any prototype property, and they cannot be used with the new keyword.

Advantages of Arrow Functions:

1. It reduces the code size: When we use the syntax of arrow function, the size of the code gets reduced. We can write less amount of code by using the arrow function.

2. Return statement and Functional braces are optional for single line functions:In ES5, we need to define the return statement in the functions, but in ES6, we do not require to define the return statement for single-line functions. Functional braces are also optional for the single-line functions.

3. Lexically bind the context: In regular functions, this keyword is used to represent the objects that called the function, which could either be a window, a button, or a document or anything.
But with arrow functions, this keyword always represents the object that defines the arrow function.

### 3. Explain two lines about below array methods and what is the return type of each method?
1.map()

The map() method creates a new array with the results of calling a function for every array element. It calls the provided function once for each element in an array, in order.

Syntax:
array.map(function(currentValue, index, arr), thisValue)

It return an array of elements.

2.filter()
The filter() method creates an array filled with all array elements that pass a test. filter() does not execute the function for array elements without values.

Syntax:
array.filter(function(currentValue, index, arr), thisValue)

It return an array.

3.find()
The find() method returns the value of the first element in an array that pass a test.

* If it finds an array element where the function returns a true value, find() returns the value of that array element and does not check the remaining values.
* Otherwise it returns undefined

Syntax:
array.find(function(currentValue, index, arr),thisValue)

4.forEach()
The forEach() method calls a function once for each element in an array, in order.

Syntax:
array.forEach(function(currentValue, index, arr), thisValue)

It return undefined.

5.reduce()
The reduce() method reduces the array to a single value.The reduce() method executes a provided function for each value of the array from left-to-right.

Syntax:
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

It return the  value of the function is stored in an accumulator (result/total).

6.some()
The some() method checks if any of the elements in an array pass a test provided as a function.

* If it finds an array element where the function returns a true value, some() returns true and does not check the remaining values.
* Otherwise it returns false

Syntax:
array.some(function(currentValue, index, arr), thisValue)

7.every()
The every() method checks if all elements in an array pass a test provided as a function.

* If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
* If no false occur, every() returns true

Syntax:
array.every(function(currentValue, index, arr), thisValue)

### 4.Shallow Copy and Deep copy?
Deep Copy:

When you create a deep copy, you create an identical copy of the original element with its properties.
The original and the copy are not connected, which means if you changed in original properties will not affect or change anything in the copied element.

*Primitive Types:
All elements with primitive types like numbers, strings, and boolean are deep copied which means that the copied element and the original are not connected and any change won’t affect the original element.

Example:

let x= 10;

let y = x;

y = 20;

Console.log(x);//10

Console.log(y);//20


Shallow Copy:

On the opposite side, when you create a shallow copy, you create a new copy that is connected to the original. So when you change the original element it will also affect and change the copied one and the same if you changed in the copied element it will change in the original.

Example:

const car1 = {color : "red" , wheels : 4};

let car2 = car1;

car2.color = "black";

console.log(car1.color);//black

console.log(car2.color);//black


### 5. Difference between function and function expressions?
Function Declaration:

A Function Declaration( or a Function Statement) defines a function with the specified parameters without requiring a variable assignment. They exist on their own, i.e, they are standalone constructs and cannot be nested within a non-function block. A function is declared using the function keyword.

Example:

function add(a, b){

console.log(a+b);

}

add(2, 3);// gives 5;

Function Expression:

A Function Expression works just like a function declaration or a function statement, the only difference is that a function name is NOT started in a function expression, that is, anonymous functions are created in function expressions. The function expressions run as soon as they are defined.

Example:

var add = function(a, b){

console.log(a+b);

}

add(7, 3); // gives 10

Another difference is variables function-declaration can be hoisted but in function expressions variables can not be hoisted.


### 6. Name Some Asynchronous call in javascript?
1.Callback function
A callback is a function passed as an argument to another function.

Example:

function add(a, b, callback){
      
      console.log(a+b);
      
      callback();

}

function callback() {
    
    console.log("hello");
}

add(2, 3, callback); // gives 5 and hello

2.Promises
The Promise object supports two properties: state and result.

  A JavaScript Promise object can be:
* Pending
* Fulfilled
* Rejected

Promise.then() takes two arguments, a callback for success and another for failure.

3.setTimeout() function

4.setInterval() function


### 7. What is higher order functions? Give an example.
Higher order functions are the functions which takes another function as its arguments or return other functions. 

Example:

function add(a, b, callback){

console.log(a+b);

callback();

}

function callback() {

console.log("hello");

}

add(2, 3, callback);

