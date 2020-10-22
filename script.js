function getHistory() {
  return document.getElementById("history_value").innerText;
}
function printHistory(num) {
  document.getElementById("history_value").innerText = num;
}
function getOutput() {
  return document.getElementById("output_value").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("output_value").innerText = num;
  } else {
    document.getElementById("output_value").innerText = stringFormat(num);
  }
}
function stringFormat(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function numberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = numberFormat(getOutput()).toString();
      if (output) {
        //if output has a value
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
          if(output==""){
              output=output;
            }else{
                numberFormat(output)
            }
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = numberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}

  document.addEventListener("keypress", function (e) {
      if (e.keyCode === 96 || e.keyCode === 48 ) {
          b='0'
      }else if (e.keyCode === 97 || e.keyCode === 49 ) {
        b='1'
    }else if (e.keyCode === 98 || e.keyCode === 50 ) {
      b='2'
  }else if (e.keyCode === 99 || e.keyCode === 51 ) {
    b='3'
}else if (e.keyCode === 100 || e.keyCode === 52 ) {
  b='4'
}else if (e.keyCode === 101 || e.keyCode === 53 ) {
  b='5'
}else if (e.keyCode === 102 || e.keyCode === 54 ) {
  b='6'
}else if (e.keyCode === 103 || e.keyCode === 55 ) {
  b='7'
}else if (e.keyCode === 104 || e.keyCode === 56 ) {
  b='8'
}
else if (e.keyCode === 105 || e.keyCode === 57 ) {
  b='9'
}
else{
  alert("invalid input")
} var output = numberFormat(getOutput());
if (output != NaN) {
  output = output + b;
  printOutput(output);
}
  });

