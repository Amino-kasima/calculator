const button = document.getElementsByClassName("btn");
const clear = document.getElementById("clear");
const bracket = document.getElementsByClassName("bracket");
const percentage = document.getElementById("percentage");
const division = document.getElementById("division");
const multplication = document.getElementById("multplication");
const subtraction= document.getElementById("subtraction");
const addition = document.getElementById("addition");
const addsub = document.getElementsByClassName("addsub");
const equal = document.getElementById("equal");
const keybaord = document.getElementById("keybaord");
const backspace = document.getElementById("backspace");



for (let i = 0; i<button.length; i++){
  button[i].addEventListener("click", function(){
    keybaord.value = keybaord.value+ button[i].innerText;
  })
}



backspace.addEventListener("click", function(){
  keybaord.value = keybaord.value.slice(0, -1)
})

percentage.addEventListener("click", function(){
  keybaord.value = (keybaord.value)*(1/100) +"%"
})

clear.addEventListener("click", function(){
  keybaord.value = ""
})

division.addEventListener("click", function(){
  keybaord.value = keybaord.value + "/" + "";
})

multplication.addEventListener("click", function(){
  keybaord.value = keybaord.value + "*";
})

subtraction.addEventListener("click", function(){
  keybaord.value = keybaord.value + "-";
})

addition.addEventListener("click", function(){
  keybaord.value = keybaord.value + "+";
})

equal.addEventListener("click", function(){
keybaord.value =eval(keybaord.value)

})
