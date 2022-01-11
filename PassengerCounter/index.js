
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}
function save(){
    let countStr = count + " - "
    console.log(count)
    saveEl.textContent += countStr
    countEl.innerText = 0;
    count = 0;
}
function clearCount(){
    countEl.innerText = 0;
    saveEl.textContent = "Previous entries: "
    count = 0;
}

