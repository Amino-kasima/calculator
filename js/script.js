const display = document.getElementById("display");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const bracket = document.getElementById("bracket");
const percent = document.getElementById("percent");
const division = document.getElementById("division");
const button = document.getElementsByClassName("btn");
const product = document.getElementById("product");
const sub = document.getElementById("sub");
const add = document.getElementById("add");
const equal = document.getElementById("equal");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        display.value += button[i].innerText;
    });
}

clear.addEventListener("click", function(){
    display.value = ""
})

bracket.addEventListener("click", function() {
    let value = display.value;

    // Count number of ( and )
    let openBrackets = (value.match(/\(/g) || []).length;
    let closeBrackets = (value.match(/\)/g) || []).length;

    if (openBrackets === closeBrackets) {
        // Insert opening bracket
        display.value += "(";
    } else {
        // Insert closing bracket
        display.value += ")";
    }
});


backspace.addEventListener("click", function(){
    display.value = display.value.slice(0, -1);
})

percent.addEventListener("click", function(){
    display.value = display.value * (1/100) +"%"
})

division.addEventListener("click", function(){
    display.value = display.value + "/";
})

product.addEventListener("click", function(){
    display.value = display.value + "*";
})
sub.addEventListener("click", function(){
    display.value = display.value + "-";
})

add.addEventListener("click", function(){
    display.value = display.value + "+";
})


equal.addEventListener("click", function(){
    display.value = eval(display.value)
})

const addsub = document.querySelector(".addsub");

addsub.addEventListener("click", function() {

    let value = display.value;

    if (value === "") return;

    // If already negative, remove minus
    if (value.startsWith("-")) {
        display.value = value.substring(1);
    } 
    // Otherwise make it negative
    else {
        display.value = "-" + value;
    }

});
