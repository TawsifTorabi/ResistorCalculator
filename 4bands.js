
function calculate(Form) {
  var d1s = document.getElementById('one').selectedIndex;  var d1  = document.getElementById('one').options[d1s].value;
  var d2s = document.getElementById('two').selectedIndex;  var d2  = document.getElementById('two').options[d2s].value;
  var d3s = document.getElementById('three').selectedIndex;  var d3  = document.getElementById('three').options[d3s].value;
  var ms = document.getElementById('four').selectedIndex;  var m  = document.getElementById('four').options[ms].value;
  var ts = document.getElementById('five').selectedIndex;  var t  = document.getElementById('five').options[ts].value;
  var tcs = document.getElementById('six').selectedIndex;  var tc  = document.getElementById('six').options[tcs].value;
  if (d3 != " ")
    var result = ((100 * d1) + (10 * d2) + (1 * d3)) * m / 1000;
  else
    var result = ((10 * d1) + (1 * d2)) * m / 1000;

  if (result >= 1e6) {
    result /= 1e6;
    result += "M Ω"
  } else 
    if (result >= 1e3) {
      result /= 1e3;
      result += "k Ω"
    } else result += " Ω";
  result += " " + t;
  if (tc != "") result += " " + tc;
  
  document.getElementById('print').value = result;
  document.getElementById('printtxt').innerHTML = 'Value is ' +result;
}
