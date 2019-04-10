console.log("Hello Deep");

const headerEl = document.querySelector(".article__header");
headerEl.textContent = "Welcome to the Deep blog";

console.log("headerEl", headerEl);

const headerAll = document.querySelectorAll(".article__header");

console.log(headerAll);

headerAll.classList.add("important");
