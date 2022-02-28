let char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '?', '~']

let password1 = document.getElementById("passwords1")
let password2 = document.getElementById("passwords2")
let password3 = document.getElementById("passwords3")
let password4 = document.getElementById("passwords4")


function getRandomItem() {
    var item = char[Math.floor(Math.random()*char.length)];
    var password = char.push(item)

    for (let i = 0; i < 1; i++) {

        password1.textContent += item
    }
  }

function getRandomItem2() {
    var item = char[Math.floor(Math.random()*char.length)];
    var password = char.push(item)

    for (let i = 0; i < 1; i++) {

        password2.textContent += item
    }}

function getRandomItem3() {
        var item = char[Math.floor(Math.random()*char.length)];
        var password = char.push(item)
    
        for (let i = 0; i < 1; i++) {
    
            password3.textContent += item
        }}

function getRandomItem4() {
            var item = char[Math.floor(Math.random()*char.length)];
            var password = char.push(item)
            for (let i = 0; i < 1; i++) {
        
                password4.textContent += item
            }}


function getRandomPassword() {
    password1.textContent = '' 
    password2.textContent = '' 
    password3.textContent = '' 
    password4.textContent = '' 
    for (let i = 0; i < 8; i++) {
        getRandomItem(char);
        getRandomItem2(char);
        getRandomItem3(char);
        getRandomItem4(char);
}}

function clickToCopy() {
    /* Get the text field */
    var copyText = password1;
  
    /* Select the text field */
    copyText.select("passwords1");
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);

    console.log(copyText)
  }





