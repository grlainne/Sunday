// Alert and Hover Button
function onSubmit() {
    alert("amongussussysus");
}

function onHover() {
    document.getElementById("spider").innerText = "I SAID CLICK IT";
}

function onHoverOut() {
    document.getElementById("spider").innerText = "CLICK ME OR ELSE";
}

// Incrementing Button, odd numbers are red and even numbers are black
let amongus = 0
function Increment() {
    amongus = amongus + 1
    document.getElementById("counting").innerText = amongus;
    let color = amongus % 2 === 0 ? "black" : "red"
    document.getElementById("counting").style.color = color
}

// Footer with current year displayed
let currentYear = new Date().getFullYear();
document.getElementById("feet").innerText = `© ${currentYear} Gail Salinas`;


//LOOOOOOOOOps
    const numberlist = document.getElementById("numbers")
    for(let i = 1; i <= 100; i++){
        const listitems = document.createElement("Li")
        const even = i % 2 == 0
        listitems.innerHTML = even ? "Even" : "Odd"
        numberlist.appendChild(listitems)
        if(even) listitems.classList.add("Even")
        else listitems.classList.add("Odd")
}

