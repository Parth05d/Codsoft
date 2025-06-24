let display = document.getElementById("display");

function appendValue(value){
  console.log(value);
  display.value += value;
}

function clearDisplay(){
  display.value = '';
}

function plusMinus(){
  display.value = -display.value;
}

function result(){
  try{
    display.value = eval(display.value);
  } catch{
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    result();
  }
});