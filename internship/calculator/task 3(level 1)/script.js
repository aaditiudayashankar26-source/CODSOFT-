function appendNumber(num) {
    document.getElementById("display").value+=num;
}

function clearDisplay() {
        document.getElementById("display").value="";
}

function calculate() {
    let display=document.getElementById("display");
try {
    display.value=eval(display.value);
}catch(err){
    display.value="Error";
  }
}



   