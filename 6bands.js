function calculate(Form) {
  var d1s = document.getElementById('one').selectedIndex;  var d1  = document.getElementById('one').options[d1s].value;
  var d2s = document.getElementById('two').selectedIndex;  var d2  = document.getElementById('two').options[d2s].value;
  var d3s = document.getElementById('three').selectedIndex;  var d3  = document.getElementById('three').options[d3s].value;
  var ms = document.getElementById('four').selectedIndex;  var m  = document.getElementById('four').options[ms].value;
  var ts = document.getElementById('five').selectedIndex;  var t  = document.getElementById('five').options[ts].value;
  var tcs = document.getElementById('six').selectedIndex;  var tc  = document.getElementById('six').options[tcs].value;

  if (d3 != " ")
    var res = ((100 * d1) + (10 * d2) + (1 * d3)) * m / 100;
  else
    var res = ((10 * d1) + (1 * d2)) * m / 100;

  if (res >= 1e6) {
    res /= 1e6;
    res += "M Ω"
  } else 
    if (res >= 1e3) {
      res /= 1e3;
      res += "k Ω"
    } else res += " Ω";
  res += " " + t;
  if (tc != "") res += " " + tc;
  document.getElementById('print').value = res;
  document.getElementById('printtxt').innerHTML = res;
}
