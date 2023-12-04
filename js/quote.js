const quotes = [{
    quote: `"The purpose of our lives is to be happy."`,
    author: `-Dalai Lama`
}, {
    quote: `"Live for each second without hesitation."`,
    author: `-Elton John`
}, {
    
    quote: `"The unexamined life is not worth living."`,
    author: `-Socrates`
}, {
    quote: `"Your time is limited, so dont waste it living someone elses life."`,
    author: `-Steve Jobs`
}, {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    author: `-Babe Ruth`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    author: `-Soren Kierkegaard`
}, {
    quote: `"In order to write about life first you must live it."`,
    author: `-Ernest Hemingway`
}, {
    quote: `"Turn your wounds into wisdom."`,
    author: `-Oprah Winfrey`
}, {
    quote: `"You only live once, but if you do it right, once is enough."`,
    author: `-Mae West`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    author: `-Albert Einstein`
}, {
    quote: `"We must let go of the life we have planned, so as to accept the one that is waiting for us."`,
    author: `-Joseph Campbell`
}]


let quote = document.querySelector("#quote");
let writer = document.querySelector("#author");

let random = Math.floor(Math.random() * quotes.length); 
quote.innerHTML = quotes[random].quote;
author.innerHTML = quotes[random].author;

setInterval(() =>{
 
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
   
  },86400)

