const promise = new Promise((resolve, reject) => {
   setTimeout(() => {resolve();
   },3000)}, 3000) 

promise.then(() => console.log("hello"))
       .then(() => console.log("WHAT IS THIS"))
       .catch(()=> console.log("error"));

url = "http://newsapi.org/v2/everything?q=cricket&from=2021-03-02&sortBy=publishedAt&apiKey=16e6ffaa1cea436fb8a9ee615c2a608e";

fetch(url).then( response => response.json())
.then(data => console.log(data));
