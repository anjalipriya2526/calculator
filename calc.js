var result = document.getElementById("resultBox");

function clickedNum (numValue) {
    result.value += numValue; 
}

function clickedEquals() {
    if(result.value === ""){
        result.value = "0";
    }
    var resultNum = eval(result.value);
    result.value = resultNum.toString();
}

function clickedClear() {
    result.value = "";
}