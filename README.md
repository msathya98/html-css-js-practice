# html-css-js-practice

## HTML

### 1.Types of elements inn HTML?
-There are mainly two types in HTML elements 
-1.Block-level Elements
-A block-level element always starts on a new line. Block-level element always takes up the full width available. It has a top and a bottom ---margin, whereas an inline element does not.
-Example: 
-<div>Helloworld</div>
-<address>, <h1>, <aside>, <main> , <nav> and etc

- 2.Inline Elements
-An inline element does not start on a new line. An inline element only takes up as much width as necessary. 
-Example:
-<span> tag is good example for Inline-element.
-<span>Hello Sathya</span>
-<a>, <button>, <label>, <textarea> , <input> etc.

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
The HTTP headers are used to pass additional information between the clients and the server through the request and response header. All the headers are case-insensitive, headers fields are separated by colon, key-value pairs in clear-text string format. The end of the header section denoted by an empty field header. 

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
There are 6 headings tags from <h1> to <h6>
<h1> defines the most important heading. <h6> defines the least important heading.
Example:
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading  4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>

