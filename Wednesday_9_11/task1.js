
//  onmouseover   ,,  onmouseout


let btn = document.getElementById('btn');

btn.addEventListener('mouseover', function(){
    btn.style.background = 'red';
})
btn.addEventListener('mouseout', function(){
    btn.style.background = 'blue';
})



var i = 0;
var j = 0;
function change() {
  var doc = document.getElementById("btn2");
  var color1 = ["blue", "red" , "green" , "yellow"];
  var color2=["yellow" , "green" , "black" , "red"]
  doc.style.backgroundColor = color1[i];
  doc.style.Color = color2[i];
  i = (i + 1) % color1.length;
  j = (j + 1) % color2.length;
}
setInterval(change, 1000);

