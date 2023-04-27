"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: 
      Date:   

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

/* Check if sbloggerVisit exists in local storage */

if (localStorage.sbloggerVisit) {

/* Retrieve the value of sbloggerVisit key from local storage and save it to storedLastDate variable */
let storedLastDate = localStorage.getItem("sbloggerVisit");

/* Display the value of storedLastDate as the text content of the lastVisitDate object */
lastVisitDate.textContent = storedLastDate;

/* Declare the lastDate variable and store a Date object using the value of storedLastDate variable */
let lastDate = new Date(storedLastDate);

/* Iterate through each item in the articleDates collection */
for (let date of articleDates) {
      /* Declare the articleDate variable and store a Date object using the date text of the current item in the loop */
let articleDate = new Date(date.textContent);

/* Check if articleDate is greater than lastDate */
if (articleDate > lastDate) {
  
  /* Add "<strong>new</strong>" to the HTML content of the current item in the articleDates collection */
  date.innerHTML += "<strong>new</strong>";
  
}
}

} else {

/* If sbloggerVisit does not exist, change the text content of the lastVisitDate object to "Welcome to SBlogger!" */
lastVisitDate.textContent = "Welcome to SBlogger!";

/* Iterate through each item in the articleDates collection */
for (let date of articleDates) {
      /* Add "<strong>new</strong>" to the HTML content of the current date item */
date.innerHTML += "<strong>new</strong>";
}

}

/* Update the stored date value in the sbloggerVisit key */
let currentDate = new Date("9/12/2024");
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());
