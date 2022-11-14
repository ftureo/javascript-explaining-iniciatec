const buttonCounter = document.getElementById("button-counter");
const counterView = document.getElementById("counter-view");

console.log(buttonCounter);
console.log(counterView);

let counter = 0

buttonCounter.addEventListener("click", (event) => {
    console.log("event", event);
    console.log("click");
    counter++
    console.log(counter);
    counterView.textContent = counter;
})

const inputName = document.getElementById("input-name")
const inputContent = document.getElementById("input-content")

console.log(inputName);
console.log(inputContent);

inputName.addEventListener("change", (event) => {
    console.log("event", event.target.value);
    const content = event.target.value.toLowerCase();
    console.log("change");
    inputContent.textContent = content;
})

