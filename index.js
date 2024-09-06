// 

function changeBackground() { // darkMode
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

const display = document.getElementById("input");

    function appendToDisplay(input){
        display.value += input;
    }

    function clearDisplay(){
        display.value = "";
    }

    function calculate(){
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error";
        }
    }

    function negative() {
        display.value = -Math.abs(parseFloat(display.value) || 0);
    }

    function percent() {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (0.01 * currentValue).toString();
        } else {
            display.value = "Error"; 
        }
    }
    
    