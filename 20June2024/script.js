const input = document.getElementById("input");
const btn = document.getElementById("btn");
const task = document.querySelector(".task");
const cont = document.querySelector(".container");
const bdy = document.querySelector("body")

function add() {

    if (input.value === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;

        let span = document.createElement("span");
        span.innerHTML = "Delete";

        let container = document.createElement("div"); 
         container.style.display='flex'
         container.style.justifyContent='space-between'
         container.style.alignItem='center'
         container.style.margin='10px 20px 7px 20px'

        container.appendChild(li); 
        container.appendChild(span); 

        task.appendChild(container); 

        input.value = "";
        saveData();
    }
}

task.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); 
        console.log("Removed");
    } else {
        console.log("Not removed");
    }
    saveData();
}, false);

// Save data in localStorage
function saveData() {
    localStorage.setItem("data", task.innerHTML);
}

function show() {
    task.innerHTML = localStorage.getItem("data");
}
show();

btn.addEventListener("click", add);

// Random color generating
function getRandomColor(){
    let a = Math.ceil(0 + Math.random() * 255);
    let b = Math.ceil(0 + Math.random() * 255);
    let c = Math.ceil(0 + Math.random() * 255);
    return `rgb(${a},${b},${c})`
}

setInterval(() => {
    const randomColor = getRandomColor();
    bdy.style.backgroundColor = randomColor;
}, 1000);















